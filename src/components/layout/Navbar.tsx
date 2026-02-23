import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 bg-bg-primary/95 backdrop-blur-md shadow-sm border-b border-text-dark/5 h-[100px]">

            {/* Mobile View */}
            <div className="md:hidden flex items-center justify-between w-full relative">
                <Link href="/" className="flex items-center group relative w-20 h-20 shrink-0">
                    <Image src="/logo.svg" alt="Lili Cafe Logo" fill className="object-contain object-left transition-transform duration-300" priority />
                </Link>
                <div className="flex gap-4 items-center">
                    <Link
                        href="/menu"
                        className="bg-accent-mango text-white px-5 py-2.5 rounded-full font-display font-black uppercase text-[12px] tracking-widest shadow-sm"
                    >
                        Menu
                    </Link>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex items-center justify-between w-full h-full relative">

                {/* Left empty spacer to balance the "View Menu" button */}
                <div className="flex-1"></div>

                {/* Perfectly Centered Menu Group */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-10">

                    {/* Logo (Leftside) */}
                    <Link href="/" className="relative w-[84px] h-[84px] shrink-0 hover:scale-105 transition-transform duration-300">
                        <Image src="/logo.svg" alt="Lili Cafe Logo" fill className="object-contain" priority />
                    </Link>

                    {/* Navigation Links (Middle) */}
                    <nav className="flex items-center gap-8 font-display font-black uppercase tracking-widest text-[15px] text-text-dark px-4">
                        <Link href="/menu" className="hover:text-accent-mango transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent-mango hover:after:w-full after:transition-all after:duration-300">
                            Menu
                        </Link>
                        <Link href="/about" className="hover:text-accent-mango transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent-mango hover:after:w-full after:transition-all after:duration-300">
                            Our Story
                        </Link>
                        <Link href="/contact" className="hover:text-accent-mango transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent-mango hover:after:w-full after:transition-all after:duration-300">
                            Contact
                        </Link>
                    </nav>

                    {/* Family Snippet (Rightside) */}
                    <div className="relative w-[84px] h-[84px] rounded-full overflow-hidden border-[3px] border-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 shrink-0">
                        <Image src="/family.png" alt="Our Family" fill className="object-cover" />
                    </div>
                </div>

                {/* Right Action Button */}
                <div className="flex-1 flex justify-end">
                    <Link
                        href="/menu"
                        className="bg-accent-mango text-white px-8 py-3.5 rounded-full font-display font-black uppercase text-[14px] tracking-widest hover:bg-[#e0a100] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        View Menu
                    </Link>
                </div>

            </div>
        </header>
    );
}
