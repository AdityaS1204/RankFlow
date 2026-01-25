import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const instrumentSans = Instrument_Sans({
  weight: "400",
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});
const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rankflow.in'),
  title: "RankFlow - AI-Optimized Landing Pages",
  description: "Get custom landing pages that convert.",
  icons: {
    icon: [
      { url: '/icon.png', href: '/icon.png', sizes: 'any', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "RankFlow - AI-Optimized Landing Pages",
    description: "Get custom landing pages that convert.",
    images: [
      {
        url: "/rankflow.png",
        width: 1200,
        height: 630,
        alt: "RankFlow - AI-Optimized Landing Pages",
      },
    ],
    siteName: "RankFlow",
    locale: "en_US",
    type: "website",
    url: "https://rankflow.in",
  },
  twitter: {
    title: "RankFlow - AI-Optimized Landing Pages",
    description: "Get custom landing pages that convert.",
    card: "summary_large_image",
    images: [
      {
        url: "/rankflow.png",
        width: 1200,
        height: 630,
        alt: "RankFlow - AI-Optimized Landing Pages",
      },
    ],
    site: "@RankFlow",
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
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}
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
