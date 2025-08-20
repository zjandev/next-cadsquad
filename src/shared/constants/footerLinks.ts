import { OUR_SERVICES } from '@/shared/database/ourServices'

export const FOOTER_LINKS = [
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
        children: [],
    },
]

const services = OUR_SERVICES
const getInnerCadService = () => {
    return FOOTER_LINKS.map((group) => {
        if (group.enGroupName === 'CAD services') {
            const newChilds = services.map((item) => {
                return {
                    viLabel: item.name,
                    enLabel: item.name,
                    href: `/cad-services/${item.slug}`,
                }
            })

            return {
                ...group,
                children: newChilds,
            }
        }

        return { ...group }
    })
}
export const FOOTER = getInnerCadService()
export type FooterLink = (typeof FOOTER_LINKS)[0]
