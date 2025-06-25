'use client'

import React from 'react'

import { Image } from 'antd'
import { useTranslations } from 'next-intl'

import { PROJECTS } from '@/data/projects'

import ProjectCard from './cards/ProjectCard'

export default function PopularProject() {
    const tHome = useTranslations('landing.home')

    return (
        <div className="container">
            <h2 className="text-5xl font-bold text-center font-saira">
                {tHome.rich('sections.popularProject.title', {
                    highlight: (chunk) => (
                        <span className="text-primary">{chunk}</span>
                    ),
                })}
            </h2>
            <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16">
                <Image.PreviewGroup>
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} data={project} />
                    ))}
                </Image.PreviewGroup>
            </div>
        </div>
    )
}
