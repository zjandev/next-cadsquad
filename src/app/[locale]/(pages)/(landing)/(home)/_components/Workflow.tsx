import React from 'react'

import { useTranslations } from 'next-intl'

import WorkflowScene from './scene/WorkflowScene'

export default function Workflow() {
    const tHome = useTranslations('landing.home')

    return (
        <div className="container">
            <h2 className="text-5xl font-bold text-center font-saira">
                {tHome.rich('sections.workflow.title', {
                    highlight: (chunk) => (
                        <span className="text-primary">{chunk}</span>
                    ),
                })}
            </h2>
            <div className="mt-10 h-[800px] w-full">
                <WorkflowScene />
            </div>
        </div>
    )
}
