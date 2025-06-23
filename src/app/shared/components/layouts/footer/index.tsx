'use client'

import React from 'react'

import { Variants } from 'motion'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

import Logo from '@/app/shared/components/Logo'
import {
    CONTACT_INFORMATIONS,
    FOOTER_LINKS,
    SOCIALS,
} from '@/app/shared/constants/appConstant'
import { SupportLanguages } from '@/i18n/routing'
import { MotionDiv, MotionP } from '@/lib/motion'

import Decorate from './Decorate'
import SocialButton from './SocialButton'

export default function Footer() {
    const locale = useLocale()

    const tLanding = useTranslations('landing')

    const groupTitleLineVariants: Variants = {
        init: {
            width: 0,
        },
        animate: {
            width: '40%',
        },
        hover: {
            width: '100%',
        },
    }

    return (
        <div className="container relative h-full overflow-hidden text-white bg-linear-150 from-secondary-900 via-secondary-900 to-secondary-800 py-11 px-14 rounded-t-xl min-h-96">
            <div className="absolute bottom-0 right-0 z-0 object-cover opacity-40">
                <Decorate />
            </div>
            <div className="relative z-10">
                <div className="flex items-start justify-between">
                    <div className="flex items-end justify-start gap-5">
                        <Logo
                            logoTheme="white"
                            classNames={{
                                logo: 'max-w-[200px]',
                            }}
                        />
                        <div className="h-20 w-[1px] bg-border opacity-30" />
                        <p className="text-2xl font-semibold font-saira">
                            {tLanding('home.slogan')}
                        </p>
                    </div>
                    <div className="flex items-center justify-end gap-5">
                        <p>{tLanding('layout.followUsOn')}:</p>
                        <ul className="flex items-center justify-start gap-4">
                            {SOCIALS.map((soc, idx) => (
                                <li key={idx}>
                                    <SocialButton data={soc} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-10 lg:mt-14 md:mt-6">
                    <ul className="col-span-1">
                        {CONTACT_INFORMATIONS.map((contact, index) => (
                            <li
                                key={index}
                                className="gap-4 my-6 overflow-hidden w-fit md:flex md:items-center md:my-4 lg:my-7 underline-offset-4"
                            >
                                <contact.icon />
                                <MotionP
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    whileHover={{
                                        opacity: 1,
                                        textDecoration: 'underline',
                                    }}
                                >
                                    <Link
                                        href={contact.path}
                                        target="_blank"
                                        className="overflow-hidden text-base"
                                        title={contact.name}
                                    >
                                        {contact.name}
                                    </Link>
                                </MotionP>
                            </li>
                        ))}
                    </ul>
                    <div className="col-span-2">
                        <div className="grid grid-cols-2">
                            {FOOTER_LINKS.map((item, index) => {
                                const groupName =
                                    item[
                                        `${locale as SupportLanguages}GroupName`
                                    ]

                                return (
                                    <MotionDiv
                                        key={index}
                                        initial="init"
                                        animate="animate"
                                        whileHover="hover"
                                        className="pb-2 h-fit"
                                    >
                                        <div className="relative pb-1 w-fit">
                                            <p className="text-lg font-semibold cursor-default">
                                                {groupName}
                                            </p>
                                            <MotionDiv
                                                variants={
                                                    groupTitleLineVariants
                                                }
                                                className="absolute bottom-0 h-[2px] w-[40%] bg-white"
                                            />
                                        </div>
                                        <ul className="mt-5 space-y-3">
                                            {item.children.map(
                                                (child, index) => {
                                                    const label =
                                                        child[
                                                            `${locale as SupportLanguages}Label`
                                                        ]

                                                    return (
                                                        <Link
                                                            key={index}
                                                            title={label}
                                                            href={child.href}
                                                            className="block hover:underline underline-offset-2"
                                                        >
                                                            {label}
                                                        </Link>
                                                    )
                                                }
                                            )}
                                        </ul>
                                    </MotionDiv>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
