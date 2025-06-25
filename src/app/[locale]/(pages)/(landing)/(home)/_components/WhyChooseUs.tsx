import { useTranslations } from 'next-intl'

import { WHY_CHOOSE_US } from '@/app/shared/constants/appConstant'

import ReasonCard from './cards/ReasonCard'

export default function WhyChooseUs() {
    const tHome = useTranslations('landing.home')

    return (
        <>
            <div className="py-20">
                <h2 className="text-center text-5xl font-saira font-bold">
                    {tHome.rich('sections.whyChooseUs.title', {
                        highlight: (chunk) => (
                            <span className="text-primary">{chunk}</span>
                        ),
                    })}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 mt-5 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
                    {WHY_CHOOSE_US.map((reason, index) => (
                        <ReasonCard key={index} data={reason} />
                    ))}
                </div>
            </div>
        </>
    )
}
