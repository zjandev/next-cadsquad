import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const saira = localFont({
    variable: '--font-saira',
    src: './Saira.ttf',
    adjustFontFallback: 'Arial',
    preload: true,
})

export const inter = localFont({
    variable: '--font-inter',
    src: './Inter.ttf',
    adjustFontFallback: 'Arial',
    preload: true,
})
