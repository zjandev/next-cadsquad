'use client'

import React from 'react'

import { Accordion, AccordionItem } from '@heroui/react'
import { Image } from 'antd'
import { useTranslations } from 'next-intl'

import { MotionDiv } from '@/lib/motion'
import { WORKFLOW } from '@/shared/constants/appConstant'

import HeadingSection from './HeadingSection'

export default function Workflow() {
    const tHome = useTranslations('landing.home')

    return (
        <div className="container space-y-5 lg:space-y-8">
            <HeadingSection className="!text-center">
                {tHome.rich('sections.workflow.title', {
                    highlight: (chunk) => (
                        <span className="text-primary">{chunk}</span>
                    ),
                })}
            </HeadingSection>
            <div className="lg:grid grid-cols-2 gap-8">
                {/* <div className="flex items-center justify-center h-[600px] w-full bg-white">
                    <WorkflowScene />
                </div> */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.15,
                            type: 'spring',
                            stiffness: 120,
                            damping: 20,
                        },
                    }}
                    className="size-full flex items-center justify-center"
                >
                    <Image
                        src="https://res.cloudinary.com/dqx1guyc0/image/upload/v1754214620/Cadsquad/workflow_gh3ixj.png"
                        alt="Workflow"
                        preview={{
                            imageRender: (child) => {
                                return <div className="bg-white">{child}</div>
                            },
                        }}
                    />
                </MotionDiv>
                <div>
                    <Accordion defaultSelectedKeys={['0']}>
                        {WORKFLOW.map((item, idx) => {
                            return (
                                <AccordionItem
                                    key={idx}
                                    aria-label={item.title}
                                    title={
                                        <MotionDiv
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    delay: (idx + 1) * 0.1,
                                                    type: 'spring',
                                                    stiffness: 120,
                                                    damping: 20,
                                                },
                                            }}
                                            className="flex items-center justify-start gap-5 w-full cursor-pointer"
                                        >
                                            <div
                                                className="p-4 rounded-full h-full aspect-square flex items-center justify-center"
                                                style={{
                                                    backgroundColor: item.color,
                                                }}
                                            >
                                                <p className="text-base lg:text-xl font-bold text-white">
                                                    {item.stepNumber}
                                                </p>
                                            </div>
                                            <p className="text-base lg:text-lg font-semibold capitalize">
                                                {item.title}
                                            </p>
                                        </MotionDiv>
                                    }
                                >
                                    <p className="pb-2 text-sm lg:text-base tracking-wide">
                                        {item.description}
                                    </p>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
