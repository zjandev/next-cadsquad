import React from 'react'

import { Image } from 'antd'

import { Project } from '@/data/projects'

type Props = {
    data: Project
}

export default function ProjectCard({ data }: Props) {
    return (
        <div key={data.id} title={data.name} className="w-full rounded-xl">
            <Image
                src={data.imageUrl}
                alt={`Data ${data.name}`}
                title={data.name}
                className="size-full aspect-video object-cover rounded-xl"
            />
        </div>
    )
}
