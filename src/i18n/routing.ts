import { defineRouting } from 'next-intl/routing'

export type SupportLanguages = 'en' | 'vi'

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'vi'] as const,

    // Used when no locale matches
    defaultLocale: 'vi',

    // Optional: Define path patterns for locale detection
    localePrefix: 'always', // Always show locale in URL

    // Optional: Define alternate domains for locales (if needed)
    // domains: [
    //     {
    //         domain: 'example.com',
    //         defaultLocale: 'en'
    //     },
    //     {
    //         domain: 'example.vn',
    //         defaultLocale: 'vi'
    //     }
    // ]
})

// Export the locales array for use in middleware
export const locales = routing.locales
export const defaultLocale = routing.defaultLocale

// Helper function to check if a locale is supported
export function isValidLocale(locale: string): locale is SupportLanguages {
    return (locales as readonly string[]).includes(locale)
}

// Helper function to get locale from pathname
export function getLocaleFromPathname(
    pathname: string
): SupportLanguages | null {
    const segments = pathname.split('/')
    const potentialLocale = segments[1]

    if (potentialLocale && isValidLocale(potentialLocale)) {
        return potentialLocale
    }

    return null
}

// Helper function to remove locale from pathname
export function removeLocaleFromPathname(pathname: string): string {
    const locale = getLocaleFromPathname(pathname)
    if (locale) {
        return pathname.slice(`/${locale}`.length) || '/'
    }
    return pathname
}
