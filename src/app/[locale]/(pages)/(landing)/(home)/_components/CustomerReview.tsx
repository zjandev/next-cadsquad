'use client'

import React, { useEffect, useRef } from 'react'

import { Button } from '@heroui/react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { TESTIMONIALS } from '@/data/testimonials'
import { isMobile } from '@/shared/constants/breakpoints'

import CustomerReviewCard from './cards/CustomerReviewCard'

export default function CustomerReview() {
    const tHome = useTranslations('landing.home')

    const [emblaRef, emblaApi] = useEmblaCarousel()
    const prevButtonRef = useRef<HTMLButtonElement | null>(null)
    const nextButtonRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', () => {
                if (prevButtonRef.current)
                    prevButtonRef.current.disabled = !emblaApi.canScrollPrev()
                if (nextButtonRef.current)
                    nextButtonRef.current.disabled = !emblaApi.canScrollNext()
            })
        }
    }, [emblaApi])
    return (
        <div className="container space-y-5 lg:space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl lg:text-5xl font-bold font-saira">
                    {tHome.rich('sections.customerReview.title', {
                        highlight: (chunk) => (
                            <span className="text-primary">{chunk}</span>
                        ),
                    })}
                </h2>
                <div className="flex items-center justify-end gap-3">
                    <Button
                        isIconOnly
                        variant="ghost"
                        size={isMobile ? 'md' : 'lg'}
                        className="rounded-full text-secondary"
                        onPress={() => {
                            emblaApi?.scrollPrev()
                        }}
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        isIconOnly
                        variant="ghost"
                        size={isMobile ? 'md' : 'lg'}
                        className="rounded-full text-secondary"
                        onPress={() => {
                            emblaApi?.scrollNext()
                        }}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>
            <div className="relative max-w-screen pl-auto">
                <div ref={emblaRef}>
                    <div className="flex gap-5">
                        {TESTIMONIALS.map((tes, index) => (
                            <div key={index} className="flex-shrink-0 p-2">
                                <CustomerReviewCard data={tes} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
