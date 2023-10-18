import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const notoSansTC = Noto_Sans_TC({
  subsets: ["latin", "latin-ext", "cyrillic"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Learn Bopomofo",
  description: "Bopomofo, IPA, and Pinyin soundboard.",
  metadataBase: new URL("https://bopomofo.austinshelby.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansTC.className}>{children}</body>
    </html>
  );
}
