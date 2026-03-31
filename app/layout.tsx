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
  title: "RankFlow - AI-First Development Studio",
  description: "We build what grows your business in the AI era.",
  // ... rest of metadata ...
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
