'use client'

import React, { RefObject, createRef } from 'react'

import { Button } from '@heroui/react'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { isMobile, isTablet } from '@/shared/constants/breakpoints'
import { OUR_SERVICES } from '@/shared/database/ourServices'

import ServiceCard from './cards/ServiceCard'

const services = OUR_SERVICES

export default function OurServices() {
    const carouselRef: RefObject<CarouselRef | null> = createRef<CarouselRef>()
    const tHome = useTranslations('landing.home')

    return (
        <div className="container space-y-5 lg:space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl lg:text-5xl font-bold font-saira">
                    {tHome.rich('sections.ourServices.title', {
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
                            carouselRef.current?.prev()
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
                            carouselRef.current?.next()
                        }}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>
            <Carousel
                autoplay
                speed={1200}
                ref={carouselRef}
                draggable
                lazyLoad="anticipated"
                slidesToShow={isMobile ? (isTablet ? 2 : 1) : 4}
                centerPadding="30"
                dots={false}
                className="!w-full"
                infinite
            >
                {services?.map((service, idx) => (
                    <ServiceCard key={service?.id ?? idx} data={service} />
                ))}
            </Carousel>
        </div>
    )
}
