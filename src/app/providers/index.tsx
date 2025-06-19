'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { HeroUIProvider } from '@heroui/react'
import { NextIntlClientProvider } from 'next-intl'

type Props = {
    children: React.ReactNode
    locale: string
    messages: Record<string, unknown>
}
export function AppProvider({ children, locale, messages }: Props) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <HeroUIProvider>
                <AntdRegistry>{children}</AntdRegistry>
            </HeroUIProvider>
        </NextIntlClientProvider>
    )
}
