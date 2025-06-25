import React from 'react'

import { useTranslations } from 'next-intl'

import { PROJECTS } from '@/data/projects'

import ProjectCard from './cards/ProjectCard'

export default function PopularProject() {
    const tHome = useTranslations('landing.home')

    return (
        <>
            <div className="py-20">
                <h2 className="text-center text-5xl font-saira font-bold">
                    {tHome.rich('sections.popularProject.title', {
                        highlight: (chunk) => (
                            <span className="text-primary">{chunk}</span>
                        ),
                    })}
                </h2>
                <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} data={project} />
                    ))}
                </div>
            </div>
        </>
    )
}
