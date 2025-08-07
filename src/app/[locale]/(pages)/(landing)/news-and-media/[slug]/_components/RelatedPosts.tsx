import React from 'react'

import { Post } from '@/validationSchemas/post.schema'

import PostCard from '../../_components/cards/PostCard'

type Props = {
    data: Post[]
}

export default function RelatedPosts({ data }: Props) {
    return (
        <div className="space-y-5">
            <h4 className="text-sm font-semibold">Related Posts</h4>
            <div className="max-h-[72vh] overflow-y-scroll space-y-1.5">
                {data.map((post) => {
                    return (
                        <PostCard
                            key={post.id}
                            data={post}
                            showDescription={false}
                            classNames={{
                                image: {
                                    rootClassName:
                                        '!h-[50px] aspect-[1.5/1] !rounded-sm',
                                    className:
                                        '!h-[50px] aspect-[1.5/1] !rounded-sm',
                                },
                                title: 'text-sm',
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}
