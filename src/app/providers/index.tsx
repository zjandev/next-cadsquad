'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { HeroUIProvider, ToastProvider } from '@heroui/react'
import { NextIntlClientProvider } from 'next-intl'

import SwrProvider from './SwrProvider'

type Props = {
    children: React.ReactNode
    locale: string
    messages: Record<string, unknown>
}
export function AppProvider({ children, locale, messages }: Props) {
    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="Asia/Ho_Chi_Minh"
        >
            <SwrProvider>
                <HeroUIProvider>
                    <ToastProvider />
                    <AntdRegistry>{children}</AntdRegistry>
                </HeroUIProvider>
            </SwrProvider>
        </NextIntlClientProvider>
    )
}
