'use client'

import React from 'react'

import { Button } from '@heroui/react'
import { Image as Img } from 'antd'
import Image from 'next/image'

import ClientPartnerImg from '@/assets/images/client-partnert-bg.webp'
import { PARTNER } from '@/lib/seeds/partner'

export default function ClientPartner() {
    return (
        <section className="relative w-full overflow-hidden min-h-[780px] pt-24">
            <div className="relative w-full min-h-[780px]">
                <Image
                    src={ClientPartnerImg}
                    alt="Image"
                    fill={true}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                <div className="absolute w-full top-0 left-0">
                    <div className="container">
                        <h2 className="mt-16 text-white text-center uppercase font-semibold text-xl">
                            Khách hàng và đối tác
                        </h2>

                        <div className="mt-10 flex items-center justify-center gap-6">
                            <Button
                                className="rounded-full px-6 font-medium uppercase border-white text-white"
                                variant="ghost"
                            >
                                Khách hàng
                            </Button>
                            <Button
                                className="rounded-full px-6 font-medium uppercase border-white text-white bg-danger"
                                variant="solid"
                            >
                                Đối tác
                            </Button>
                        </div>
                        <div className="mt-10 grid grid-cols-5 gap-10">
                            {PARTNER.map((pNer, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="w-full aspect-square bg-white grid place-items-center rounded-xl p-2"
                                    >
                                        <Img
                                            src={pNer.imageUrl}
                                            alt="Partner Logo"
                                            preview={false}
                                            className="size-full"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
