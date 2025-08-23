'use client'

import React from 'react'

import AboutUsHeading from './_components/AboutUsHeading'
import AboutUsNavigate from './_components/AboutUsNavigate'
import ClientPartner from './_components/ClientPartner'
import FounderStory from './_components/FounderStory'
import MobileFounderStory from './_components/MobileFounderStory'
import OurJourney from './_components/OurJourney'
import Overview from './_components/Overview'

export default function AboutUsPage() {
    return (
        <div className="relative pb-20 max-w-screen">
            <AboutUsHeading />
            <div className="hidden lg:block sticky top-[66px] z-10">
                <AboutUsNavigate />
            </div>
            <section id="overview">
                <Overview />
            </section>
            <section id="overview">
                <div className="hidden lg:block">
                    <FounderStory />
                </div>
                <div className="block lg:hidden">
                    <MobileFounderStory />
                </div>
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
