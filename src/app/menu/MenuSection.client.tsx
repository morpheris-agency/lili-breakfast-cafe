'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type MenuItem = {
    _id: string
    title: string
    price: number
    description: string
    tags: string[]
    imageUrl: string | null
}

type Category = {
    _id: string
    title: string
    description: string
    items: MenuItem[]
}

export default function MenuSection({ category, index }: { category: Category, index: number }) {
    if (!category.items || category.items.length === 0) return null

    // Ensure items is an array before mapping
    const items = Array.isArray(category.items) ? category.items : []

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="mb-24"
        >
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-4xl font-heading font-bold text-text-dark mb-4 inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-accent-mango after:rounded-full">
                    {category.title}
                </h2>
                {category.description && (
                    <p className="text-text-dark/70 font-body text-lg max-w-2xl mt-4">
                        {category.description}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {items.map((item, i) => (
                    <motion.div
                        key={item._id}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex flex-col md:flex-row gap-6 p-6 rounded-[2rem] bg-white shadow-sm hover:shadow-xl border border-bg-secondary transition-all"
                    >
                        {item.imageUrl ? (
                            <div className="w-full md:w-32 h-48 md:h-32 flex-shrink-0 rounded-2xl overflow-hidden relative bg-bg-secondary">
                                <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                            </div>
                        ) : (
                            <div className="w-full md:w-32 h-48 md:h-32 flex-shrink-0 rounded-2xl bg-accent-sky/20 flex items-center justify-center text-4xl">
                                🍲
                            </div>
                        )}

                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-2 gap-4">
                                <h3 className="font-heading font-bold text-xl text-text-dark">{item.title}</h3>
                                <span className="font-heading font-bold text-lg text-accent-mango whitespace-nowrap">฿{item.price}</span>
                            </div>
                            <p className="text-text-dark/60 font-body text-sm mb-4 line-clamp-2">
                                {item.description}
                            </p>

                            {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-accent-pitaya/10 text-accent-pitaya">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}
