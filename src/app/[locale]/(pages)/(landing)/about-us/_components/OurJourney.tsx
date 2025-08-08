import React from 'react'

import { useTranslations } from 'next-intl'

import OurJourneyCarousel from './carousels/OurJourneyCarousel'

export default function OurJourney() {
    const tOurJourney = useTranslations('landing.aboutUs.sections.ourJourney')
    return (
        <section className="container space-y-9 pt-24">
            <div className="flex flex-col items-center space-y-2">
                <h2 className="uppercase font-medium text-xl text-danger">
                    {tOurJourney('title')}
                </h2>
            </div>
            <OurJourneyCarousel />
        </section>
    )
}
