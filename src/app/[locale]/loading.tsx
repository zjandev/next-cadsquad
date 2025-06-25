import React from 'react'

import Image from 'next/image'

import { MotionDiv } from '@/lib/motion'

import CSDLogo from '../../../public/logo-white.webp'
import '../css/loading.css'

export default function AppLoader() {
    return (
        <MotionDiv
            className="w-screen h-screen max-w-screen max-h-screen overflow-hidden grid place-items-center bg-[#0f0f0f]"
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100vw', opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="loader"></div>
            <div className="absolute rounded-full">
                <Image
                    src={CSDLogo}
                    alt="CSD Logo"
                    className="rounded-full max-w-[200px]"
                    quality={100}
                />
            </div>
        </MotionDiv>
    )
}
