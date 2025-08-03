'use client'

import React from 'react'

import { Breadcrumb } from 'antd'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import ImgCadService from '@/assets/images/cad-services.png'
import { Link } from '@/i18n/navigation'
import { OUR_SERVICES } from '@/shared/database/ourServices'

import ServiceCard from './_components/cards/ServiceCard'

export default function CADServices() {
    const tHome = useTranslations('landing.home')
    const tCadServices = useTranslations('landing.cadServices')

    return (
        <div className="min-h-screen pb-16 max-w-screen">
            <section className="relative w-full overflow-hidden h-[600px] lg:h-[500px]">
                <div className="relative size-full">
                    <Image
                        src={ImgCadService}
                        alt="Image"
                        className="object-cover size-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
                </div>
                <div className="py-8 absolute top-[50%] translate-y-[-50%] left-0 w-screen">
                    <div className="container" style={{ color: 'white' }}>
                        <Breadcrumb
                            items={[
                                {
                                    title: tHome('heading.title'),
                                },
                                {
                                    title: (
                                        <Link
                                            href="/cad-services"
                                            style={{ color: 'white' }}
                                            className="font-medium"
                                        >
                                            {tCadServices('heading.title')}
                                        </Link>
                                    ),
                                },
                            ]}
                            style={{
                                color: '#99a1af',
                            }}
                            separator={<p className="text-gray-400">/</p>}
                        />
                        <h2 className="mt-5 text-6xl font-bold font-saira">
                            {tCadServices('heading.title')}
                        </h2>
                        <p className="mt-5 leading-normal max-w-[95%] lg:max-w-[85%] text-justify">
                            {tCadServices('heading.description')}
                        </p>
                    </div>
                </div>
            </section>
            <section className="container space-y-10 mt-14">
                {OUR_SERVICES.map((service) => (
                    <ServiceCard key={service.id} data={service} />
                ))}
            </section>
        </div>
    )
}
