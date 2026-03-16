import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "contact@cozystayhokkaido.jp";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { company, name, email, phone, category, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "必須項目が不足しています。" }, { status: 400 });
    }

    const categoryLabel: Record<string, string> = {
      partner: "事業提携・パートナーシップ",
      property: "物件・施設に関するお問い合わせ",
      media: "取材・メディア",
      other: "その他",
    };

    const { error } = await resend.emails.send({
      from: "COZY STAY北海道 お問い合わせフォーム <onboarding@resend.dev>",
      to: [TO],
      replyTo: email,
      subject: `【お問い合わせ】${categoryLabel[category] ?? "未選択"} — ${name}`,
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
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "送信に失敗しました。" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "サーバーエラーが発生しました。" }, { status: 500 });
  }
}
