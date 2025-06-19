'use client'

import { Button } from '@heroui/react'
import { useTranslations } from 'next-intl'

export default function CTAButton() {
    const tButton = useTranslations('button')

    return <Button>{tButton('contact')}</Button>
}
