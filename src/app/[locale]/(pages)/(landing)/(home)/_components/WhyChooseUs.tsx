import { useTranslations } from 'next-intl'

import { MotionDiv } from '@/lib/motion'
import { WHY_CHOOSE_US } from '@/shared/constants/appConstant'

import HeadingSection from './HeadingSection'
import ReasonCard from './cards/ReasonCard'

export default function WhyChooseUs() {
    const tHome = useTranslations('landing.home')

    return (
        <div className="container space-y-5 lg:space-y-8">
            <HeadingSection className="!text-center">
                {tHome.rich('sections.whyChooseUs.title', {
                    highlight: (chunk) => (
                        <span className="text-primary">{chunk}</span>
                    ),
                })}
            </HeadingSection>
            <div className="px-4 lg:px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                {WHY_CHOOSE_US.map((reason, idx) => (
                    <MotionDiv
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: idx * 0.1,
                                type: 'spring',
                                stiffness: 120,
                                damping: 20,
                            },
                        }}
                        viewport={{ once: true }}
                        className="size-full"
                    >
                        <ReasonCard data={reason} />
                    </MotionDiv>
                ))}
            </div>
        </div>
    )
}
