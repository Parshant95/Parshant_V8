import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://parshant-v8.vercel.app";

export const metadata: Metadata = {
  // ─── Browser tab title ───────────────────────────────────────────────────
  title: {
    default: "Parshant Vardhan | Full Stack Developer",
    template: "%s | Parshant Vardhan",
  },

  // ─── Meta description (used by Google) ───────────────────────────────────
  description:
    "Portfolio of Parshant Vardhan — Full Stack Dev Intern @ RhythmiqCX, Patented Inventor (App No: 202411070768), and CSE student at Chandigarh University. Expert in Next.js, React, MongoDB, Firebase, and AI-powered products.",

  // ─── Canonical base URL ───────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),

  // ─── Keywords ─────────────────────────────────────────────────────────────
  keywords: [
    "Parshant Vardhan",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "MongoDB",
    "Firebase",
    "AI Developer",
    "Chandigarh University",
    "RhythmiqCX",
    "Patent",
  ],

  // ─── Author ───────────────────────────────────────────────────────────────
  authors: [{ name: "Parshant Vardhan", url: BASE_URL }],
  creator: "Parshant Vardhan",

  // ─── Favicon ──────────────────────────────────────────────────────────────
  icons: {
    icon: [{ url: "/images/favi.png", type: "image/png" }],
    shortcut: "/images/favi.png",
    apple: "/images/favi.png",
  },

  // ─── Open Graph (LinkedIn / Facebook / WhatsApp) ──────────────────────────
  openGraph: {
    title: "Parshant Vardhan | Full Stack Developer",
    description:
      "I build AI-powered products that actually ship. Full Stack Dev @ RhythmiqCX · Patented Inventor · 300+ LeetCode · 10+ projects.",
    url: BASE_URL,
    siteName: "Parshant Vardhan Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parshant Vardhan — Full Stack Developer Portfolio",
      },
    ],
  },

  // ─── Twitter / X card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Parshant Vardhan | Full Stack Developer",
    description:
      "I build AI-powered products that actually ship. Full Stack Dev @ RhythmiqCX · Patented Inventor.",
    images: ["/og-image.png"],
    creator: "@parshant",
  },

  // ─── Robots / indexing ────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
