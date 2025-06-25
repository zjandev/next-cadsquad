'use client'

import React from 'react'

import { Button } from '@heroui/react'

import { Social } from '@/shared/constants/appConstant'

type Props = {
    data: Social
}

export default function SocialButton({ data }: Props) {
    return (
        <Button isIconOnly className="rounded-full" variant="ghost">
            <data.icon />
        </Button>
    )
}
