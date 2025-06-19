import React from 'react'

import { useLocale } from 'next-intl'

import { HEADER_NAVIGATE } from '@/app/shared/constants/appConstant'
import { SupportLanguages } from '@/i18n/routing'

export default function Navbar() {
    const locale = useLocale()

    return (
        <nav>
            <ul className="flex items-center justify-start gap-2">
                {HEADER_NAVIGATE.map((item, index) => {
                    const label = item[`${locale as SupportLanguages}Label`]

                    return (
                        <li key={index} className="py-2 px-4">
                            <button className="cursor-pointer">
                                <p className="uppercase font-bold text-lg">
                                    {label}
                                </p>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
