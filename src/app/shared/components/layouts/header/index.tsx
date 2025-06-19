import React from 'react'

import Logo from '@/app/shared/components/Logo'
import Actions from '@/app/shared/components/layouts/header/Actions'
import Navbar from '@/app/shared/components/layouts/header/Navbar'

export default function Header() {
    return (
        <header className="container py-3 grid grid-cols-[190px_1fr] gap-5">
            <Logo classNames={{ logo: 'h-[80px]' }} />
            <div className="flex items-center justify-end gap-5">
                <Navbar />
                <div className="mx-2 w-[2px] h-[30px] bg-border" />
                <Actions />
            </div>
        </header>
    )
}
