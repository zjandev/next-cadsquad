import type { MetadataRoute } from 'next'

import { getTranslations } from 'next-intl/server'

export default async function manifest({
    params,
}: Readonly<{
    params: Promise<{ locale: string }>
}>): Promise<MetadataRoute.Manifest> {
    const { locale } = await params

    const tMetadata = await getTranslations({
        locale,
        namespace: 'metadata.home',
    })

    return {
        name: 'Cadsquad',
        short_name: 'Cadsquad',
        description: tMetadata('description'),
        lang: locale,
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#0f172a',
        icons: [
            {
                src: '/public/favicon.ico',
                sizes: '192x192',
                type: 'ico',
            },
        ],
    }
}
