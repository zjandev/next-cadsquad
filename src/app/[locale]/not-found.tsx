'use client'

import { Button, Input } from 'antd'
import { SearchProps } from 'antd/es/input'

import { MotionDiv, MotionH1, MotionP } from '@/lib/motion'

const { Search } = Input

export default function NotFound() {
    const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
        console.log(info?.source, value)

    return (
        <div className="container mx-auto w-full min-h-screen mt-32 px-5 xl:px-0 xl:mt-0 flex flex-col items-center xl:justify-center">
            <div className="px-2 py-1 border rounded-[10px] bg-primary-100 w-fit">
                <p className="text-sm text-primary font-semibold">404 error</p>
            </div>
            <div className="mt-5 text-center">
                <MotionH1
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="leading-tight xl:leading-normal text-3xl xl:text-5xl"
                >
                    This page was not found
                </MotionH1>
                <MotionP
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 }}
                    className="opacity-80"
                >{`Sorry, the page you are looking for doesn't exist or has been moved.`}</MotionP>
            </div>
            <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8"
            >
                <Search
                    addonBefore="www.cadsquad.vn/"
                    placeholder="input search text"
                    allowClear
                    onSearch={onSearch}
                    style={{ width: 304 }}
                />
            </MotionDiv>
            <MotionDiv
                className="mt-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
            >
                <Button type="primary" href={'/'} className="text-white">
                    Return home
                </Button>
            </MotionDiv>
        </div>
    )
}
