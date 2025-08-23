'use client'

import React from 'react'

import { useDevice } from '@/shared/hooks/useDevice'

import AboutUsHeading from './_components/AboutUsHeading'
import AboutUsNavigate from './_components/AboutUsNavigate'
import ClientPartner from './_components/ClientPartner'
import FounderStory from './_components/FounderStory'
import MobileFounderStory from './_components/MobileFounderStory'
import OurJourney from './_components/OurJourney'
import Overview from './_components/Overview'

export default function AboutUsPage() {
    const { isMobile } = useDevice()

    return (
        <div className="relative pb-20 max-w-screen">
            <AboutUsHeading />
            {!isMobile && (
                <div className="sticky top-[66px] z-10">
                    <AboutUsNavigate />
                </div>
            )}
            <section id="overview">
                <Overview />
            </section>
            <section id="overview">
                {isMobile ? <MobileFounderStory /> : <FounderStory />}
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
