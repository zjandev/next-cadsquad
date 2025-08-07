'use client'

import React from 'react'

import { Button } from '@heroui/react'
import { ChevronLeft } from 'lucide-react'

export default function ReturnBtn() {
    return (
        <Button startContent={<ChevronLeft size={16} />} variant="light">
            All posts
        </Button>
    )
}
