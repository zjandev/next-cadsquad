'use client'

import React from 'react'

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from '@heroui/react'
import { PressEvent } from '@react-types/shared'
import { Languages } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { APP_LANGUAGES } from '@/app/shared/constants/appConstant'
import { useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export default function ChangeLanguage() {
    const getPathname = usePathname().slice(1)
    const router = useRouter()

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

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="bordered">
                    <Languages size={20} />
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
