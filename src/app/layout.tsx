import type { Metadata } from "next";
import { Fredoka, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body className={`${fredoka.variable} ${dmSans.variable} font-body bg-bg-primary text-text-dark antialiased selection:bg-accent-pitaya/20 selection:text-accent-pitaya`}>
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
