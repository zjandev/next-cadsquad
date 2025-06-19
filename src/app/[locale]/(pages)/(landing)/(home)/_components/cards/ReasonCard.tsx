import Image from 'next/image'

import { Reason } from '@/app/shared/constants/whyChooseUs'

type Props = {
    data: Reason
}
export default function ReasonCard({ data }: Props) {
    return (
        <div className="group p-4 border border-solid border-gray-300 rounded-xl hover:border-text dark:hover:border-primary hover:shadow-xl duration-300">
            <Image
                src={data.icon}
                alt={data.title}
                title={data.title}
                loading="eager"
                width="70"
                height="70"
                className="mx-auto my-6 rounded-2xl"
            />
            <p className="text-center font-bold text-lg">{data.title}</p>
            <p className="mt-2 text-sm leading-normal group-hover:text-text dark:group-hover:text-primary-900 opacity-70 text-center">
                {data.description}
            </p>
        </div>
    )
}
