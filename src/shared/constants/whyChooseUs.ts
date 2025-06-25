import { StaticImageData } from 'next/image'

import ExperienceIco from '@/assets/gifs/best-customer-experience.gif'
import SatisfactionIco from '@/assets/gifs/customer-satisfaction.gif'
import ServiceIco from '@/assets/gifs/customer-service.gif'
import DeliveryIco from '@/assets/gifs/delivery-truck.gif'
import DollarIco from '@/assets/gifs/dollar.gif'
import InnovationIco from '@/assets/gifs/innovation.gif'
import LearningIco from '@/assets/gifs/learning.gif'
import PremiumIco from '@/assets/gifs/premium.gif'

export type Reason = {
    title: string
    description: string
    icon: StaticImageData
}
export const WHY_CHOOSE_US: Reason[] = [
    {
        title: 'Experience and Expertise',
        description:
            "CADSQUAD boasts a wealth of experience in 3D modeling and rendering, particularly in the field of mechanical. Our team's deep expertise ensures high-quality results.",
        icon: ExperienceIco,
    },
    {
        title: 'Comprehensive Services',
        description:
            'We offer a wide range of services, including 3D modeling, 2D drawings, steel structure, simulation, rendering, 3D printing. Our versatility caters to various client needs.',
        icon: ServiceIco,
    },
    {
        title: 'Quality Assurance',
        description:
            'CADSQUAD is committed to delivering top-notch results with a focus on precision and attention to detail. Our quality assurance processes guarantee excellence in every project we undertake',
        icon: PremiumIco,
    },
    {
        title: 'Creative Solutions',
        description:
            'Our team of 3D artists is dedicated to bringing your ideas to life with creativity and innovation, turning concepts into stunning visual representations that make a lasting impact.',
        icon: InnovationIco,
    },
    {
        title: 'Cutting-Edge Technology',
        description:
            'We leverage the latest software and hardware tools to stay at the forefront of the industry, ensuring efficiency and accuracy in all our projects.',
        icon: LearningIco,
    },
    {
        title: 'Timely Delivery',
        description:
            'CADSQUAD understands the importance of deadlines. We are dedicated to delivering projects on time, helping you stay on track with your project schedules.',
        icon: DeliveryIco,
    },
    {
        title: 'Client-Centric Approach',
        description:
            'We prioritize open communication with our clients, ensuring that your vision and feedback are incorporated into the design process to achieve your desired outcomes.',
        icon: SatisfactionIco,
    },
    {
        title: 'Competitive Pricing',
        description:
            'Despite our high-quality services, CADSQUAD offers competitive pricing options, making professional 3D modeling, rendering, and design services accessible to a broad range of clients.',
        icon: DollarIco,
    },
]
