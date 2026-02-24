import Link from 'next/link';
import { sanityFetch } from "@/sanity/lib/live";
import { getGlobalSettingsQuery } from "@/sanity/lib/queries";

export default async function Footer() {
    const { data: settings } = await sanityFetch({ query: getGlobalSettingsQuery });

    // Fallbacks
    const siteName = settings?.siteName || "Lili Breakfast Cafe";
    const address = settings?.address || "123 Magic Mountain Road, Pai, Thailand";
    const email = settings?.email || "hello@lilibreakfast.com";

    return (
        <footer className="bg-bg-secondary py-12 px-6 md:px-12 mt-20 rounded-t-[3rem]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 text-center md:text-left">
                <div className="flex-1">
                    <h3 className="font-display font-black uppercase tracking-widest text-xl text-accent-mango mb-2">{siteName}</h3>
                    <p className="font-body text-text-dark/80 max-w-sm mb-4">
                        {settings?.seoDescription || "Nourishing bowls, vibrant smoothies, and a cozy aesthetic nestled in the magic of Pai."}
                    </p>

                    {/* Dynamic Contact Info */}
                    <div className="text-sm font-body text-text-dark/70 space-y-1">
                        <p>{address}</p>
                        <p><a href={`mailto:${email}`} className="hover:text-accent-pitaya transition-colors">{email}</a></p>
                        {settings?.phone && (
                            <p><a href={`tel:${settings.phone.replace(/[^0-9]/g, '')}`} className="hover:text-accent-pitaya transition-colors">{settings.phone}</a></p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16 font-display font-black uppercase tracking-widest text-[13px]">
                    <div className="flex flex-col gap-3">
                        <span className="text-text-dark/40 mb-1">Navigation</span>
                        <Link href="/menu" className="hover:text-accent-pitaya transition-colors">Breakfast Menu</Link>
                        <Link href="/about" className="hover:text-accent-pitaya transition-colors">The Magic of Pai</Link>
                        <Link href="/contact" className="hover:text-accent-pitaya transition-colors">Find Us</Link>
                    </div>

                    {/* Dynamic Socials */}
                    {(settings?.instagramUrl || settings?.facebookUrl || settings?.tiktokUrl) && (
                        <div className="flex flex-col gap-3">
                            <span className="text-text-dark/40 mb-1">Socials</span>
                            {settings.instagramUrl && <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-pitaya transition-colors">Instagram</a>}
                            {settings.facebookUrl && <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-pitaya transition-colors">Facebook</a>}
                            {settings.tiktokUrl && <a href={settings.tiktokUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-pitaya transition-colors">TikTok</a>}
                        </div>
                    )}
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-text-dark/10 flex flex-col md:flex-row justify-between items-center font-body text-sm text-text-dark/60">
                <p>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Made with ❤️ in Thailand.</p>
            </div>
        </footer>
    );
}
