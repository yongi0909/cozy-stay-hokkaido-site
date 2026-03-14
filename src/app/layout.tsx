import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans-jp",
  display: "swap",
  preload: false,
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "600", "700"],
  variable: "--font-serif-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "COZY STAY北海道株式会社 | 北海道の宿泊施設運営",
  description:
    "北海道（札幌・旭川）における宿泊施設の運営・管理を手がける企業。旅館業・民泊の運営、予約管理、ゲスト対応、清掃管理を一括で提供しています。",
  keywords: "北海道, 宿泊施設, 民泊, 旅館, 札幌, 旭川, COZY STAY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} antialiased`}
      >
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
