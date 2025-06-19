import React from 'react'

import Image from 'next/image'

import Focus1 from '@/assets/images/focus_1.png'
import WorldwideBackground from '@/assets/images/worldwide-background.png'

export default function AboutUsPage() {
    return (
        <div className="min-h-screen max-w-screen">
            <div className="container">
                <section className="mt-12 text-lg leading-loose text-justify">
                    <div className="items-start justify-center gap-8 md:flex min-h-fit">
                        <aside className="min-w-[300px]">
                            {/* <VisionCard /> */}
                        </aside>
                        <section className="relative md:mt-0 h-fit">
                            <Image
                                src={WorldwideBackground}
                                alt="background"
                                title="background"
                                loading="eager"
                                className="absolute right-0 -z-10 opacity-80"
                                width={800}
                                height={800}
                            />
                            <div className="mb-5">
                                <p className="first-letter:ml-10">
                                    Welcome to our Engineering Design Team. We
                                    are a highly skilled and experienced group
                                    of mechanical engineers passionate about
                                    turning innovative ideas into tangible
                                    reality. With expertise in diverse areas of
                                    mechanical engineering, we offer
                                    comprehensive design solutions tailored to
                                    meet your specific needs. Our team brings
                                    together a wealth of knowledge and practical
                                    experience in concept development, 3D
                                    modeling, 3D artist, CAD drafting, and
                                    product design.
                                </p>
                                <p className="mt-3 first-letter:ml-10">
                                    CADSQUAD&apos;s vision is to become a
                                    trusted and reputable partner in the field
                                    of 3D design and related services. We strive
                                    to achieve this mission by delivering
                                    creativity, quality, and exceptional
                                    performance to our clients in every project.
                                    With the ideal of surpassing client
                                    expectations and creating products and
                                    design solutions that go above and beyond,
                                    CADSQUAD is committed to shaping and driving
                                    sustainable growth in the CAD and 3D design
                                    industry. We prioritize continuous
                                    improvement, ceaseless innovation, and
                                    ensure that all our projects leave a unique
                                    mark and provide significant value to our
                                    clients.
                                </p>
                            </div>
                        </section>
                    </div>
                    <section className="gap-8 md:flex">
                        <p className="mt-3 first-letter:ml-10">
                            “With a highly experienced workforce that has
                            accumulated years of expertise in their respective
                            fields, including notable achievements in mechanical
                            engineering CAD design competitions, and a richly
                            experienced team of 3D artists, CADSQUAD Vietnam
                            takes pride in the quality of services we deliver to
                            our clients.”
                        </p>
                        <Image
                            src={Focus1}
                            alt="Focus one"
                            title="Image"
                            loading="eager"
                            className="mx-auto mt-3 rounded-md md:w-[50%] md:h-[50%] lg:w-[500px] lg:h-[282px]"
                        />
                    </section>
                </section>
                <section className="mt-14"></section>
            </div>
        </div>
    )
}
