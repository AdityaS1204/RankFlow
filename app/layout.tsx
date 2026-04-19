import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL('https://rankflow.in'),
  title: {
    default: "RankFlow | AI-First Development Studio",
    template: "%s | RankFlow"
  },
  description: "RankFlow is an AI-first development studio. We build high-performance web applications, automate workflows, and scale businesses in the AI era.",
  keywords: ["AI Development", "Next.js", "Web Development", "Automation", "Software Studio", "RankFlow","Fine-tuning","RAG","AI Agents", "internal copilots"],
  authors: [{ name: "RankFlow Team" }],
  creator: "RankFlow",
  publisher: "RankFlow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rankflow.in",
    siteName: "RankFlow",
    title: "RankFlow | AI-First Development Studio",
    description: "We build what grows your business in the AI era. High-performance web applications and AI-driven solutions.",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
        alt: "RankFlow - AI-First Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RankFlow | AI-First Development Studio",
    description: "We build what grows your business in the AI era. High-performance web applications and AI-driven solutions.",
    images: ["/og-img.png"],
    creator: "@aaditya0124", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://rankflow.in",
  },
};

import Script from "next/script";
import { ModalProvider } from "@/context/ModalContext";
import Chatbot from "@/components/Chatbot/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="fa1c2bb7-4c61-493f-afa2-23d41a9480a4"
          async
        >
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ModalProvider>
          {children}
          <Chatbot />
        </ModalProvider>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
