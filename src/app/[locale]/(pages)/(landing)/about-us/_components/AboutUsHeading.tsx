import React from 'react'

import Image from 'next/image'

import AboutUsImage from '@/assets/images/about-us-banner.webp'
import { MotionH1 } from '@/lib/motion'

export default function AboutUsHeading() {
    return (
        <section className="relative w-full overflow-hidden h-[350px] lg:h-[500px]">
            <div className="relative w-full h-[520px]">
                <Image
                    src={AboutUsImage}
                    alt="Image"
                    fill={true}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                <div className="container">
                    <div className="text-6xl font-saira text-white font-semibold absolute top-[50%] -translate-y-[50%]">
                        <MotionH1 className="uppercase">
                            Giới thiệu về CADSQUAD
                        </MotionH1>
                    </div>
                </div>
            </div>
        </section>
    )
}
