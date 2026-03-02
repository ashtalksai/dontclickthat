import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Don't Click That — AI Scam Protection for Seniors",
  description: "Protect your loved ones from scams with AI-powered email and call screening. Family dashboard keeps you informed. Start your free trial today.",
  keywords: ["scam protection", "elder fraud", "phishing protection", "senior safety", "AI security"],
  openGraph: {
    title: "Don't Click That — Stop Scams Before They Reach Your Parents",
    description: "AI-powered scam protection for seniors. Screens emails, calls, and texts. Family dashboard for peace of mind.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
