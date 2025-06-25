import React from 'react'

import { Image } from 'antd'
import { EyeIcon } from 'lucide-react'

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
                preview={{
                    mask: (
                        <div className="space-y-1">
                            <p>{data.name}</p>
                            <div className="flex items-center justify-center gap-1">
                                <EyeIcon size={15} />
                                <p className="text-xs">Preview</p>
                            </div>
                        </div>
                    ),
                    maskClassName: 'rounded-xl',
                }}
            />
        </div>
    )
}
