import React from 'react'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import AboutUsImage from '@/assets/images/about-us-banner.webp'
import { MotionH1 } from '@/lib/motion'

export default function AboutUsHeading() {
    const tAboutUs = useTranslations('landing.aboutUs')

    return (
        <section className="relative w-full overflow-hidden h-[280px] lg:h-[520px]">
            <div className="relative w-full h-[280px] lg:h-[520px]">
                <Image
                    src={AboutUsImage}
                    alt="Image"
                    fill={true}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                <div className="lg:container">
                    <div className="container text-4xl leading-tight lg:text-6xl font-saira text-white font-semibold absolute top-[50%] -translate-y-[50%]">
                        <MotionH1 className="uppercase">
                            {tAboutUs('heading.title')}
                        </MotionH1>
                        <p className="mt-3 text-4xl text-danger font-medium tracking-wide">
                            {tAboutUs('heading.description')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
