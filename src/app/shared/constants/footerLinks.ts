export const FOOTER_LINKS = [
    {
        viGroupName: 'Dịch vụ CAD',
        enGroupName: 'CAD services',
        children: [
            {
                viLabel: 'Thiết kế 3D',
                enLabel: '3D Modeling',
                href: '/services/3d-modeling-and-rendering',
            },
            {
                viLabel: 'Kỹ thuật thép',
                enLabel: 'Steel structure',
                href: '/services/steel-structure',
            },
        ],
    },
    {
        viGroupName: 'Khóa học',
        enGroupName: 'Academy',
        children: [
            {
                viLabel: 'Khóa học AutoCAD cơ bản',
                enLabel: 'Basic AutoCAD Course',
                href: '/academy/basic-autocad-course',
            },
            {
                viLabel: 'Khóa học SolidWorks nâng cao',
                enLabel: 'Advanced SolidWorks Course',
                href: '/academy/advanced-solidworks-course',
            },
            {
                viLabel: 'Thiết kế sản phẩm 3D',
                enLabel: '3D Product Design',
                href: '/academy/3d-product-design',
            },
            {
                viLabel: 'Kỹ thuật mô phỏng CAE',
                enLabel: 'CAE Simulation Techniques',
                href: '/academy/cae-simulation-techniques',
            },
            {
                viLabel: 'Lập trình gia công CAM',
                enLabel: 'CAM Programming',
                href: '/academy/cam-programming',
            },
        ],
    },
]

export type FooterLink = (typeof FOOTER_LINKS)[0]
