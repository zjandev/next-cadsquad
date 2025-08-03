import React from 'react'

import { MotionDiv } from '../../../../lib/motion'
import CTAButton from './CTAButton'
import ChangeLanguage from './ChangeLanguage'

export default function Actions() {
    return (
        <div className="flex items-center justify-end gap-8">
            <MotionDiv
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.3,
                        type: 'spring',
                        stiffness: 120,
                        damping: 20,
                    },
                }}
            >
                <ChangeLanguage />
            </MotionDiv>
            <MotionDiv
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.4,
                        type: 'spring',
                        stiffness: 120,
                        damping: 20,
                    },
                }}
            >
                <CTAButton />
            </MotionDiv>
        </div>
    )
}
