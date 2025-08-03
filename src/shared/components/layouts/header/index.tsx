'use client'

import React, { useEffect, useRef, useState } from 'react'

import { Button } from '@heroui/react'
import { Variants } from 'motion'

import { MotionDiv, MotionHeader } from '@/lib/motion'
import Logo from '@/shared/components/Logo'
import Actions from '@/shared/components/layouts/header/Actions'
import Navbar from '@/shared/components/layouts/header/Navbar'

import { isMobile } from '../../../constants/breakpoints'
import { MenuIcon } from '../../icons/MenuIcon'
import ChangeLanguage from './ChangeLanguage'

const wrapperVariants: Variants = {
    init: { opacity: 0 },
    collapse: {
        opacity: 1,
        boxShadow:
            'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
        transition: {
            duration: 0.05,
        },
        background: 'var(--background)',
    },
    extend: {
        opacity: 1,
        boxShadow: 'none',
        transition: {
            duration: 0.05,
        },
        // background: 'var(--background)',
    },
}

const logoVariants: Variants = {
    init: { opacity: 0 },
    collapse: {
        opacity: 1,
        height: '40px',
        transition: {
            duration: 0.05,
        },
    },
    extend: {
        opacity: 1,
        height: isMobile ? '40px' : '64px',
        transition: {
            duration: 0.05,
        },
    },
}

const BREAK_POINT = 20

export default function Header() {
    const scrollRef = useRef(0) // To store scrollY
    const [scrollY, setScrollY] = useState(0) // State for scrollY

    useEffect(() => {
        const handleScroll = () => {
            scrollRef.current = window.scrollY
            setScrollY(window.scrollY) // Update state with scrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <MotionHeader
            variants={wrapperVariants}
            initial="init"
            animate={scrollY < BREAK_POINT ? 'extend' : 'collapse'}
            className="fixed top-0 z-50 w-screen backdrop-blur-sm"
        >
            <div className="container relative py-3 xl:grid grid-cols-[190px_1fr] gap-5">
                <div className="xl:block grid grid-cols-[80px_1fr_80px] gap-2 place-items-center">
                    <Button
                        variant="light"
                        isIconOnly
                        size="lg"
                        className="xl:hidden"
                    >
                        <MenuIcon size={32} />
                    </Button>
                    <MotionDiv
                        variants={logoVariants}
                        initial="init"
                        animate={scrollY < BREAK_POINT ? 'extend' : 'collapse'}
                    >
                        <Logo
                            classNames={{
                                root: 'h-full',
                                logo: 'max-h-full',
                            }}
                        />
                    </MotionDiv>
                    <div className="xl:hidden">
                        <ChangeLanguage />
                    </div>
                </div>
                <div className="hidden xl:flex items-center justify-end gap-3">
                    <Navbar />
                    <div className="mr-7 w-[2px] h-[30px] bg-border" />
                    <Actions />
                </div>
            </div>
        </MotionHeader>
    )
}
