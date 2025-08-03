import React from 'react'

import AboutUsHeading from './_components/AboutUsHeading'
import AboutUsNavigate from './_components/AboutUsNavigate'
import ClientPartner from './_components/ClientPartner'
import OurJourney from './_components/OurJourney'
import Overview from './_components/Overview'

export default function AboutUsPage() {
    return (
        <div className="relative pb-20 max-w-screen">
            <AboutUsHeading />
            <div className="sticky top-[66px] z-50">
                <AboutUsNavigate />
            </div>
            <section id="overview">
                <Overview />
            </section>
            <section id="our-journey" className="max-w-screen overflow-hidden">
                <OurJourney />
            </section>
            <section id="client-partner">
                <ClientPartner />
            </section>
        </div>
    )
}
