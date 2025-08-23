'use client'

import React, { useEffect, useState } from 'react'

import { X } from 'lucide-react'
import { Variants } from 'motion'
import { AnimatePresence } from 'motion/react'
import Image from 'next/image'

import { MotionDiv } from '@/lib/motion'
import FabZalo from '@/shared/components/icons/fab/FabZalo.webp'

import { FabCall } from '../../icons/fab/FabCall'
import { FabMail } from '../../icons/fab/FabMail'
import { FabMessenger } from '../../icons/fab/FabMessenger'

type Props = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}
export default function ContactButton({ isOpen, onOpen, onClose }: Props) {
    const wrapperSlide: Variants = {
        init: {
            opacity: 0,
            x: 20,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 1,
            x: 40,
        },
    }
    const slides: {
        id: number
        title: string
        body: React.ReactNode
    }[] = [
        {
            id: 1,
            title: 'Contact us',
            body: (
                <MotionDiv
                    variants={wrapperSlide}
                    initial="init"
                    whileInView="animate"
                    exit="exit"
                    className="flex items-center justify-center flex-col"
                >
                    <FabMail width={24} height={24} className="text-white" />
                    <p className="text-white mt-0.5 text-[10px] font-semibold">
                        Contact us
                    </p>
                </MotionDiv>
            ),
        },
        {
            id: 2,
            title: 'Whatsapp',
            body: (
                <MotionDiv
                    variants={wrapperSlide}
                    initial="init"
                    whileInView="animate"
                    exit="exit"
                    className="p-3 bg-white rounded-full text-[#ef4444]"
                >
                    <FabCall width={34} height={34} />
                </MotionDiv>
            ),
        },
        {
            id: 3,
            title: 'Messenger',
            body: (
                <MotionDiv
                    variants={wrapperSlide}
                    initial="init"
                    whileInView="animate"
                    exit="exit"
                    className="p-3 bg-white rounded-full text-[#ef4444]"
                >
                    <FabMessenger width={34} height={34} />
                </MotionDiv>
            ),
        },
        {
            id: 4,
            title: 'Zalo',
            body: (
                <MotionDiv
                    variants={wrapperSlide}
                    initial="init"
                    whileInView="animate"
                    exit="exit"
                    className="p-3 bg-white rounded-full text-[#ef4444]"
                >
                    <Image
                        src={FabZalo}
                        width={32}
                        height={32}
                        className="size-[32px] hue-rotate-170"
                        alt="Zalo"
                    />
                </MotionDiv>
            ),
        },
    ]
    const [currentSlide, setCurrentSlide] = useState<(typeof slides)[0]>(
        slides[0]
    )

    const toggleHanlder = () => {
        if (isOpen) {
            onClose()
        } else {
            onOpen()
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => {
                const currentIndex = slides.findIndex(
                    (slide) => slide.id === prevSlide.id
                )
                const nextIndex = (currentIndex + 1) % slides.length
                return slides[nextIndex]
            })
        }, 500) // Changed to 10 seconds as per comment

        return () => clearInterval(interval)
    }, [currentSlide]) // Changed dependency to slides array

    if (isOpen) {
        return (
            <button onClick={toggleHanlder} className="size-20 cursor-pointer">
                <div className="size-full rounded-full bg-[#ef4444] flex items-center justify-center">
                    <div className="flex items-center justify-center flex-col text-white">
                        <X size={40} />
                    </div>
                </div>
            </button>
        )
    }
    return (
        <button onClick={toggleHanlder} className="size-20 cursor-pointer">
            <div className="size-full rounded-full bg-[#ef4444] flex items-center justify-center">
                <AnimatePresence>{currentSlide.body}</AnimatePresence>
            </div>
        </button>
    )
}
