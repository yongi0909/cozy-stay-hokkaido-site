"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

type FormState = "idle" | "submitting" | "success" | "error";

export default function OtoiawasePage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // TODO: Connect to backend / email service
    // Simulating submission
    await new Promise((r) => setTimeout(r, 1000));
    setFormState("success");
  };

  return (
    <>
      <PageHeader
        label="CONTACT"
        title="お問い合わせ"
        description="金融機関・取引先・事業パートナーの方からのお問い合わせをお受けしています。"
      />

      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <SectionTitle label="CONTACT INFO" title="連絡先" />
              <div className="mt-8 space-y-7">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 text-gold-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-sans mb-0.5 tracking-wide">代表電話</p>
                    <a
                      href="tel:011-000-0000"
                      className="text-navy-800 text-base font-medium font-sans hover:text-navy-600 transition-colors"
                    >
                      011-000-0000
                    </a>
                    <p className="text-gray-400 text-xs font-sans mt-0.5">平日 9:00〜18:00</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 text-gold-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-sans mb-0.5 tracking-wide">メールアドレス</p>
                    <a
                      href="mailto:contact@cozystayhokkaido.jp"
                      className="text-navy-800 text-sm font-medium font-sans hover:text-navy-600 transition-colors break-all"
                    >
                      contact@cozystayhokkaido.jp
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 text-gold-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-sans mb-0.5 tracking-wide">所在地</p>
                    <p className="text-navy-800 text-sm font-sans leading-relaxed">
                      〒064-0809<br />
                      北海道札幌市中央区<br />
                      南9条西4丁目3-15-202
                    </p>
                    <p className="text-gray-400 text-xs font-sans mt-1">
                      COZY STAY北海道株式会社
                    </p>
                  </div>
                </div>

                {/* Company quick info */}
                <div className="pt-6 border-t border-cream-200">
                  <p className="text-xs text-gray-400 font-sans mb-3 tracking-wide">COMPANY INFO</p>
                  <dl className="space-y-2 text-xs font-sans">
                    <div className="flex gap-3">
                      <dt className="text-gray-400 w-20 flex-shrink-0">代表取締役</dt>
                      <dd className="text-gray-700">西原 龍起</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="text-gray-400 w-20 flex-shrink-0">設立</dt>
                      <dd className="text-gray-700">2025年6月23日</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="text-gray-400 w-20 flex-shrink-0">資本金</dt>
                      <dd className="text-gray-700">300万円</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionTitle label="INQUIRY FORM" title="お問い合わせフォーム" />

              {formState === "success" ? (
                <div className="mt-10 bg-cream-50 border border-cream-200 p-10 text-center">
                  <svg
                    className="w-10 h-10 text-gold-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p
                    style={{ fontFamily: "var(--font-serif)" }}
                    className="text-navy-800 text-lg font-semibold mb-3"
                  >
                    送信が完了しました
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-sans">
                    お問い合わせいただきありがとうございます。<br />
                    担当者より改めてご連絡いたします。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        会社名・組織名
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors"
                        placeholder="株式会社〇〇　/ 〇〇銀行"
                      />
                    </div>
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        お名前 <span className="text-red-400 ml-1">必須</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors"
                        placeholder="山田 太郎"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors"
                        placeholder="011-000-0000"
                      />
                    </div>
                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        メールアドレス <span className="text-red-400 ml-1">必須</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors"
                        placeholder="example@company.jp"
                      />
                    </div>
                    {/* Category */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        お問い合わせ種別
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors"
                      >
                        <option value="">選択してください</option>
                        <option value="financial">金融機関・融資に関するお問い合わせ</option>
                        <option value="partner">事業提携・パートナーシップ</option>
                        <option value="property">物件・施設に関するお問い合わせ</option>
                        <option value="media">取材・メディア</option>
                        <option value="other">その他</option>
                      </select>
                    </div>
                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        お問い合わせ内容 <span className="text-red-400 ml-1">必須</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors resize-none"
                        placeholder="お問い合わせ内容をご記入ください。"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" required className="mt-0.5 accent-navy-800" />
                    <label htmlFor="privacy" className="text-xs text-gray-500 font-sans leading-relaxed">
                      個人情報の取り扱いについて同意の上、送信します。
                      お問い合わせいただいた個人情報は、ご連絡の目的以外には使用いたしません。
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full sm:w-auto px-10 py-4 bg-navy-800 text-white text-sm font-medium tracking-wider hover:bg-navy-700 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed font-sans"
                  >
                    {formState === "submitting" ? "送信中..." : "送信する"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
