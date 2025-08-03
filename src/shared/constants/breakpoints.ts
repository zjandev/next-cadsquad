const BREAKPOINTS = {
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
const SM = BREAKPOINTS.sm
const MD = BREAKPOINTS.md
const LG = BREAKPOINTS.lg
const XL = BREAKPOINTS.xl
const XXL = BREAKPOINTS['2xl']

// Usage example with matchMedia
const isMobile =
    typeof window !== undefined &&
    window.matchMedia(BREAKPOINTS['max-md']).matches
const isTablet =
    typeof window !== undefined &&
    window.matchMedia(BREAKPOINTS.md).matches &&
    window.matchMedia(BREAKPOINTS['max-lg']).matches
const isDesktop =
    typeof window !== undefined && window.matchMedia(BREAKPOINTS.lg).matches

export { BREAKPOINTS, SM, MD, LG, XL, XXL, isMobile, isTablet, isDesktop }
