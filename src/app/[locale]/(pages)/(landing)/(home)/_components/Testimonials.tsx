'use client'

import React from 'react'

import { useLocale, useTranslations } from 'next-intl'

import { AnimatedTestimonials } from '@/shared/components/ui/animated-testimonials'
import { TESTIMONIALS, VI_TESTIMONIALS } from '@/shared/database/testimonials'

export default function Testimonials() {
    const locale = useLocale()
    const tHome = useTranslations('landing.home')

    const testimonials = locale === 'vi' ? VI_TESTIMONIALS : TESTIMONIALS

    return (
        <div className="container">
            <h2 className="text-3xl lg:text-5xl font-bold text-center font-saira">
                {tHome.rich('sections.customerReview.title', {
                    highlight: (chunk) => (
                        <span className="text-primary">{chunk}</span>
                    ),
                })}
            </h2>
            <div>
                <AnimatedTestimonials testimonials={testimonials} autoplay />
            </div>
        </div>
    )
}
