'use client'

import React from 'react'

import { useTranslations } from 'next-intl'

import { AnimatedTestimonials } from '@/app/shared/components/ui/animated-testimonials'
import { TESTIMONIALS } from '@/data/testimonials'

export default function Testimonials() {
    const tHome = useTranslations('landing.home')

    return (
        <div className="size-full space-y-5">
            <h2 className="text-center text-5xl font-saira font-bold">
                {tHome.rich('sections.customerReview.title', {
                    highlight: (chunk) => (
                        <span className="text-primary">{chunk}</span>
                    ),
                })}
            </h2>
            <div>
                <AnimatedTestimonials testimonials={TESTIMONIALS} />
            </div>
        </div>
    )
}
