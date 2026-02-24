import type { Metadata } from "next";
import { Lobster, Montserrat, Nunito, Playfair_Display, Lato, Fredoka, Quicksand } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { sanityFetch } from "@/sanity/lib/live";
import { getGlobalSettingsQuery } from "@/sanity/lib/queries";

// --- ORIGINAL PAIRING ---
const lobster = Lobster({ weight: '400', subsets: ['latin'], variable: '--font-script' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-display' })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-body' })

// --- MINIMALIST PAIRING ---
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-script' })
const latoDisplay = Lato({ weight: ['700', '900'], subsets: ['latin'], variable: '--font-display' })
const latoBody = Lato({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-body' })

// --- SOFT PAIRING ---
const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-script' })
const quicksandDisplay = Quicksand({ weight: ['700'], subsets: ['latin'], variable: '--font-display' })
const quicksandBody = Quicksand({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-body' })


export const metadata: Metadata = {
  title: "Lili Breakfast Cafe | Pai, Thailand",
  description: "Healthy and generous coffee shop in Pai. Smoothie bowls, cold-pressed juices, and big breakfast sets.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  // Fetch global settings to determine the font pairing
  const { data: settings } = await sanityFetch({ query: getGlobalSettingsQuery });
  const fontPairing = settings?.fontPairing || 'original';

  let fontVariables = '';
  let bodyFontClass = '';

  switch (fontPairing) {
    case 'minimalist':
      fontVariables = `${playfair.variable} ${latoDisplay.variable} ${latoBody.variable}`;
      bodyFontClass = 'font-body';
      break;
    case 'soft':
      fontVariables = `${fredoka.variable} ${quicksandDisplay.variable} ${quicksandBody.variable}`;
      bodyFontClass = 'font-body';
      break;
    case 'original':
    default:
      fontVariables = `${lobster.variable} ${montserrat.variable} ${nunito.variable}`;
      bodyFontClass = 'font-body';
      break;
  }

  return (
    <html lang="en" className={fontVariables}>
      <body className={`${bodyFontClass} bg-[#FDFAF5] text-slate-800`}>
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
