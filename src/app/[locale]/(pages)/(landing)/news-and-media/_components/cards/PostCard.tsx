'use client'

import React from 'react'

import { Image } from 'antd'

import { Link } from '@/i18n/navigation'
import { MotionDiv } from '@/lib/motion'
import { Post } from '@/validationSchemas/post.schema'

type Props = {
    variant?: 'sm' | 'md' | 'lg'
    data: Post
}
export default function PostCard({ variant = 'sm', data }: Props) {
    switch (variant) {
        case 'sm':
            return <SmallPostCard data={data} />
        case 'md':
            return <MediumPostCard data={data} />
        case 'lg':
            return <LargePostCard data={data} />
        default:
            return <SmallPostCard data={data} />
    }
}

type VariantProps = {
    data: Post
}
const SmallPostCard = ({ data }: VariantProps) => {
    const wrapperVariants = {
        init: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        hover: {
            opacity: 1,
            boxShadow:
                'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
        },
    }
    return (
        <Link
            href={`/news-and-media/${data.slug}`}
            className="block"
            title={data.title}
        >
            <MotionDiv
                variants={wrapperVariants}
                initial="init"
                animate="animate"
                whileHover="hover"
                className="group flex items-center justify-start gap-3 p-2 rounded-3xl"
            >
                <Image
                    src={data?.thumbnailUrl}
                    alt="post image"
                    preview={false}
                    rootClassName="shrink-0 h-[80px] aspect-[1.1/1] rounded-3xl overflow-hidden"
                    className="h-full aspect-[1.1/1] object-cover rounded-3xl group-hover:scale-110 duration-300 transition"
                />
                <div>
                    <p className="text-black font-medium line-clamp-2 text-lg leading-inherit">
                        {data.title}
                    </p>
                    <p className="mt-0.5 text-sm opacity-75 line-clamp-1">
                        {data.shortDescription}
                    </p>
                </div>
            </MotionDiv>
        </Link>
    )
}

const MediumPostCard = ({ data }: VariantProps) => {
    return (
        <div className="w-full space-y-3">
            <Link
                href={`/news-and-media/${data.slug}`}
                className="group block w-full aspect-[4/3]"
                title={data.title}
            >
                <Image
                    src={data?.thumbnailUrl}
                    alt="post image"
                    preview={false}
                    rootClassName="!size-full overflow-hidden rounded-3xl"
                    className="!size-full object-cover rounded-3xl group-hover:scale-110 duration-300 transition"
                />
            </Link>
            <div>
                <Link
                    href={`/news-and-media/${data.slug}`}
                    className="text-black font-semibold line-clamp-2 text-xl leading-normal hover:text-blue-500 transition duration-200"
                    title={data.title}
                >
                    {data.title}
                </Link>
                <p className="mt-1 text-base opacity-75 line-clamp-2">
                    {data?.shortDescription}
                </p>
            </div>
        </div>
    )
}

const LargePostCard = ({ data }: VariantProps) => {
    const wrapperVariants = {
        init: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        hover: {
            opacity: 1,
            boxShadow:
                'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
        },
    }

    return (
        <MotionDiv
            variants={wrapperVariants}
            initial="init"
            animate="animate"
            whileHover="hover"
            className="group h-full relative overflow-hidden rounded-2xl"
        >
            <Link
                href={`/news-and-media/${data.slug}`}
                className="block size-full"
                title={data.title}
            >
                <Image
                    src={data?.thumbnailUrl}
                    alt="post image"
                    preview={false}
                    rootClassName="!size-full"
                    className="!size-full object-cover rounded-2xl group-hover:scale-110 duration-300 transition"
                />
            </Link>
            <div className="rounded-b-2xl absolute bottom-0 backdrop-blur-2xl w-full py-3 px-6 md:py-6 xl:py-12 md:px-10">
                <Link
                    href={`/news-and-media/${data.slug}`}
                    className="w-fit text-xl md:text-3xl font-medium text-white line-clamp-2 leading-normal"
                    title={data.title}
                >
                    {data?.title}
                </Link>
            </div>
        </MotionDiv>
    )
}
