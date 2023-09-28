import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "카드 카운팅 (Card Counting)",
  description:
    "카드 히스토리를 기록할 수 있는 앱입니다. This is an app that can record card history by card counting.",
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
