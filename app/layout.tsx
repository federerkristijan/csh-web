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
      <body className="flex flex-col items-center justify-center h-full">
        <Providers>
          <div className="">
            {/* <Navbar /> */}
            <div>
              {/* <AdSection /> */}
            </div>
            {children}
            <Footer />
            <div>
              {/* <AdSection /> */}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
