'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MenuCategory, MenuItem } from './menuData';

export default function MenuPageClient({ categories }: { categories: MenuCategory[] }) {
    // Filter out categories that are explicitly set to hidden
    const visibleCategories = categories.filter(c => c.isVisible !== false);

    const [activeTab, setActiveTab] = useState(visibleCategories.length > 0 ? visibleCategories[0]._id : '');

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
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
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
            {visibleCategories.length > 0 && (
                <div className="sticky top-20 z-40 bg-bg-primary/95 backdrop-blur-md py-4 mb-16 -mx-6 px-6 md:mx-0 md:px-0 border-b border-text-dark/5">
                    <div className="flex flex-row gap-2 overflow-x-auto md:flex-wrap md:justify-center md:overflow-x-visible pb-4 scrollbar-hide snap-x md:snap-none" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                        {visibleCategories.map((cat) => (
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
            )}

            {/* Menu Sections */}
            <div className="flex flex-col gap-24">
                {visibleCategories.map((category) => (
                    <section key={category._id} id={category._id} className="scroll-mt-40">
                        {category.heroImageUrl && (
                            <div className="w-full h-48 md:h-64 rounded-[2rem] overflow-hidden mb-8 relative shadow-sm">
                                <Image src={category.heroImageUrl} alt={category.title} fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                        )}
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-widest text-[#1a1a1a] mb-4 inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-accent-pitaya after:rounded-full">
                                {category.title}
                            </h2>
                            {category.description && (
                                <p className="text-text-dark/70 font-body text-lg max-w-2xl mt-4">
                                    {category.description}
                                </p>
                            )}
                            {category.availability && (
                                <p className="text-accent-strawberry font-body font-semibold text-md mt-2">
                                    🕒 {category.availability}
                                </p>
                            )}
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className={
                                category.layoutStyle === 'list'
                                    ? "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
                                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                            }
                        >
                            {category.items?.map((item) => (
                                <motion.div
                                    key={item._id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className={`flex p-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border ${item.isBestSeller || item.isChefsRecommendation ? 'bg-[#FFFDF0] border-accent-mango/30' : 'bg-white border-bg-secondary'
                                        } ${category.layoutStyle === 'list' ? 'flex-row gap-6 items-center' : 'flex-col'}`}
                                >
                                    {/* Image Placeholder or Actual Image */}
                                    <div className={`shrink-0 rounded-2xl overflow-hidden relative bg-accent-sky/10 flex items-center justify-center ${category.layoutStyle === 'list' ? 'w-24 h-24' : 'w-full aspect-video md:aspect-[4/3] mb-6'}`}>
                                        {item.imageUrl ? (
                                            <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                                        ) : (
                                            <span className="text-5xl opacity-50">🍽️</span>
                                        )}

                                        {/* Badges on Image */}
                                        <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                                            {item.isBestSeller && (
                                                <div className="bg-accent-mango text-white px-2 py-1 rounded-full font-display font-black uppercase tracking-widest text-[8px] md:text-[10px] shadow-md transition-transform hover:scale-105">
                                                    ⭐ Best Seller
                                                </div>
                                            )}
                                            {item.isChefsRecommendation && (
                                                <div className="bg-accent-pitaya text-white px-2 py-1 rounded-full font-display font-black uppercase tracking-widest text-[8px] md:text-[10px] shadow-md transition-transform hover:scale-105">
                                                    👨‍🍳 Chef's Choice
                                                </div>
                                            )}
                                            {item.promotionalBadge && (
                                                <div className="bg-black text-white px-2 py-1 rounded-full font-display font-black uppercase tracking-widest text-[8px] md:text-[10px] shadow-md transition-transform hover:scale-105">
                                                    {item.promotionalBadge}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-grow w-full">
                                        <div className="flex justify-between items-start mb-2 gap-4">
                                            <div className="flex flex-col">
                                                <h3 className="font-script font-normal text-3xl text-text-dark flex items-center gap-2 flex-wrap">
                                                    {item.title}
                                                    <span className="flex gap-1 text-sm">
                                                        {item.spiceLevel && item.spiceLevel > 0 ? "🌶️".repeat(item.spiceLevel) : ""}
                                                    </span>
                                                </h3>
                                                {/* Allergens / Dietary */}
                                                {item.allergens && item.allergens.length > 0 && (
                                                    <div className="flex gap-1 mt-1 flex-wrap">
                                                        {item.allergens.includes('vegan') && <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Vegan</span>}
                                                        {item.allergens.includes('vegetarian') && <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Veg</span>}
                                                        {item.allergens.includes('gluten-free') && <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">GF</span>}
                                                        {item.allergens.includes('dairy-free') && <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">DF</span>}
                                                        {item.allergens.includes('nuts') && <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Nuts</span>}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Primary Price (Only show if no variants or if we want to show a starting price) */}
                                            {(!item.variants || item.variants.length === 0) && (
                                                <span className="font-display font-black text-lg text-accent-strawberry whitespace-nowrap bg-accent-strawberry/10 px-3 py-1 rounded-xl">
                                                    {item.price} ฿
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-text-dark/70 font-body text-sm leading-relaxed mb-3">
                                            {item.description}
                                        </p>

                                        <div className="mt-auto flex flex-col gap-2">
                                            {/* Variants */}
                                            {item.variants && item.variants.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {item.variants.map((v, i) => (
                                                        <div key={i} className="flex items-center gap-1 bg-bg-secondary px-2 py-1 rounded-lg text-xs font-semibold">
                                                            <span>{v.name}:</span>
                                                            <span className="text-accent-strawberry font-bold">{v.price} ฿</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Add-ons */}
                                            {item.addons && item.addons.length > 0 && (
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {item.addons.map((a, i) => (
                                                        <span key={i} className="text-[11px] text-text-dark/60 bg-text-dark/5 px-2 py-0.5 rounded-md">
                                                            + {a.name} ({a.price}฿)
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Prep time & Nutrition */}
                                            {(item.preparationTime || item.nutritionalInfo) && (
                                                <div className="flex gap-4 text-[11px] text-text-dark/50 mt-1 font-medium">
                                                    {item.preparationTime && <span>⏱️ {item.preparationTime}</span>}
                                                    {item.nutritionalInfo?.calories && <span>🔥 {item.nutritionalInfo.calories} kcal</span>}
                                                    {item.nutritionalInfo?.protein && <span>💪 {item.nutritionalInfo.protein}g protein</span>}
                                                </div>
                                            )}
                                        </div>
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
