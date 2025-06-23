import React from 'react'

import { Breadcrumb, Image } from 'antd'

import { Link } from '@/i18n/navigation'
import { firebaseService } from '@/lib/firebase/services'
import { Service } from '@/validationSchemas/service.schema'

export default async function CADServiceDetailPage({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = params

    const cadServices = await firebaseService.getByQuery(
        'cadServices',
        'slug',
        slug
    )

    const data = cadServices?.[0] as Service

    return (
        <div className="min-h-screen pb-32 max-w-screen">
            <section className="relative w-full overflow-hidden h-[500px]">
                <div className="relative size-full">
                    <Image
                        src={
                            data?.horizontalThumbnail ??
                            (data?.thumbnail as string)
                        }
                        alt="Image"
                        className="object-cover size-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                </div>
                <div className="absolute top-[50%] translate-y-[-50%] left-0 w-screen">
                    <div className="container" style={{ color: 'white' }}>
                        <Breadcrumb
                            items={[
                                {
                                    title: 'Home',
                                },
                                {
                                    title: 'About us',
                                },
                                {
                                    title: (
                                        <Link
                                            href="/about-us/vision"
                                            style={{ color: 'white' }}
                                            className="font-medium"
                                        >
                                            Vision
                                        </Link>
                                    ),
                                },
                            ]}
                            style={{
                                color: '#c4c4c4',
                            }}
                            separator={<p className="text-gray-400">/</p>}
                        />
                        <h2 className="mt-5 text-6xl font-bold font-saira">
                            {data?.name}
                        </h2>
                        <p className="mt-3">{data?.description}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
