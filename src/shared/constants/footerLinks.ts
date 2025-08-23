import { CAD_SERVICES } from '@/shared/database/cadServices'

const getCadServiceMenu: () => FooterLink['children'] = () => {
    return CAD_SERVICES.map((item) => {
        return {
            enLabel: item.title.original!,
            viLabel: item.title.vi!,
            href: `/cad-services/${item.slug!}`,
        }
    })
}

export type FooterLink = {
    viGroupName: string
    enGroupName: string
    children?: { viLabel: string; enLabel: string; href: string }[]
}
export const FOOTER_LINKS: FooterLink[] = [
    {
        viGroupName: '',
        enGroupName: '',
        children: [
            {
                viLabel: 'Về chúng tôi',
                enLabel: 'About us',
                href: '/about-us',
            },
            {
                viLabel: 'Tổng quan',
                enLabel: 'Overview',
                href: '/about-us#overview',
            },
            {
                viLabel: 'Tầm nhìn',
                enLabel: 'Vision',
                href: '/about-us/vision',
            },
            {
                viLabel: 'Hành trình của chúng tôi',
                enLabel: 'Our Journey',
                href: '/about-us#our-journey',
            },
        ],
    },
    {
        viGroupName: 'Khóa học',
        enGroupName: 'Academy',
        children: [
            {
                viLabel: 'Khóa học AutoCAD cơ bản',
                enLabel: 'Autodesk Inventor Basic',
                href: '/academy/autodesk-inventor-basic',
            },
            {
                viLabel: 'Khóa học SolidWorks nâng cao',
                enLabel: 'Autodesk Inventor Advance',
                href: '/academy/autodesk-inventor-advance',
            },
            {
                viLabel: 'Thiết kế sản phẩm 3D',
                enLabel: 'Autodesk AutoCAD',
                href: '/academy/autodesk-autoCAD',
            },
        ],
    },
    {
        viGroupName: 'Dịch vụ CAD',
        enGroupName: 'CAD services',
        children: getCadServiceMenu(),
    },
]
