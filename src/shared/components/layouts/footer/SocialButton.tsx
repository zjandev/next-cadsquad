'use client'

import React from 'react'

import { Button } from '@heroui/react'

import { Social } from '@/shared/constants/appConstant'
import { useDevice } from '@/shared/hooks/useDevice'

type Props = {
    data: Social
}

export default function SocialButton({ data }: Props) {
    const { isMobile } = useDevice()
    return (
        <Button
            isIconOnly
            className="rounded-full p-0 xl:p-2"
            size={isMobile ? 'sm' : 'md'}
            variant="ghost"
        >
            <data.icon className="size-4 xl:size-full" />
        </Button>
    )
}
