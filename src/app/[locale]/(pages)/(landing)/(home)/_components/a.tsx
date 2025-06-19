import React from 'react'

import { useTranslations } from 'next-intl'

export default function CustomerReview() {
    const tHome = useTranslations('landing.home')

    return (
        <div className="size-full space-y-5">
            <h2 className="text-center text-5xl font-saira font-bold">
                {tHome.rich('sections.customerReview.title', {
                    highlight: (chunk) => (
                        <span className="text-primary">{chunk}</span>
                    ),
                })}
            </h2>
            <div></div>
        </div>
    )
}
