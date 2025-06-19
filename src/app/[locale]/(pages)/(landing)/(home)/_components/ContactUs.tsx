import { useTranslations } from 'next-intl'

import { CONTACT_INFORMATIONS } from '@/app/shared/constants/appConstant'

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
            <div className="bg-gradient-to-r from-secondary via-secondary to-white">
                <div className="container grid grid-cols-[600px_1fr] gap-5">
                    <div className="w-full bg-secondary py-5 px-5 lg:py-12 md:pl-8 lg:pl-10 xl:pl-14 text-white shadow-lg">
                        <h4 className="text-xl font-semibold">
                            Contact Information
                        </h4>
                        <p className="text-sm mt-1 opacity-80">
                            Say something to start a live chat!
                        </p>
                        <ul className="mt-10 lg:mt-14 md:mt-6 md:grid md:grid-cols-2 lg:block">
                            {CONTACT_INFORMATIONS.map((contact, index) => (
                                <li
                                    key={index}
                                    className="md:flex md:items-center gap-4 my-6 md:my-4 lg:my-7 overflow-hidden"
                                >
                                    <contact.icon />
                                    <a
                                        href={contact.path}
                                        target="_"
                                        className="text-base overflow-hidden"
                                    >
                                        {contact.name}
                                    </a>
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
