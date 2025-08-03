import React from 'react'

import OurJourneyCarousel from './carousels/OurJourneyCarousel'

export default function OurJourney() {
    return (
        <section className="container space-y-9 pt-22">
            <div className="flex flex-col items-center space-y-2">
                <h2 className="uppercase font-medium text-xl text-danger">
                    Our Journey
                </h2>
            </div>
            <OurJourneyCarousel />
        </section>
    )
}
