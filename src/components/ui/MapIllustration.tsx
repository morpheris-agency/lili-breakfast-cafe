import { motion } from 'framer-motion'

export default function MapIllustration() {
    return (
        <div className="w-full aspect-video rounded-[3rem] bg-bg-secondary overflow-hidden relative shadow-inner p-4 md:p-8 flex flex-col justify-end">
            {/* Absolute blobs for landscape effect */}
            <div className="absolute top-1/4 -left-12 w-64 h-64 bg-accent-sky/40 rounded-full mix-blend-multiply blur-2xl"></div>
            <div className="absolute -bottom-8 right-12 w-96 h-96 bg-accent-mango/30 rounded-full mix-blend-multiply blur-3xl"></div>
            <div className="absolute top-12 right-1/4 w-32 h-32 bg-accent-pitaya/20 rounded-full mix-blend-multiply blur-xl"></div>

            {/* Decorative UI elements mimicking a map */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                {/* Animated Ping */}
                <span className="relative flex h-8 w-8 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-pitaya opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-accent-strawberry shadow-lg border-2 border-white"></span>
                </span>
                <div className="absolute -top-12 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-xl font-heading font-bold text-text-dark whitespace-nowrap">
                    We are here! ✨
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full self-end bg-white/50 backdrop-blur-lg p-4 rounded-3xl items-center border border-white/40">
                <div className="hidden md:block col-span-2">
                    <p className="font-heading font-medium text-text-dark/80 px-2 line-clamp-2 leading-tight">
                        123 Walking Street, Pai, <br />Mae Hong Son, Thailand 58130
                    </p>
                </div>
                <div className="col-span-2 flex justify-end">
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Lili+Breakfast+Cafe+Pai+Thailand"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-accent-mango text-white font-heading font-bold px-6 py-3 rounded-full hover:bg-[#F2AE00] transition-colors w-full sm:w-auto shadow-md hover:shadow-lg active:scale-95"
                    >
                        Open in Google Maps
                    </a>
                </div>
            </div>
        </div>
    )
}
