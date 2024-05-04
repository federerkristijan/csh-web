import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ReactNode } from "react";
import Navbar from "@/components/global/navbar/Navbar";
import AdSection from "@/components/global/AdSection";

export const metadata: Metadata = {
  title: "Canna smoke here",
  description: "Geolocation checking website for cannabis smokers in Germany",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>
            <Navbar />
            <AdSection />
            <div className="flex-grow min-h-fit bg-[url('./background.png')] bg-cover">
              {children}
            </div>
            <AdSection />
          </div>
        </Providers>
      </body>
    </html>
  );
}
