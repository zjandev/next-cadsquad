import React from 'react'

import CTAButton from './CTAButton'
import ChangeLanguage from './ChangeLanguage'

export default function Actions() {
    return (
        <div className="flex items-center justify-end gap-8">
            <ChangeLanguage />
            <CTAButton />
        </div>
    )
}
