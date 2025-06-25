import { useTranslations } from 'next-intl'

import { WHY_CHOOSE_US } from '@/shared/constants/appConstant'
import { MotionDiv } from '@/lib/motion'

import ReasonCard from './cards/ReasonCard'

export default function WhyChooseUs() {
    const tHome = useTranslations('landing.home')

    return (
        <div className="container">
            <h2 className="text-5xl font-bold text-center font-saira">
                {tHome.rich('sections.whyChooseUs.title', {
                    highlight: (chunk) => (
                        <span className="text-primary">{chunk}</span>
                    ),
                })}
            </h2>
            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16">
                {WHY_CHOOSE_US.map((reason, index) => (
                    <MotionDiv
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            // delay: index % 10000,
                            transitionDelay: {
                                delay: index,
                            },
                        }}
                        key={index}
                        className="size-full"
                    >
                        <ReasonCard data={reason} />
                    </MotionDiv>
                ))}
            </div>
        </div>
    )
}
