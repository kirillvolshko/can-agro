import type { Metadata } from "next";
import { Play, Rubik } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { Toaster } from "../components/ui/sonner";

const playFont = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-play",
});

const rubikFont = Rubik({
  subsets: ["latin"],
  weight: ["400", "700", "500"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Can Agro",
  description:
    "We provide modern agricultural machinery, innovative solutions and trusted partnerships to help farmers achieve more.",
  keywords: [
    "Agriculture",
    "Farming",
    "Machinery",
    "Can Agro",
    "Sustainable Farming",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://can-agro.com",
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
        className={`${playFont.variable} ${rubikFont.variable} antialiased `}
      >
        <Header />
        {children}

        <Toaster />
      </body>
    </html>
  );
}
