import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Card Counting (카드 카운팅)",
  description:
    "This is an app that can record card history by card counting. 카드 히스토리를 기록할 수 있는 앱입니다.",
  openGraph: {
    images: "/opengraph-image.jpg",
  },
  keywords: [
    "카드",
    "카운팅",
    "카드 카운팅",
    "card",
    "counting",
    "card counting",
    "블랙잭",
    "blackjack",
    "카지노",
    "casino",
    "바카라",
    "baccara",
    "baccarat",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
