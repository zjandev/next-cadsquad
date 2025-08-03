import React from 'react'

import { ABOUT_US_NAVIGATE } from '@/shared/constants/appConstant'

export default function AboutUsNavigate() {
    return (
        <nav className="bg-border">
            <ul className="container flex items-center justify-center">
                {ABOUT_US_NAVIGATE.map((item, idx) => {
                    return (
                        <li
                            key={idx}
                            className="py-3 pr-16 flex items-center justify-center"
                        >
                            <p className="text-[#aaa9a9] text-lg font-medium font-saira uppercase">
                                {item.viTitle}
                            </p>
                            {idx !== ABOUT_US_NAVIGATE.length - 1 && (
                                <div className="h-[25px] w-[2px] bg-[#bdbdbd] ml-16" />
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
