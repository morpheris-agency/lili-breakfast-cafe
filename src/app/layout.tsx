import type { Metadata } from "next";
import { Lobster, Montserrat, Nunito } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: "Lili Breakfast Cafe | Pai, Thailand",
  description: "Healthy and generous coffee shop in Pai. Smoothie bowls, cold-pressed juices, and big breakfast sets.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lobster.variable} ${montserrat.variable} ${nunito.variable}`}>
      <body className="font-nunito bg-[#FDFAF5] text-slate-800">
        <SmoothScrollProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
