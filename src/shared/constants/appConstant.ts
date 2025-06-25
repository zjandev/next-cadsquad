import { CallIcon } from '@/shared/components/icons/CallIcon'
import { FacebookIcon } from '@/shared/components/icons/FacebookIcon'
import { FiverrIcon } from '@/shared/components/icons/FiverrIcon'
import { MailIcon } from '@/shared/components/icons/MailIcon'
import { TiktokIcon } from '@/shared/components/icons/TiktokIcon'
import { YoutubeIcon } from '@/shared/components/icons/YoutubeIcon'
import { ZaloIcon } from '@/shared/components/icons/ZaloIcon'

import { APP_LANGUAGES } from './appLanguages'
import { FLOAT_CONTACTS } from './floatContact'
import { FOOTER_LINKS } from './footerLinks'
import { HEADER_NAVIGATES } from './headerNavigate'
import { WHY_CHOOSE_US } from './whyChooseUs'

export const ourSlogan = [
    'Professional CAD Services',
    'Unique and creative',
    'Reaching the world',
    'Shaping the Future of Mechanical Design',
]

export const COMPANY_NAME = {
    viName: 'Công ty dịch vụ CAD',
    enName: 'CAD services company',
}

export const SOCIALS = [
    {
        name: 'Facebook',
        icon: FacebookIcon,
        brandColor: '#0866ff',
        href: 'https://www.facebook.com/CSD.Vie',
    },
    {
        name: 'Youtube',
        icon: YoutubeIcon,
        color: '#ff0133',
        href: 'https://www.youtube.com/@CSDVietnam',
    },
    {
        name: 'Tiktok',
        icon: TiktokIcon,
        color: '#000000',
        href: 'https://www.tiktok.com/@csdvietnam',
    },
]
export type Social = (typeof SOCIALS)[0]

export const CONTACT_INFORMATIONS = [
    {
        icon: CallIcon,
        name: '076 527 9228',
        path: 'tel:0765279228',
    },
    {
        icon: MailIcon,
        name: 'Contact@cadsquad.com',
        path: 'mailto:contact.us@csdvietnam.com',
    },
    {
        icon: ZaloIcon,
        name: 'Zalo.me/0765279228',
        path: 'https://zalo.me/0765279228',
    },
    {
        icon: FiverrIcon,
        name: 'Fiverr.com/vietnamcsd',
        path: 'https://www.fiverr.com/vietnamcsd',
    },
]
export type ContactInfor = (typeof CONTACT_INFORMATIONS)[0]

export {
    HEADER_NAVIGATES,
    APP_LANGUAGES,
    WHY_CHOOSE_US,
    FOOTER_LINKS,
    FLOAT_CONTACTS,
}
