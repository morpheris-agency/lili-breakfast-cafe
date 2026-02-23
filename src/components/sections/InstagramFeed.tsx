'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const placeholders = [
    { id: 1, delay: 0.1, img: '/images/t1_veggie_omelet.png' },
    { id: 2, delay: 0.2, img: '/images/green_melt.png' },
    { id: 3, delay: 0.3, img: '/images/berry_acai_bliss.png' },
    { id: 4, delay: 0.4, img: '/images/grand_toast.png' },
    { id: 5, delay: 0.5, img: '/images/t2_sunny_avocado.png' },
    { id: 6, delay: 0.6, img: '/images/t1_veggie_omelet.png' }, // Reuse one
]

export default function InstagramFeed() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-heading font-normal mb-4"
                >
                    Join the <span className="text-accent-mango">Vibe</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-text-dark/70 font-body text-lg max-w-xl mx-auto"
                >
                    Follow us on <a href="https://www.instagram.com/lili.breakfast.cafe/" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-accent-pitaya decoration-2 underline-offset-4 hover:text-accent-pitaya transition-colors">@lili.breakfast.cafe</a> for daily inspiration.
                </motion.p>
            </div>

            {/* Asymmetric Grids */}
            <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8 justify-center items-center">
                {/* Left Column */}
                <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/3">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: placeholders[0].delay }}
                        className={`aspect-square w-full rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-3xl rounded-bl-3xl flex items-center justify-center hover:scale-95 transition-transform duration-500 cursor-pointer shadow-sm relative overflow-hidden`}
                    >
                        <Image src={placeholders[0].img} alt="Instagram 1" fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: placeholders[1].delay }}
                        className={`aspect-[4/5] w-full rounded-[3rem] flex items-center justify-center hover:scale-95 transition-transform duration-500 cursor-pointer shadow-sm relative overflow-hidden`}
                    >
                        <Image src={placeholders[1].img} alt="Instagram 2" fill className="object-cover" />
                    </motion.div>
                </div>

                {/* Center Column (Larger) */}
                <div className="flex flex-col gap-4 md:gap-8 w-full md:w-5/12 md:-mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: placeholders[2].delay }}
                        className={`aspect-[4/5] w-full rounded-[4rem] flex items-center justify-center hover:scale-95 transition-transform duration-500 cursor-pointer shadow-lg relative overflow-hidden`}
                    >
                        <Image src={placeholders[2].img} alt="Instagram 3" fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: placeholders[3].delay }}
                        className={`aspect-square w-full rounded-full flex items-center justify-center hover:scale-95 transition-transform duration-500 cursor-pointer shadow-sm relative overflow-hidden`}
                    >
                        <Image src={placeholders[3].img} alt="Instagram 4" fill className="object-cover" />
                    </motion.div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/3">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: placeholders[4].delay }}
                        className={`aspect-[4/5] w-full rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-3xl rounded-br-3xl flex items-center justify-center hover:scale-95 transition-transform duration-500 cursor-pointer shadow-sm relative overflow-hidden`}
                    >
                        <Image src={placeholders[4].img} alt="Instagram 5" fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: placeholders[5].delay }}
                        className={`aspect-square w-full rounded-[2rem] flex items-center justify-center hover:scale-95 transition-transform duration-500 cursor-pointer shadow-sm relative overflow-hidden`}
                    >
                        <Image src={placeholders[5].img} alt="Instagram 6" fill className="object-cover" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
