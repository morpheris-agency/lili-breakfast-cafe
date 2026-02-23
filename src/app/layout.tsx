import type { Metadata } from "next";
import { Lobster, Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Lili Breakfast Cafe | Pai, Thailand",
  description: "Healthy and generous coffee shop in Pai. Smoothie bowls, cold-pressed juices, and big breakfast sets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lobster.variable} ${montserrat.variable} ${nunito.variable} font-body bg-bg-primary text-text-dark antialiased selection:bg-accent-pitaya/20 selection:text-accent-pitaya`}>
        <SmoothScrollProvider>
          <Navbar />
          <main className="pt-24 min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
