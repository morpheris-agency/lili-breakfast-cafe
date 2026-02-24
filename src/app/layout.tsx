import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
    title: "Lili Cafe Studio",
    description: "Sanity CMS Studio for Lili Cafe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
