'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    href?: string
    onClick?: () => void
    variant?: 'primary' | 'secondary'
    className?: string
}

export default function Button({ children, href, onClick, variant = 'primary', className = '' }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-heading font-bold text-lg transition-colors shadow-sm"
    const variants = {
        primary: "bg-accent-mango text-white hover:bg-[#F2AE00]",
        secondary: "bg-transparent text-text-dark border-2 border-text-dark/10 hover:border-text-dark/20",
    }

    const MotionComponent = motion.button
    const MotionLink = motion.create(Link)

    const animationProps = {
        whileHover: { scale: 0.97 },
        whileTap: { scale: 0.92 },
        transition: { type: "spring", stiffness: 400, damping: 17 }
    }

    if (href) {
        return (
            <MotionLink
                href={href}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                {...animationProps}
            >
                {children}
            </MotionLink>
        )
    }

    return (
        <MotionComponent
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...animationProps}
        >
            {children}
        </MotionComponent>
    )
}
