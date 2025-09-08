import type { NextConfig } from 'next'

import createNextIntlPlugin from 'next-intl/plugin'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withImages = require('next-images')

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
        formats: ['image/webp'],
        disableStaticImages: false,
    },
}
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

export default withNextIntl(withImages(nextConfig))
