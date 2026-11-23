import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dducnv.github.io"),
  title: "Gửi Phương Anh 🎀",
  description: "Một chiếc thư nhỏ 💌",
  openGraph: {
    title: "Gửi Phương Anh 🎀",
    description: "Một chiếc thư nhỏ 💌",
    url: "https://dducnv.github.io/thu-xin-loi-phuong-anh",
    siteName: "Gửi Phương Anh",
    images: [
      {
        url: "/hello-kitty/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Gửi Phương Anh 🎀",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gửi Phương Anh 🎀",
    description: "Một chiếc thư nhỏ 💌",
    images: ["/hello-kitty/og-preview.png"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
