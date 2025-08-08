'use client'

import { Image } from 'antd'
import { MoveUpRight } from 'lucide-react'
import { Variants } from 'motion'

import { Link } from '@/i18n/navigation'
import { MotionButton, MotionDiv, MotionP } from '@/lib/motion'
import { Service } from '@/validationSchemas/service.schema'

const buttonTextVariants: Variants = {
    init: {
        display: 'none',
        transition: {
            duration: 0.05,
        },
    },
    animate: {
        display: 'none',
        transition: {
            duration: 0.05,
        },
    },
    hover: {
        display: 'block',
        transition: {
            duration: 0.05,
        },
    },
}

export default function ServiceCard({ data }: { data: Service }) {
    return (
        <div key={data.id} title={data.name} className="px-3">
            <Link href={`/cad-services/${data.slug}`} className="block">
                <MotionDiv
                    initial="init"
                    animate="animate"
                    whileHover="hover"
                    className="relative w-full aspect-video md:aspect-[1/1.3] rounded-xl border border-border overflow-hidden"
                >
                    <div className="group size-full">
                        <Image
                            src={data?.thumbnail}
                            alt="Service image"
                            title={data.name}
                            rootClassName="!block size-full"
                            className="!block !size-full object-cover rounded-xl brightness-50 group-hover:scale-125 transition duration-250"
                            preview={false}
                        />
                    </div>
                    <div className="py-3 px-5 absolute top-1">
                        <p className="text-white text-lg font-semibold font-saira max-w-[90%]">
                            {data.name}
                        </p>
                    </div>
                    <Link href={`/cad-services/${data.slug}`} className="block">
                        <MotionButton className="absolute right-3 bottom-4 text-white rounded-full backdrop-blur-xs border-1.5 border-border px-4 py-3 flex items-center justify-center gap-2 cursor-pointer hover:backdrop-blur-3xl transition">
                            <MoveUpRight size={16} />
                            <MotionP
                                variants={buttonTextVariants}
                                className="leading-none text-base"
                            >
                                Explorer
                            </MotionP>
                        </MotionButton>
                    </Link>
                </MotionDiv>
            </Link>
        </div>
    )
}
