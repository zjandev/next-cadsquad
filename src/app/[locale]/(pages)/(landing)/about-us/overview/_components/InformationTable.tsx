import React from 'react'

import { useLocale } from 'next-intl'

import { SupportLanguages } from '@/i18n/routing'

export default function InformationTable() {
    const locale = useLocale()

    const aboutCadsquadInfo = [
        {
            enTitle: 'Company name',
            viTitle: 'Tên công ty',
            enValue: 'CADSQUAD',
            viValue: 'CADSQUAD',
        },
        {
            enTitle: 'Address',
            viTitle: 'Địa chỉ',
            enValue: 'Ho Chi Minh City, Viet Nam',
            viValue: 'TP. Hồ Chí Minh, Việt Nam',
        },
        {
            enTitle: 'Phone number',
            viTitle: 'Số điện thoại',
            enValue: '(+84) 765 279 228',
            viValue: '(+84) 765 279 228',
        },
        {
            enTitle: 'Email',
            viTitle: 'Email',
            enValue: 'Contact@cadsquad.vn',
            viValue: 'Contact@cadsquad.vn',
        },
        {
            enTitle: 'Establishment',
            viTitle: 'Năm thành lập',
            enValue: '10/11/2022',
            viValue: '10/11/2022',
        },
        {
            enTitle: 'Founder',
            viTitle: 'Nhà sáng lập',
            enValue: 'Pham Tien Phong (Mr.)',
            viValue: 'Phạm Tiền Phong',
        },
        {
            enTitle: 'Business activities',
            viTitle: 'Sản phẩm & dịch vụ',
            enValues: [
                'Technical Drawing Digitization & CAD Data Creation',
                'Part Extraction from Assembly Drawings',
                'Custom Machine Design for Food & Material Handling Systems',
                '3D and 2D for Steel structure',
                'CAD for Sheet Metal Manufacturing',
                'Machine Design Support - From Concept to Manufacturing',
                '3D Modeling & 3D Printing Support',
                'Structural Analysis (FEA)',
                'Mechanical Motion Simulation',
                'Custom Design Services on Request',
            ],
            viValues: [
                'Số hóa bản vẽ kỹ thuật & Tạo dữ liệu CAD',
                'Tách chi tiết từ bản vẽ lắp ráp',
                'Thiết kế máy tùy chỉnh cho hệ thống thực phẩm & xử lý vật liệu',
                'Thiết kế 3D và 2D cho kết cấu thép',
                'Thiết kế CAD cho gia công kim loại tấm',
                'Hỗ trợ thiết kế máy – Từ ý tưởng đến sản xuất',
                'Hỗ trợ mô hình 3D & In 3D',
                'Phân tích kết cấu (FEA)',
                'Mô phỏng chuyển động cơ khí',
                'Dịch vụ thiết kế tùy chỉnh theo yêu cầu',
            ],
        },
    ]
    return (
        <table className="w-full border border-gray-300 shadow-md">
            <tbody>
                {aboutCadsquadInfo.map((item, index) => {
                    const title = item[`${locale as SupportLanguages}Title`]

                    const value = item[`${locale as SupportLanguages}Value`]
                    const values = item[`${locale as SupportLanguages}Values`]

                    return (
                        <tr
                            key={item.enTitle + index}
                            className="grid grid-cols-[0.5fr_1fr] gap-14 border-b border-gray-200 last:border-none"
                        >
                            <td className="py-5 pl-10 font-semibold uppercase align-middle bg-gray-200 border-b border-border">
                                {title}
                            </td>
                            {(item.enValue || item.viValue) && (
                                <td className="py-5 tracking-wide align-middle">
                                    {value}
                                </td>
                            )}

                            {(item.enValues || item.viValues) && (
                                <td className="py-5 pl-8">
                                    <ul className="space-y-2 list-disc">
                                        {values?.map((item, index) => {
                                            return (
                                                <li
                                                    key={item + index}
                                                    className="tracking-wide"
                                                >
                                                    {item}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </td>
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
