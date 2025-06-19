import { StaticImageData } from 'next/image'

export type HeaderNavigate = {
    viLabel: string
    enLabel: string
    href: string
    menus?: {
        viLabel: string
        enLabel: string
        image: string | StaticImageData
        href: string
    }[]
}[]
export const HEADER_NAVIGATE: HeaderNavigate = [
    {
        enLabel: 'About us',
        viLabel: 'Về chúng tôi',
        href: '/about-us',
        menus: [
            { viLabel: 'Tầm nhìn', enLabel: 'Vision', image: '', href: '' },
        ],
    },
    {
        enLabel: 'CAD Services',
        viLabel: 'Dịch vụ CAD',
        href: '/cad-services',
        menus: [
            {
                viLabel: 'Mô hình hóa và dựng hình 3D',
                enLabel: '3D modeling & rendering',
                image: '',
                href: '/cad-services/3d-modeling-and-rendering',
            },
            {
                viLabel: 'Kết cấu thép',
                enLabel: 'Steel structure ',
                image: '',
                href: '/cad-services/stell-structure',
            },
        ],
    },
    {
        enLabel: 'Academy',
        viLabel: 'Khóa học',
        href: '/academy',
    },
    {
        enLabel: 'New & Media',
        viLabel: 'Tin tức',
        href: '/news-and-media',
    },
]
