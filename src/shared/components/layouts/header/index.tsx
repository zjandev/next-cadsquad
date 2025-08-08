import React from 'react'

import Header from './Header'
import MobileHeader from './MobileHeader'

export default function AppHeader() {
    return (
        <div className="fixed top-0 z-50 w-screen">
            <div className="hidden lg:block">
                <Header />
            </div>
            <div className="block lg:hidden">
                <MobileHeader />
            </div>
        </div>
    )
}
