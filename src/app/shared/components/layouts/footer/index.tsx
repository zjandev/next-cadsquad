'use client'

import React from 'react'

import { useTranslations } from 'next-intl'

import Logo from '@/app/shared/components/Logo'
import { SOCIALS } from '@/app/shared/constants/appConstant'

import SocialButton from './SocialButton'

export default function Footer() {
    const tLanding = useTranslations('landing')

    return (
        <div className="container bg-linear-150 from-secondary-900 via-secondary-900 to-secondary-800 py-11 px-14 rounded-t-xl min-h-96 text-white">
            <div className="flex items-start justify-between">
                <div className="flex items-end justify-start gap-5">
                    <Logo
                        logoTheme="white"
                        classNames={{
                            logo: 'max-w-[200px]',
                        }}
                    />
                    <div className="h-20 w-[1px] bg-border opacity-30" />
                    <p className="font-saira text-2xl font-semibold">
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
        </div>
    )
}
