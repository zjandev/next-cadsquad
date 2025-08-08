'use client'

import { useWindowSize } from 'usehooks-ts'

export const BREAKPOINTS = {
    // Mobile first (min-width)
    sm: '(min-width: 640px)', // Small screens and up
    md: '(min-width: 768px)', // Medium screens and up
    lg: '(min-width: 1024px)', // Large screens and up
    xl: '(min-width: 1280px)', // Extra large screens and up
    '2xl': '(min-width: 1536px)', // 2x extra large screens and up

    // Max-width variants (for mobile-first exclusions)
    'max-sm': '(max-width: 639px)', // Below small screens
    'max-md': '(max-width: 767px)', // Below medium screens
    'max-lg': '(max-width: 1023px)', // Below large screens
    'max-xl': '(max-width: 1279px)', // Below extra large screens
    'max-2xl': '(max-width: 1535px)', // Below 2x extra large screens
}

// Alternative object with individual constants
export const SCREENS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    largeDevice: 1440,
}

export const useDevice = () => {
    const size = useWindowSize()

    const isMobile = size.width < SCREENS.mobile
    const isTablet = size.width > SCREENS.mobile && size.width > SCREENS.tablet
    const isDesktop =
        size.width > SCREENS.tablet && size.width > SCREENS.desktop
    const isLargeDevice = size.width > SCREENS.desktop

    return { isMobile, isTablet, isDesktop, isLargeDevice }
}
