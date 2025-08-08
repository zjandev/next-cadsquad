'use client'

import React, { useEffect, useState } from 'react'

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from '@heroui/react'
import { PressEvent } from '@react-types/shared'
import { ChevronDown } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { APP_LANGUAGES } from '@/shared/constants/appConstant'
import { AppLanguage } from '@/shared/constants/appLanguages'

export default function ChangeLanguage() {
    const locale = useLocale()
    const getPathname = usePathname().slice(1)
    const router = useRouter()

    const [currentLanguage, setCurrentLanguage] = useState<AppLanguage | null>(
        null
    )

    const onChangeLanguage = (event: PressEvent) => {
        const locale = (event.target as HTMLElement).dataset.key

        const hasLocale = routing.locales.some((locale) =>
            getPathname.startsWith(locale)
        )
        const pathname = hasLocale
            ? '/' + getPathname.split('/').slice(1).join('/')
            : '/' + getPathname

        router.push(pathname, { locale })
    }

    useEffect(() => {
        const findLanguage = APP_LANGUAGES?.find(
            (lang) => lang.locale === locale
        ) as AppLanguage
        setCurrentLanguage(findLanguage)
    }, [locale])

    return (
        <Dropdown>
            <DropdownTrigger className="p-0">
                <Button
                    variant="bordered"
                    className="rounded-xl"
                    endContent={<ChevronDown size={15} />}
                >
                    {currentLanguage && (
                        <Image
                            src={currentLanguage.flag}
                            alt={currentLanguage.label}
                            width={24}
                            height={24}
                            className="w-6"
                        />
                    )}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                {APP_LANGUAGES.map((lang) => (
                    <DropdownItem key={lang.locale} onPress={onChangeLanguage}>
                        <div className="flex items-center justify-start gap-3">
                            <Image
                                src={lang.flag}
                                alt={lang.label}
                                width={24}
                                height={24}
                                className="w-6"
                            />
                            <p>{lang.label}</p>
                        </div>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}
