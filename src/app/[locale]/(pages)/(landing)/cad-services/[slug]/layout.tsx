import { firebaseService } from '@/lib/firebase/services'
import { Service } from '@/validationSchemas/service.schema'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>
}) {
    const { slug } = await params

    const cadServices = await firebaseService.getByQuery(
        'cadServices',
        'slug',
        slug
    )

    const data = cadServices?.[0] as Service

    return {
        title: data?.name,
    }
}

export default function CADServiceDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
