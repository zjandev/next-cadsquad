import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

import { CONTACT_INFORMATIONS } from '@/app/shared/constants/appConstant'
import { MotionP } from '@/lib/motion'

import ContactForm from './forms/ContactForm'

export default function ContactUs() {
    const tHome = useTranslations('landing.home')

    return (
        <div className="size-full space-y-5">
            <h2 className="text-center text-5xl font-saira font-bold">
                {tHome.rich('sections.contactUs.title', {
                    highlight: (chunk) => (
                        <span className="text-primary">{chunk}</span>
                    ),
                })}
            </h2>
            <div className="bg-gradient-to-r from-secondary via-secondary to-white pt-20 pb-14">
                <div className="container grid grid-cols-[600px_1fr] gap-5">
                    <div className="w-full bg-secondary py-5 px-5 lg:py-12 md:pl-8 lg:pl-10 xl:pl-14 text-white shadow-lg">
                        <h4 className="text-xl font-semibold">
                            {tHome(
                                'sections.contactUs.contactInformation.title'
                            )}
                        </h4>
                        <p className="text-sm mt-1 opacity-80">
                            {tHome(
                                'sections.contactUs.contactInformation.description'
                            )}
                        </p>
                        <ul className="mt-10 lg:mt-14 md:mt-6 md:grid md:grid-cols-2 lg:block">
                            {CONTACT_INFORMATIONS.map((contact, index) => (
                                <li
                                    key={index}
                                    className="w-fit md:flex md:items-center gap-4 my-6 md:my-4 lg:my-7 overflow-hidden underline-offset-4"
                                >
                                    <contact.icon />
                                    <MotionP
                                        initial={{
                                            opacity: 0,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                        }}
                                        whileHover={{
                                            opacity: 1,
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        <Link
                                            href={contact.path}
                                            target="_blank"
                                            className="text-base overflow-hidden"
                                            title={contact.name}
                                        >
                                            {contact.name}
                                        </Link>
                                    </MotionP>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
