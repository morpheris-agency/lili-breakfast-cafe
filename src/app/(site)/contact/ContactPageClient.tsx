'use client'

import { motion } from 'framer-motion'
import MapIllustration from '@/components/ui/MapIllustration'
import { MapPin, Clock, Mail, Instagram } from 'lucide-react'

export default function ContactPageClient({ settings }: { settings: any }) {
    // Fallbacks
    const address = settings?.address || "123 Walking Street Alley\nTambon Wiang Tai, Amphoe Pai\nMae Hong Son 58130, Thailand";

    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-24">

            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-script text-5xl text-text-dark mb-6"
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
                            <h3 className="font-display font-black uppercase tracking-widest text-[16px] text-text-dark mb-2">Address</h3>
                            <p className="font-body text-lg text-text-dark/80 whitespace-pre-line">
                                {address}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-accent-mango/30 flex items-center justify-center">
                            <Clock size={28} className="text-text-dark" />
                        </div>
                        <div>
                            <h3 className="font-display font-black uppercase tracking-widest text-[16px] text-text-dark mb-2">Opening Hours</h3>

                            {settings?.businessHours && settings.businessHours.length > 0 ? (
                                <div className="font-body text-lg text-text-dark/80">
                                    {settings.businessHours.map((hour: any) => (
                                        <div key={hour._key}>
                                            <span className="font-semibold">{hour.day}:</span>{' '}
                                            {hour.isClosed ? (
                                                <span className="text-accent-strawberry font-bold">Closed</span>
                                            ) : (
                                                <span>{hour.openTime} – {hour.closeTime}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="font-body text-lg text-text-dark/80">
                                    Mon - Fri: 8 AM–4 PM<br />
                                    Saturday: <span className="text-accent-strawberry font-bold">Closed</span><br />
                                    Sunday: 8 AM–4 PM
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-accent-pitaya/20 flex items-center justify-center">
                            <Instagram size={28} className="text-text-dark" />
                        </div>
                        <div>
                            <h3 className="font-display font-black uppercase tracking-widest text-[16px] text-text-dark mb-2">Social</h3>
                            <a href={settings?.instagramUrl || "https://www.instagram.com/lili.breakfast.cafe/"} target="_blank" rel="noopener noreferrer" className="font-body text-lg text-text-dark/80 hover:text-accent-pitaya transition-colors underline decoration-2 decoration-accent-pitaya/30 underline-offset-4">
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
                    {settings?.googleMapsLink ? (
                        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm">
                            <iframe
                                src={settings.googleMapsLink}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    ) : (
                        <MapIllustration />
                    )}
                </motion.div>

            </div>
        </div>
    )
}
