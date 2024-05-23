import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ReactNode } from "react";
import Navbar from "@/components/global/navbar/Navbar";
import AdSection from "@/components/global/AdSection";
import Footer from "@/components/global/Footer";

export const metadata: Metadata = {
  title: "Canna smoke here",
  description: "Geolocation checking website for cannabis smokers in Germany",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-grow justify-center">
        <Providers>
          <div className="flex flex-grow flex-col justify-center items-center">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
