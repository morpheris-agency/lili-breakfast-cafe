'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 overflow-hidden">

            {/* Header */}
            <div className="text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="inline-block px-5 py-2.5 bg-accent-mango/20 text-accent-mango font-display font-bold uppercase tracking-widest rounded-full text-[11px] mb-6"
                >
                    Our Story
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-8xl font-heading font-normal text-text-dark mb-6"
                >
                    The <span className="text-accent-sky">Magic</span> of Pai
                </motion.h1>
            </div>

            {/* Story section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[4rem] overflow-hidden shadow-xl border-4 border-white"
                >
                    <Image src="/images/pai_coffee_shop.png" alt="Pai Coffee Shop" fill className="object-cover" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-normal leading-tight text-text-dark">
                        From a tiny cart to <br />a conscious space.
                    </h2>
                    <div className="space-y-4 text-text-dark/80 font-body text-lg leading-relaxed">
                        <p>
                            It all started with a simple belief: breakfast is the most important, and should be the most joyful, meal of the day. Lili arrived in Pai seeking quietness, but found a vibrant community of travelers, artists, and locals.
                        </p>
                        <p>
                            We source our lush fruits from local farmers in the Mae Hong Son province, ensuring that every smoothie bowl gives back to the land that provides it.
                        </p>
                        <p className="font-heading font-normal text-accent-mango text-3xl mt-4 italic">
                            "Eat good, feel good, do good."
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom organic banner */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="w-full bg-accent-pitaya/10 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-mango/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
                <h3 className="text-4xl md:text-6xl font-heading font-normal text-text-dark mb-6">
                    Come say hi!
                </h3>
                <p className="text-lg font-body text-text-dark/70 max-w-xl mx-auto mb-8">
                    Whether you're here to work, to chat, or to silently enjoy the mountain breeze and a flat white, there's always a seat for you.
                </p>
            </motion.div>

        </div>
    )
}
