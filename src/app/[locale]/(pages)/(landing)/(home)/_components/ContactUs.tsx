'use client'

import { RefObject, useRef } from 'react'

import { useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { RoughNotation } from 'react-rough-notation'

import { CONTACT_INFORMATIONS } from '@/app/shared/constants/appConstant'
import { Link } from '@/i18n/navigation'
import { MotionP } from '@/lib/motion'

import ContactForm from './forms/ContactForm'

export default function ContactUs() {
    const tHome = useTranslations('landing.home')

    const ref = useRef(null)
    const isInView = useInView(ref as unknown as RefObject<Element>)

    return (
        <div
            ref={ref}
            className="pt-20 bg-gradient-to-r from-secondary via-secondary to-white pb-14"
        >
            <div className="grid place-items-center">
                <div className="w-fit">
                    <RoughNotation
                        type="box"
                        show={isInView}
                        color="#ff7a00"
                        animationDelay={4}
                    >
                        <h2 className="px-2 py-1 text-5xl font-bold text-center text-white font-saira">
                            {tHome.rich('sections.contactUs.title', {
                                highlight: (chunk) => (
                                    <span className="text-primary">
                                        {chunk}
                                    </span>
                                ),
                            })}
                        </h2>
                    </RoughNotation>
                </div>
            </div>
            <div className="container grid grid-cols-[600px_1fr] gap-5 mt-10">
                <div className="w-full px-5 py-5 text-white shadow-lg bg-secondary lg:py-12 md:pl-8 lg:pl-10 xl:pl-14">
                    <h4 className="text-xl font-semibold">
                        {tHome('sections.contactUs.contactInformation.title')}
                    </h4>
                    <p className="mt-1 text-sm opacity-80">
                        {tHome(
                            'sections.contactUs.contactInformation.description'
                        )}
                    </p>
                    <ul className="mt-10 lg:mt-14 md:mt-6 md:grid md:grid-cols-2 lg:block">
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
                                    whileInView={{
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
                </div>
                <div className="w-full p-8">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
