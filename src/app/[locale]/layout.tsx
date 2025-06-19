import { Suspense } from 'react'

import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

import AppLoader from '@/app/[locale]/loading'
import '@/app/globals.css'
import { AppProvider } from '@/app/providers'
import { geistMono, geistSans, saira } from '@/fonts'
import { SupportLanguages, routing } from '@/i18n/routing'

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    // Get locale and check if it's valid
    const { locale } = await params

    // Validate locale - sử dụng notFound() thay vì NotFound()
    if (!routing.locales.includes(locale as SupportLanguages)) {
        notFound() // Gọi function này sẽ trigger 404 page
    }

    // Sử dụng getMessages từ next-intl/server
    // Nó sẽ tự động sử dụng config từ request.ts
    const messages = await getMessages()

    return (
        <html lang={locale}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${saira.variable} antialiased`}
            >
                <AppProvider key="root" locale={locale} messages={messages}>
                    <Suspense fallback={<AppLoader />}>{children}</Suspense>
                </AppProvider>
            </body>
        </html>
    )
}
