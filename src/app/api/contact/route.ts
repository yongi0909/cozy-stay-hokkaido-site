import { NextResponse } from "next/server";

const mailEndpoint = "https://booking.cozystayhokkaido.jp/api/corporate-contact";
// メッセージ管理アプリ（guest-auto-reply）の受信口。ここへ直接渡すと、フォームに入力されたアドレスが送り主になり、そのまま返信できる
const inboxEndpoint = process.env.INBOX_FORM_URL || "https://inbox.cozystayhokkaido.jp/api/inbound/form";

/** 受信箱へ直接届ける。合言葉が未設定・失敗したときは false（メールでの転送に切り替える） */
async function deliverToInbox(payload: Record<string, unknown>): Promise<boolean> {
  const secret = process.env.FORM_INBOUND_SECRET;
  if (!secret) return false;
  try {
    const res = await fetch(inboxEndpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "error",
      signal: AbortSignal.timeout(15_000),
    });
    const json = await res.json().catch(() => null);
    if (res.ok && json?.ok === true) return true;
    console.error("Inbox delivery failed", res.status);
  } catch {
    console.error("Inbox delivery unavailable");
  }
  return false;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const { company, name, email, phone, category, message } = body ?? {};

    // Basic validation
    if (
      typeof name !== "string" || !name.trim() || name.length > 200 || /[\r\n]/.test(name) ||
      typeof email !== "string" || email.length > 254 || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email) ||
      typeof message !== "string" || !message.trim() || message.length > 25000 ||
      [company, phone, category].some(value => value != null && (typeof value !== "string" || value.length > 500))
    ) {
      return NextResponse.json({ error: "お名前、メールアドレス、お問い合わせ内容を確認してください。" }, { status: 400 });
    }

    const categoryLabel: Record<string, string> = {
      partner: "事業提携・パートナーシップ",
      property: "物件・施設に関するお問い合わせ",
      media: "取材・メディア",
      other: "その他",
    };

    const subject = `【お問い合わせ】${categoryLabel[category] ?? "未選択"} — ${name}`;
    const delivered = await deliverToInbox({
      brand: "corporate",
      id: crypto.randomUUID(),
      name,
      email,
      subject,
      message,
      fields: {
        "会社名・組織名": company || "",
        "電話番号": phone || "",
        "お問い合わせ種別": categoryLabel[category] ?? "未選択",
      },
    });
    if (delivered) return NextResponse.json({ ok: true });

    const token = process.env.CORPORATE_CONTACT_TOKEN;
    if (!token) throw new Error("Contact delivery is not configured");

    const inquiry = {
      replyTo: email,
      subject,
      text: [
        `■ お名前: ${name}`,
        `■ 会社名・組織名: ${company || "—"}`,
        `■ メールアドレス: ${email}`,
        `■ 電話番号: ${phone || "—"}`,
        `■ お問い合わせ種別: ${categoryLabel[category] ?? "未選択"}`,
        ``,
        `■ お問い合わせ内容:`,
        message,
      ].join("\n"),
    };
    const delivery = await fetch(mailEndpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(inquiry),
      redirect: "error",
    });

    if (!delivery.ok || (await delivery.json()).ok !== true) {
      console.error("Contact delivery failed", delivery.status);
      return NextResponse.json({ error: "送信に失敗しました。" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "サーバーエラーが発生しました。" }, { status: 500 });
  }
}
