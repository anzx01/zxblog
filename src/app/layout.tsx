import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL, SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anzx01.github.io/zxblog";
const siteDescription = "粗犷、大胆、原创内容的 Neo-brutalism 风格博客";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SITE_NAME,
  description: siteDescription,
  openGraph: {
    title: SITE_NAME,
    description: siteDescription,
    images: [HOME_OG_IMAGE_URL],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/favicon/favicon.svg"
          type="image/svg+xml"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#0066FF" />
        <meta name="msapplication-TileColor" content="#0066FF" />
      </head>
      <body className="min-h-screen" style={{backgroundColor: 'var(--neob-light-gray)'}}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
