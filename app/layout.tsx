import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ReactNode } from "react";
import Navbar from "@/components/global/navbar/Navbar";
import Footer from "@/components/global/footer/Footer";
import MobileFooter from "@/components/global/footer/MobileFooter";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Canna smoke here",
  description: "Geolocation checking website for cannabis smokers in Germany",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
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
      </Head>
      <body className="min-h-screen flex flex-col justify-center p-2">
        <Providers>
          <div className="flex flex-col min-h-screen w-full">
            <div className="flex justify-center lg:hidden md:hidden">
              <MobileFooter />
            </div>
            <Navbar />
            <main className="flex justify-center items-center">{children}</main>
            <div className="hidden lg:block md:block">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
