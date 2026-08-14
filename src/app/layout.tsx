import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://contentian-ai.vercel.app'),
  title: "Contentian — AI Content Creation Platform",
  description: "Create platform-ready social media content with AI. Generate titles, captions, descriptions and hashtags for Pinterest, Instagram, LinkedIn and more.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Contentian — AI Content Creation Platform',
    description: 'Create platform-ready social media content with AI. Generate titles, captions, descriptions and hashtags for Pinterest, Instagram, LinkedIn and more.',
    url: 'https://contentian-ai.vercel.app',
    siteName: 'Contentian',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
