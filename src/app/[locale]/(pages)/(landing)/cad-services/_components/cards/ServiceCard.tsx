import React from 'react'

import { Button, Skeleton } from '@heroui/react'
import { Image } from 'antd'
import { ChevronRight } from 'lucide-react'
import { Variants } from 'motion'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import { MotionDiv } from '@/lib/motion'
import { Service } from '@/validationSchemas/service.schema'

type Props = {
    data: Service
}

export default function ServiceCard({ data }: Props) {
    const tButton = useTranslations('button')

    const wrapperVariants: Variants = {
        init: {
            opacity: 0,
            borderColor: 'transparent',
        },
        animate: {
            opacity: 1,
            borderColor: 'transparent',
        },
        hover: {
            opacity: 1,
            borderColor: 'var(--border)',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        },
    }

    const destination = `/cad-services/${data.slug}`

    return (
        <MotionDiv
            variants={wrapperVariants}
            initial="init"
            whileInView="animate"
            whileHover="hover"
            className="grid grid-cols-[600px_1fr] gap-10 border-1 p-4 rounded-lg"
        >
            <div className="h-full overflow-hidden rounded-lg aspect-video">
                <Image
                    src={data.thumbnail}
                    alt={data.name}
                    className="object-cover h-full aspect-video"
                />
            </div>
            <div className="w-full">
                <Link
                    href={destination}
                    className="text-2xl font-semibold font-saira line-clamp-1 hover:underline underline-offset-4"
                >
                    {data.name}
                </Link>
                <p className="mt-5 text-lg text-gray-700">
                    {data.shortDescription}
                </p>
                <Link href={destination} className="block">
                    <Button
                        className="mt-8 capitalize rounded-full"
                        variant="bordered"
                        color="primary"
                        title={tButton('getStartedNow')}
                    >
                        {tButton('getStartedNow')}
                        <ChevronRight />
                    </Button>
                </Link>
            </div>
        </MotionDiv>
    )
}

export function ServiceCardSkeleton() {
    return (
        <div className="grid grid-cols-[600px_1fr] gap-10 p-4 rounded-lg">
            <Skeleton className="h-full overflow-hidden rounded-lg aspect-video"></Skeleton>
            <div className="w-full">
                <Skeleton className="w-full h-10 rounded-lg" />
                <Skeleton className="w-full h-4 mt-5 rounded-lg" />
                <Skeleton className="w-full h-4 mt-2 rounded-lg" />
                <Skeleton className="w-full h-4 mt-2 rounded-lg" />
                <Skeleton className="mt-8 w-[190px] h-[43px] rounded-full" />
            </div>
        </div>
    )
}
