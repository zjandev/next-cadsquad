import { Variants } from 'motion'

import { MotionSection } from '@/lib/motion'

import Banner from './_components/Banner'
import ContactUs from './_components/ContactUs'
import PopularProject from './_components/PopularProject'
import Testimonials from './_components/Testimonials'
import WhyChooseUs from './_components/WhyChooseUs'
import Workflow from './_components/Workflow'

export default function HomePage() {
    const sectionVariants: Variants = {
        init: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
    }
    return (
        <>
            <MotionSection
                variants={sectionVariants}
                initial="init"
                whileInView="animate"
                className="h-full max-w-screen"
            >
                <Banner />
            </MotionSection>
            <MotionSection
                variants={sectionVariants}
                initial="init"
                whileInView="animate"
                className="pt-16 border-b pb-24 border-border bg-gradient-to-b from-background to-background-secondary"
            >
                <PopularProject />
            </MotionSection>
            <MotionSection
                variants={sectionVariants}
                initial="init"
                whileInView="animate"
                className="pt-16 border-b pb-24 border-border bg-gradient-to-b from-background to-background-secondary"
            >
                <WhyChooseUs />
            </MotionSection>
            <MotionSection
                variants={sectionVariants}
                initial="init"
                whileInView="animate"
                className="pt-16 border-b pb-24 border-border bg-gradient-to-b from-background to-background-secondary"
            >
                <Workflow />
            </MotionSection>
            <MotionSection
                variants={sectionVariants}
                initial="init"
                whileInView="animate"
                className="pt-16 border-b pb-24 border-border bg-gradient-to-b from-background to-background-secondary"
            >
                <Testimonials />
            </MotionSection>
            <MotionSection
                variants={sectionVariants}
                initial="init"
                whileInView="animate"
                className="mb-24"
            >
                <ContactUs />
            </MotionSection>
        </>
    )
}
