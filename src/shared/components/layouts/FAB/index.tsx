'use client'

import React, { useEffect, useState } from 'react'

import { Tooltip } from '@heroui/react'
import { Variants } from 'motion'
import Image from 'next/image'

import { Link } from '@/i18n/navigation'
import { MotionDiv } from '@/lib/motion'
import { FLOAT_CONTACTS } from '@/shared/constants/appConstant'

import ContactButton from './ContactButton'
import ScrollToTop from './ScrollToTop'

export default function FAB() {
    const [show, setShow] = useState(false)
    const [enableScroll, setEnableScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', controlShow)
        return () => {
            window.removeEventListener('scroll', controlShow)
        }
    }, [])
    const controlShow = () => {
        if (window.scrollY > 700) {
            setEnableScroll(true)
        } else {
            setEnableScroll(false)
        }
    }

    const variants: Variants = {
        show: {
            opacity: 1,
            x: 0,
            transition: {
                delayChildren: 1,
            },
        },
        hidden: {
            opacity: 0,
            x: 100,
        },
    }

    return (
        <div className="fixed bottom-10 right-10 z-[99]">
            {enableScroll && (
                <ScrollToTop
                    onScroll={() => {
                        window.scrollTo(0, 0)
                        if (show == true) {
                            setShow(false)
                        }
                    }}
                />
            )}

            <div
                className={`${
                    enableScroll
                        ? 'bottom-[4.5rem] md:bottom-24'
                        : 'bottom-4 md:bottom-10'
                } fixed right-2 md:right-6 z-10`}
            >
                <Tooltip
                    content={!show ? 'Show social menu' : 'Close social menu'}
                    placement="left"
                >
                    <ContactButton show={show} setShow={setShow} />
                </Tooltip>
            </div>

            <div
                className={`${
                    enableScroll
                        ? 'bottom-[8rem] md:bottom-[9.5rem]'
                        : 'bottom-[4.5rem] md:bottom-24'
                } fixed right-2 md:right-6 z-10`}
            >
                {show && (
                    <MotionDiv
                        initial="hidden"
                        animate="show"
                        variants={variants}
                    >
                        {FLOAT_CONTACTS.map((contact, index) => (
                            <MotionDiv
                                key={index}
                                className="group p-2 md:pr-4 lg:pl-3 lg:pr-6 lg:py-2 mb-3 bg-white dark:bg-black-900 rounded-xl shadow-lg dark:shadow-black-full dark:border dark:border-solid dark:border-gray-900 select-none"
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ x: -10 }}
                                initial={{ x: 0 }}
                            >
                                <Link
                                    href={contact.href}
                                    target="_blank"
                                    className="flex items-center"
                                >
                                    <Image
                                        src={contact.icon}
                                        alt={contact.title}
                                        width="40"
                                        height="40"
                                        className="mr-3"
                                        quality={100}
                                    />
                                    <p className="dark:text-white">
                                        <span className="group-hover:text-primary font-semibold">
                                            {contact.title}
                                        </span>
                                        <br />
                                        <span className="font-semibold text-sm opacity-60">
                                            {contact.description}
                                        </span>
                                    </p>
                                </Link>
                            </MotionDiv>
                        ))}
                    </MotionDiv>
                )}
            </div>
        </div>
    )
}
