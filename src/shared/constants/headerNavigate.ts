import { StaticImageData } from 'next/image'

import Img3dDrawing from '@/assets/images/3d-drawing.png'
import ImgCsdHeart from '@/assets/images/cadsquad-heart.png'
import ImgStellStructure from '@/assets/images/stell-structure.png'
import ImgTeam from '@/assets/images/teams.png'
import ImgVision from '@/assets/images/vision.png'

export type NavigateItem = {
    viLabel: string
    enLabel: string
    href: string
    outSite?: boolean
    menus?: {
        viLabel: string
        enLabel: string
        image: string | StaticImageData
        href: string
        outSite?: boolean
    }[]
}
export const HEADER_NAVIGATES: NavigateItem[] = [
    {
        enLabel: 'About us',
        viLabel: 'Về chúng tôi',
        href: '/about-us',
        menus: [
            {
                viLabel: 'Tổng quan',
                enLabel: 'Overview',
                image: ImgTeam,
                href: '/about-us/overview',
            },
            {
                viLabel: 'Tầm nhìn',
                enLabel: 'Vision',
                image: ImgVision,
                href: '/about-us/vision',
            },
            {
                viLabel: 'Hành trình của chúng tôi',
                enLabel: 'Our journey',
                image: ImgCsdHeart,
                href: '/about-us/our-journey',
            },
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
                image: Img3dDrawing,
                href: '/cad-services/3d-modeling-and-rendering',
            },
            {
                viLabel: 'Kết cấu thép',
                enLabel: 'Steel structure ',
                image: ImgStellStructure,
                href: '/cad-services/stell-structure',
            },
        ],
    },
    {
        enLabel: 'Academy',
        viLabel: 'Khóa học',
        href: 'https://courses.csdvietnam.com',
        outSite: true,
    },
    {
        enLabel: 'New & Media',
        viLabel: 'Tin tức',
        href: '/news-and-media',
    },
]
