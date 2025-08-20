'use client'

import React from 'react'

import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import { OUR_SERVICES, VI_OUR_SERVICES } from '@/shared/database/ourServices'
import { Service } from '@/validationSchemas/service.schema'

type Props = { service: Service }

export default function ServiceNavigate({ service }: Props) {
    const locale = useLocale()
    const tButton = useTranslations('button')

    const ourServicess = locale === 'vi' ? VI_OUR_SERVICES : OUR_SERVICES
    const lastService = ourServicess.find(
        (item) => item?.order === ourServicess.length - 1
    )
    const firstService = ourServicess.find((item) => item?.order === 1)

    const prevService =
        Number(service?.order) - 1 === 0
            ? lastService
            : ourServicess.find(
                  (item) => item?.order === Number(service?.order) - 1
              )
    const nextService =
        Number(service?.order) === ourServicess.length
            ? firstService
            : ourServicess.find(
                  (item) => item?.order === Number(service?.order) + 1
              )

    return (
        <>
            <Link href={`/cad-services/${prevService?.slug}`} className="block">
                <button className="hidden lg:block text-left border border-border rounded-lg px-7 py-4 group transition duration-250 hover:border-danger cursor-pointer">
                    <div className="flex items-center justify-start gap-1">
                        <ChevronsLeft
                            size={16}
                            className="group-hover:text-danger transition duration-250"
                        />
                        <p className="text-sm font-semibold opacity-75">
                            {tButton('previous')}
                        </p>
                    </div>
                    <p className="mt-1 text-lg font-semibold line-clamp-2 w-[350px] max-h-[2lh] leading-normal group-hover:text-danger transition duration-250">
                        {prevService?.name}
                    </p>
                </button>
            </Link>
            <Link href={`/cad-services/${nextService?.slug}`} className="block">
                <button className="text-right border border-border rounded-lg px-7 py-4 group transition duration-250 hover:border-danger cursor-pointer">
                    <div className="flex items-center justify-end gap-1">
                        <p className="text-sm font-semibold opacity-75">
                            {tButton('next')}
                        </p>
                        <ChevronsRight
                            size={16}
                            className="group-hover:text-danger transition duration-250"
                        />
                    </div>
                    <p className="mt-1 text-lg font-semibold line-clamp-2 w-[350px] max-h-[2lh] leading-normal group-hover:text-danger transition duration-250">
                        {nextService?.name}
                    </p>
                </button>
            </Link>
        </>
    )
}
