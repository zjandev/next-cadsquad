import React from 'react'

export default async function PostDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    return <div>PostDetailPage</div>
}
