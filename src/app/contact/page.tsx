'use client'

import { motion } from 'framer-motion'
import MapIllustration from '@/components/ui/MapIllustration'
import { MapPin, Clock, Mail, Instagram } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-24">

            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-heading font-bold text-text-dark mb-6"
                >
                    Find <span className="text-accent-strawberry">Us</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg font-body text-text-dark/70 max-w-xl mx-auto"
                >
                    We are located right in the heart of Pai, walking distance from the night market but tucked away in a quiet, breezy alley.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                {/* Contact infos */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="flex flex-col gap-10"
                >
                    <div className="flex gap-6 items-start">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-accent-sky/30 flex items-center justify-center text-accent-sky">
                            <MapPin size={28} className="text-text-dark" />
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-2xl text-text-dark mb-2">Address</h3>
                            <p className="font-body text-lg text-text-dark/80">
                                123 Walking Street Alley<br />
                                Tambon Wiang Tai, Amphoe Pai<br />
                                Mae Hong Son 58130, Thailand
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-accent-mango/30 flex items-center justify-center">
                            <Clock size={28} className="text-text-dark" />
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-2xl text-text-dark mb-2">Opening Hours</h3>
                            <p className="font-body text-lg text-text-dark/80">
                                Mon - Fri: 8 AM–4 PM<br />
                                Saturday: <span className="text-accent-strawberry font-bold">Closed</span><br />
                                Sunday: 8 AM–4 PM
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-accent-pitaya/20 flex items-center justify-center">
                            <Instagram size={28} className="text-text-dark" />
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-2xl text-text-dark mb-2">Social</h3>
                            <a href="#" className="font-body text-lg text-text-dark/80 hover:text-accent-pitaya transition-colors underline decoration-2 decoration-accent-pitaya/30 underline-offset-4">
                                @lili.breakfast.cafe
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Map Illustration */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
                    className="w-full"
                >
                    <MapIllustration />
                </motion.div>

            </div>
        </div>
    )
}
