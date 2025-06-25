import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
    params,
}: Readonly<{
    params: Promise<{ locale: string }>
}>) {
    // Get locale and check if it's valid
    const { locale } = await params

    // Use server-side translations
    const tMetadata = await getTranslations({
        locale,
        namespace: 'metadata.home',
    })

    return {
        title: tMetadata('title'),
        desctiption: tMetadata('description'),
    }
}

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
