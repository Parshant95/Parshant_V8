import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parshant Vardhan | Full Stack Developer",
  description:
    "Personal portfolio of Parshant Vardhan — Full Stack Developer & BE-CSE student at Chandigarh University. Specilized in Next.js, AI tools, and production-ready applications.",
  openGraph: {
    title: "Parshant Vardhan | Full Stack Developer",
    description:
      "I build real products from AI platforms to wallpaper websites.",
    url: "https://parshantvardhan.vercel.app/", // Replace with actual URL if known
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Parshant Vardhan Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
