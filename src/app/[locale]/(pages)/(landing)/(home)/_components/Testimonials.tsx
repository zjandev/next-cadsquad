'use client'

import React from 'react'

import { useTranslations } from 'next-intl'

import { AnimatedTestimonials } from '@/app/shared/components/ui/animated-testimonials'
import { TESTIMONIALS } from '@/data/testimonials'

export default function Testimonials() {
    const tHome = useTranslations('landing.home')

    return (
        <div className="container space-y-5">
            <h2 className="text-5xl font-bold text-center font-saira">
                {tHome.rich('sections.customerReview.title', {
                    highlight: (chunk) => (
                        <span className="text-primary">{chunk}</span>
                    ),
                })}
            </h2>
            <div>
                <AnimatedTestimonials testimonials={TESTIMONIALS} autoplay />
            </div>
        </div>
    )
}
