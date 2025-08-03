'use client'

import React from 'react'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import BannerImg from '@/assets/images/banner.png'
import MobileBannerImg from '@/assets/images/mobile-banner.png'

export default function Banner() {
    const tHome = useTranslations('landing.home')

    return (
        <div className="w-full h-[580px] lg:h-[750px] overflow-hidden">
            <div className="size-full relative">
                <Image
                    src={BannerImg}
                    quality={100}
                    alt="banner"
                    className="size-full hidden lg:block pt-3"
                />
                <Image
                    src={MobileBannerImg}
                    quality={100}
                    alt="banner"
                    className="size-full block lg:hidden pt-3"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/10 to-black/100" />
            </div>
            <div className="container relative">
                <div className="absolute bottom-10 text-background">
                    <h1 className="text-3xl lg:text-7xl font-bold lg:font-semibold font-saira tracking-wide">
                        {tHome('slogan')}
                    </h1>
                    <p className="mt-2 ml-1 text-base lg:text-lg opacity-80">
                        {tHome('sloganDescription')}
                    </p>
                </div>
            </div>
        </div>
    )
}
