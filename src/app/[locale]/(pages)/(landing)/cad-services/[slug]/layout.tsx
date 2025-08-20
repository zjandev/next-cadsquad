import { OUR_SERVICES } from '@/shared/database/ourServices'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>
}) {
    const { slug } = await params

    const data = OUR_SERVICES.find((srv) => srv.slug === slug)

    return {
        title: data?.name + ' | Cadsquad.vn',
        description: data?.textDescription,
        // keywords: data?.description?.split(','),
        openGraph: {
            title: data?.name,
            description: data?.description,
            images: [
                {
                    url: data?.thumbnail,
                    width: 1200,
                    height: 630,
                    alt: data?.name,
                },
            ],
            siteName: 'Cadsquad.vn',
            locale: 'en_US',
            type: 'website',
        },
        alternates: {
            canonical: `https://cadsquad.vn/cad-services/${data?.slug}`,
        },
    }
}

export default function CADServiceDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
