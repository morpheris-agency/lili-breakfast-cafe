import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-bg-secondary py-12 px-6 md:px-12 mt-20 rounded-t-[3rem]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                    <h3 className="font-heading font-bold text-2xl text-accent-mango mb-2">Lili Breakfast Cafe</h3>
                    <p className="font-body text-text-dark/80 max-w-sm">
                        Nourishing bowls, vibrant smoothies, and a cozy aesthetic nestled in the magic of Pai.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 font-heading font-medium">
                    <Link href="/menu" className="hover:text-accent-pitaya transition-colors">Breakfast Menu</Link>
                    <Link href="/about" className="hover:text-accent-pitaya transition-colors">The Magic of Pai</Link>
                    <Link href="/contact" className="hover:text-accent-pitaya transition-colors">Find Us</Link>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-text-dark/10 flex flex-col md:flex-row justify-between items-center font-body text-sm text-text-dark/60">
                <p>&copy; {new Date().getFullYear()} Lili Breakfast Cafe. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Made with ❤️ in Thailand.</p>
            </div>
        </footer>
    );
}
