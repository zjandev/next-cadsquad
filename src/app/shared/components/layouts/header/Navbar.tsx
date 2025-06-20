'use client'

import React from 'react'

import { Button } from '@heroui/react'
import { ChevronRight } from 'lucide-react'
import { Variants } from 'motion'
import { useLocale } from 'next-intl'
import Image from 'next/image'

import { HEADER_NAVIGATES } from '@/app/shared/constants/appConstant'
import { NavigateItem } from '@/app/shared/constants/headerNavigate'
import { Link } from '@/i18n/navigation'
import { SupportLanguages } from '@/i18n/routing'
import { MotionButton, MotionDiv, MotionLi, MotionP } from '@/lib/motion'

export default function Navbar() {
    return (
        <nav className="z-50 flex items-center justify-start gap-2">
            {HEADER_NAVIGATES.map((item, index) => {
                return <NavbarItem key={index} data={item} />
            })}
        </nav>
    )
}

function NavbarItem({ data }: { data: NavigateItem }) {
    const locale = useLocale()

    const label = data[`${locale as SupportLanguages}Label`]

    const labelVariants: Variants = {
        init: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            color: 'var(--foreground)',
        },
        hover: {
            opacity: 1,
            color: 'var(--color-primary)',
        },
    }

    const bottomLineVariants: Variants = {
        init: {
            opacity: 0,
            width: 0,
            height: '2px',
            backgroundColor: 'var(--color-primary)',
        },
        animate: {
            width: 0,
            height: '2px',
            opacity: 1,
        },
        hover: {
            opacity: 1,
            width: '100%',
            height: '2px',
            backgroundColor: 'var(--color-primary)',
            transition: { delay: 0.1 },
        },
    }

    const dropdownWrapperVariants: Variants = {
        init: {
            opacity: 0,
            display: 'none',
        },
        hover: {
            opacity: 1,
            display: 'grid',
        },
    }

    const itemLabelVariants: Variants = {
        init: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        hover: {
            opacity: 1,
            textDecoration: 'underline',
            textUnderlineOffset: '1px',
        },
    }

    return (
        <MotionDiv initial="init" animate="animate" whileHover="hover">
            <Link
                className="block mx-3 size-fit"
                href={data.href}
                title={label}
            >
                <MotionButton
                    variants={labelVariants}
                    className="py-5 space-y-2 cursor-pointer"
                >
                    <p className="px-4 mt-2 text-base font-bold uppercase">
                        {label}
                    </p>
                    <MotionDiv variants={bottomLineVariants} />
                </MotionButton>
            </Link>
            {data.menus && (
                <MotionDiv
                    variants={dropdownWrapperVariants}
                    className="absolute left-0 top-[100%] z-50 container bg-white rounded-3xl p-9 grid grid-cols-[350px_1fr] gap-5 shadow-lg"
                >
                    <div className="space-y-14">
                        <p className="text-3xl font-semibold font-saira">
                            {label}
                        </p>
                        <Link
                            href={data.href}
                            className="block size-fit"
                            title={`Go to ${label}`}
                        >
                            <Button
                                isIconOnly
                                className="rounded-full size-14 text-primary border-primary"
                                variant="bordered"
                            >
                                <ChevronRight size={30} />
                            </Button>
                        </Link>
                    </div>
                    <ul className="grid grid-cols-3 gap-6">
                        {data.menus.map((menuItem, index) => {
                            const itemLabel =
                                menuItem[`${locale as SupportLanguages}Label`]

                            return (
                                <MotionLi
                                    key={index + menuItem.enLabel}
                                    initial="init"
                                    animate="animate"
                                    whileHover="hover"
                                    className="group"
                                >
                                    <Link
                                        href={menuItem.href}
                                        className="block space-y-2 size-fit"
                                    >
                                        <div className="w-full overflow-hidden rounded-sm aspect-video">
                                            <Image
                                                src={menuItem.image}
                                                alt={`${itemLabel} image`}
                                                className="object-cover transition duration-300 rounded-sm size-full group-hover:scale-110"
                                            />
                                        </div>
                                        <MotionP
                                            variants={itemLabelVariants}
                                            className="font-medium text-center align-middle"
                                        >
                                            {itemLabel}
                                        </MotionP>
                                    </Link>
                                </MotionLi>
                            )
                        })}
                    </ul>
                </MotionDiv>
            )}
        </MotionDiv>
    )
}
