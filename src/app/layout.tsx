import { geistMono, geistSans, saira } from '@/fonts'

import './globals.css'
import { AppProvider } from './providers'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${saira.variable} antialiased`}
            >
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    )
}
