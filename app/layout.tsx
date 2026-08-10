import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://dducnv.github.io"),
  title: {
    default: "Nguyễn Văn Đức - Software Engineer Portfolio",
    template: "%s | Nguyễn Văn Đức",
  },
  description: "Lập trình viên Flutter chuyên phát triển ứng dụng di động Android & iOS, có 3 sản phẩm nổi bật, Tessera Arcade, CyberSafe và Modipix",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-96x96.png", sizes: "96x96" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="dRDnqYlJmIUyDeb5jrw2PprrJisSDrAXeU36j1BwzAg" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-zinc-900 selection:bg-gray-200 selection:text-black`}>
        
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
