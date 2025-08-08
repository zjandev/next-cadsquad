import React from 'react'

import { useLocale } from 'next-intl'

import {
    ABOUT_CADSQUAD_INFO,
    VI_ABOUT_CADSQUAD_INFO,
} from '@/shared/constants/companyTable'

export default function InformationTable() {
    const locale = useLocale()

    const aboutCadsquadInfo =
        locale === 'vi' ? VI_ABOUT_CADSQUAD_INFO : ABOUT_CADSQUAD_INFO

    return (
        <table className="w-full border border-gray-300 shadow-md">
            <tbody>
                {aboutCadsquadInfo.map((item, index) => {
                    return (
                        <tr
                            key={item.title + index}
                            className="grid grid-cols-[0.5fr_1fr] gap-14 border-b border-gray-200 last:border-none"
                        >
                            <td className="py-5 pl-10 font-semibold uppercase align-middle bg-gray-200 border-b border-border">
                                {item.title}
                            </td>
                            {item.value && (
                                <td className="py-5 tracking-wide align-middle">
                                    {item.value}
                                </td>
                            )}

                            {item.values && (
                                <td className="py-5 pl-8">
                                    <ul className="space-y-2 list-disc">
                                        {item.values?.map((item, index) => {
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
