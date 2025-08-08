'use client'

import React from 'react'

import { PlusIcon } from 'lucide-react'

import { MotionButton } from '@/lib/motion'

export default function ContactButton({
    setShow,
    show,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}) {
    return (
        <MotionButton
            className="p-3 bg-white dark:bg-black-900 rounded-full shadow-lg dark:shadow-black-full hover:text-primary cursor-pointer"
            onClick={() => {
                setShow(!show)
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <PlusIcon size={30} />
        </MotionButton>
    )
}
