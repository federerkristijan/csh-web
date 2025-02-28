import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ReactNode } from "react";
import Navbar from "@/components/global/navbar/Navbar";
import Footer from "@/components/global/footer/Footer";
import MobileFooter from "@/components/global/footer/MobileFooter";
import Head from "next/head";
import Script from "next/script";
import SeedsmanBanner from "@/components/global/SeedsmanBanner1";

export const metadata: Metadata = {
  title: "Canna smoke here",
  description: "Geolocation checking website for cannabis smokers in Germany",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
          {/* Viewport for responsive design */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Canna smoke here</title>
        <meta
          name="description"
          content="Geolocation checking website for cannabis smokers in Germany"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cannasmokehere.de/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Canna smoke here" />
        <meta
          property="og:description"
          content="Geolocation checking website for cannabis smokers in Germany"
        />
        <meta property="og:url" content="https://www.cannasmokehere.de/" />
        <meta property="og:type" content="website" />
        {/* Replace with your OG image URL */}
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Canna smoke here" />
        <meta
          name="twitter:description"
          content="Geolocation checking website for cannabis smokers in Germany"
        />
        <meta name="twitter:image" content="https://www.cannasmokehere.de/og-image.jpg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.cannasmokehere.de/",
              "name": "Canna smoke here",
              "description": "Geolocation checking website for cannabis smokers in Germany"
            }
          `}
        </script>
      </Head>
      <body className="flex flex-col min-h-screen">
        <Script
          src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
          strategy="beforeInteractive"
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WH9J1QB19M"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WH9J1QB19M');
          `}
        </Script>
        <Providers>
          <div className="flex flex-col min-h-screen items-center">
            <div className="flex justify-center lg:hidden md:hidden">
              <MobileFooter />
            </div>
            <div className="mb-[20px] mt-[40px]">
              <Navbar />
            </div>
            <main className="flex-grow flex flex-col overflow-y-auto pt-0">
              {children}
            </main>
            <SeedsmanBanner />
            <div className="hidden lg:block md:block">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
