'use client'

import { Button } from '@heroui/react'
import { useTranslations } from 'next-intl'

import { CallLoopIcon } from '@/shared/components/icons/CallLoopIcon'

export default function CTAButton() {
    const gradientColors = [
        'var(--color-secondary-400)',
        'var(--color-secondary-500)',
        'var(--color-secondary-600)',
        'var(--color-secondary-700)',
        'var(--color-secondary-800)',
    ]

    const tButton = useTranslations('button')

    return (
        <div className="relative">
            {/* Gradient background with pulsing effect */}
            <div
                className="absolute inset-0 rounded-full animate-pulse blur-sm opacity-60"
                style={{
                    background: `linear-gradient(45deg, ${gradientColors.join(', ')})`,
                    backgroundSize: '300% 300%',
                    animation:
                        'gradient-shift 2s ease-in-out infinite alternate, pulse 1.5s ease-in-out infinite',
                }}
            />

            <Button
                className="relative overflow-hidden font-semibold text-white uppercase transition-all duration-300 border-0 rounded-full px-7 group hover:scale-105"
                style={{
                    background: `linear-gradient(45deg, ${gradientColors.join(', ')})`,
                    backgroundSize: '300% 300%',
                    animation:
                        'gradient-shift 3s ease-in-out infinite alternate',
                }}
                endContent={<CallLoopIcon />}
            >
                {/* Shimmer effect overlay */}
                <div className="absolute inset-0 transition-transform duration-700 ease-in-out -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full" />

                <span className="relative z-10">{tButton('contact')}</span>
            </Button>

            <style jsx>{`
                @keyframes gradient-shift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                @keyframes pulse {
                    0%,
                    100% {
                        opacity: 0.6;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.8;
                        transform: scale(1.05);
                    }
                }
            `}</style>
        </div>
    )
}
