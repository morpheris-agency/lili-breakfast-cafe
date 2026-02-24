'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type AboutData = {
    headerTag?: string;
    headerTitle?: string;
    storyHeading?: string;
    storyParagraphs?: string[];
    quote?: string;
    storyImageUrl?: string;
    footerHeading?: string;
    footerText?: string;
}

export default function AboutPageClient({ data }: { data?: AboutData }) {
    // Fallbacks
    const headerTag = data?.headerTag || "Our Story";
    const headerTitleRaw = data?.headerTitle || "The ||Magic|| of Pai";
    const storyHeading = data?.storyHeading || "From a tiny cart to \na conscious space.";
    const storyParagraphs = data?.storyParagraphs || [
        "It all started with a simple belief: breakfast is the most important, and should be the most joyful, meal of the day. Lili arrived in Pai seeking quietness, but found a vibrant community of travelers, artists, and locals.",
        "We source our lush fruits from local farmers in the Mae Hong Son province, ensuring that every smoothie bowl gives back to the land that provides it."
    ];
    const quote = data?.quote || "Eat good, feel good, do good.";
    const footerHeading = data?.footerHeading || "Come say hi!";
    const footerText = data?.footerText || "Whether you're here to work, to chat, or to silently enjoy the mountain breeze and a flat white, there's always a seat for you.";
    const imageUrl = data?.storyImageUrl || "/images/pai_coffee_shop.png";

    // Logic to highlight words marked with ||Magic||
    const renderTitle = (text: string) => {
        const parts = text.split(/\|\|(.*?)\|\|/);
        return parts.map((part, index) => {
            if (index % 2 === 1) {
                return <span key={index} className="text-accent-sky">{part}</span>;
            }
            return part;
        });
    };

    return (
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 overflow-hidden">

            {/* Header */}
            <div className="text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="inline-block px-5 py-2.5 bg-accent-mango/20 text-accent-mango font-display font-black uppercase tracking-widest rounded-full text-[11px] mb-6"
                >
                    {headerTag}
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-script text-5xl text-text-dark mb-6 whitespace-pre-line"
                >
                    {renderTitle(headerTitleRaw)}
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
                    <Image src={imageUrl} alt="Story Image" fill className="object-cover" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <h2 className="font-script text-5xl leading-tight text-text-dark whitespace-pre-line">
                        {storyHeading}
                    </h2>
                    <div className="space-y-4 text-text-dark/80 font-body text-lg leading-relaxed">
                        {storyParagraphs.map((p, idx) => (
                            <p key={idx}>{p}</p>
                        ))}
                        {quote && (
                            <p className="font-script font-normal text-accent-mango text-3xl mt-4 italic">
                                "{quote}"
                            </p>
                        )}
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
                <h3 className="font-script text-5xl text-text-dark mb-6">
                    {footerHeading}
                </h3>
                <p className="text-lg font-body text-text-dark/70 max-w-xl mx-auto mb-8 whitespace-pre-line">
                    {footerText}
                </p>
            </motion.div>

        </div>
    )
}
