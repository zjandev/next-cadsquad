import React from 'react'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import BannerImg from '@/assets/images/banner.png'

export default function Banner() {
    const tHome = useTranslations('landing.home')

    return (
        <div className="size-full">
            <div className="size-full relative">
                <Image
                    src={BannerImg}
                    quality={100}
                    alt="banner"
                    className="pt-3"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/10 to-black/100" />
            </div>
            <div className="container relative">
                <div className="absolute bottom-7 text-background">
                    <h1 className="text-6xl font-bold font-saira tracking-wide">
                        {tHome('slogan')}
                    </h1>
                    <p className="mt-4 text-base">
                        {tHome('sloganDescription')}
                    </p>
                </div>
            </div>
        </div>
    )
}
