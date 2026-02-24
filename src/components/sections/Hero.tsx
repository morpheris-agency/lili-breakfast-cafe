'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../ui/Button'
import { useRef } from 'react'
import Image from 'next/image'

export default function Hero({
    heading,
    subheading,
    primaryCta
}: {
    heading?: string,
    subheading?: string,
    primaryCta?: string
}) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    // Parallax effects
    const yImage = useTransform(scrollYProgress, [0, 1], [0, 150])
    const yBlobs = useTransform(scrollYProgress, [0, 1], [0, -100])

    // Fallbacks
    const finalHeading = heading || "Nourish your\nbody, feed your\nsoul.";
    const finalSubheading = subheading || "Discover a taste of nature with our vibrant smoothie bowls, cold-pressed juices, and hearty breakfast plates.";
    const finalCta = primaryCta || "View Menu";

    return (
        <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 md:px-12 pt-12 md:pt-0">
            {/* Background Blobs */}
            <motion.div
                style={{ y: yBlobs }}
                className="absolute top-[-10%] right-[-5%] w-[60vw] max-w-[600px] h-[60vw] max-h-[600px] bg-accent-mango/10 rounded-full blur-3xl -z-10"
            />
            <motion.div
                style={{ y: yBlobs }}
                className="absolute bottom-[10%] left-[-10%] w-[50vw] max-w-[500px] h-[50vw] max-h-[500px] bg-accent-sky/20 rounded-full blur-3xl -z-10"
            />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                    className="flex flex-col items-start gap-8 z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-5 py-2.5 bg-accent-sky/30 text-text-dark font-display font-black uppercase tracking-widest rounded-full text-[11px]"
                    >
                        Organic & Fresh in Pai 🌱
                    </motion.div>

                    <h1
                        className="font-script text-5xl md:text-6xl leading-[1.1] text-text-dark tracking-normal whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                            __html: finalHeading.replace('feed', '<span class="text-accent-pitaya">feed</span>')
                        }}
                    />

                    <p className="text-lg md:text-xl text-text-dark/80 max-w-md font-body leading-relaxed whitespace-pre-line">
                        {finalSubheading}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <Button href="/menu" variant="primary">
                            {finalCta}
                        </Button>
                        <Button href="/about" variant="secondary">
                            Our Story
                        </Button>
                    </div>
                </motion.div>

                {/* Floating Images (Placeholders) */}
                <motion.div
                    style={{ y: yImage }}
                    className="relative h-[50vh] min-h-[400px] w-full mt-12 md:mt-0"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 80, damping: 20 }}
                        className="absolute right-0 top-0 w-[80%] aspect-square rounded-[3rem] overflow-hidden shadow-2xl z-20"
                    >
                        <Image
                            src="/images/pai_coffee_shop.png"
                            alt="Beautiful Pai Thailand Landscape"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                        className="absolute left-0 bottom-10 w-[50%] aspect-square rounded-[2rem] overflow-hidden shadow-xl z-30 ring-8 ring-bg-primary"
                    >
                        <Image
                            src="/images/coffee_latte.png"
                            alt="Organic Coffee at Lili Cafe"
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}
