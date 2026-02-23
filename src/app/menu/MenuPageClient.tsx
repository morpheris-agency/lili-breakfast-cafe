'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MenuCategory, MenuItem } from './menuData';

export default function MenuPageClient({ categories }: { categories: MenuCategory[] }) {
    const [activeTab, setActiveTab] = useState(categories[0]._id);

    const scrollToCategory = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 150; // offset for sticky header
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 100, damping: 20 }
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-24">
            <div className="text-center mb-16">
                <h1 className="font-script text-5xl text-text-dark mb-6">
                    Our <span className="text-accent-mango">Menu</span>
                </h1>
                <p className="text-lg text-text-dark/70 font-body max-w-2xl mx-auto">
                    Prepared with love, meant to be shared. Everything from hearty toasts to colorful smoothie bowls.
                </p>
            </div>

            {/* Sticky Tabs Navigation */}
            <div className="sticky top-20 z-40 bg-bg-primary/95 backdrop-blur-md py-4 mb-16 -mx-6 px-6 md:mx-0 md:px-0 border-b border-text-dark/5">
                <div className="flex flex-row gap-2 overflow-x-auto md:flex-wrap md:justify-center md:overflow-x-visible pb-4 scrollbar-hide snap-x md:snap-none" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                    {categories.map((cat) => (
                        <button
                            key={`tab-${cat._id}`}
                            onClick={() => scrollToCategory(cat._id)}
                            className={`snap-start whitespace-nowrap px-5 py-2 md:px-6 md:py-3 rounded-full font-display font-black uppercase tracking-widest text-[13px] transition-all duration-300 ${activeTab === cat._id
                                ? 'bg-accent-mango text-white shadow-md'
                                : 'bg-white text-text-dark hover:bg-bg-secondary'
                                }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Menu Sections */}
            <div className="flex flex-col gap-24">
                {categories.map((category) => (
                    <section key={category._id} id={category._id} className="scroll-mt-40">
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-widest text-[#1a1a1a] mb-4 inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-accent-pitaya after:rounded-full">
                                {category.title}
                            </h2>
                            {category.description && (
                                <p className="text-text-dark/70 font-body text-lg max-w-2xl mt-4">
                                    {category.description}
                                </p>
                            )}
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            {category.items.map((item) => (
                                <motion.div
                                    key={item._id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className={`flex flex-col p-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border ${item.isBestSeller ? 'bg-[#FFFDF0] border-accent-mango/30' : 'bg-white border-bg-secondary'
                                        }`}
                                >
                                    {/* Image Placeholder or Actual Image */}
                                    <div className="w-full aspect-video md:aspect-[4/3] mb-6 rounded-2xl overflow-hidden relative bg-accent-sky/10 flex items-center justify-center shrink-0">
                                        {item.imageUrl ? (
                                            <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                                        ) : (
                                            <span className="text-5xl opacity-50">🍽️</span>
                                        )}
                                        {item.isBestSeller && (
                                            <div className="absolute top-3 left-3 bg-accent-mango text-white px-3 py-1 rounded-full font-display font-black uppercase tracking-widest text-[10px] shadow-md">
                                                ⭐ Best Seller
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-3 gap-4">
                                            <h3 className="font-script font-normal text-3xl text-text-dark">{item.title}</h3>
                                            <span className="font-display font-black text-xl text-accent-strawberry whitespace-nowrap bg-accent-strawberry/10 px-3 py-1 rounded-xl">
                                                {item.price} THB
                                            </span>
                                        </div>
                                        <p className="text-text-dark/70 font-body text-sm leading-relaxed mt-auto">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                ))}
            </div>
        </div>
    );
}
