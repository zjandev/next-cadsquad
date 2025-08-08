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

export const VI_WHY_CHOOSE_US: Reason[] = [
    {
        title: 'Kinh nghiệm và Chuyên môn',
        description:
            'CADSQUAD sở hữu bề dày kinh nghiệm trong lĩnh vực mô hình hóa và dựng hình 3D, đặc biệt trong ngành cơ khí. Chuyên môn sâu của đội ngũ chúng tôi đảm bảo mang lại kết quả chất lượng cao.',
        icon: ExperienceIco,
    },
    {
        title: 'Dịch vụ Toàn diện',
        description:
            'Chúng tôi cung cấp đa dạng dịch vụ, bao gồm mô hình 3D, bản vẽ 2D, kết cấu thép, mô phỏng, dựng hình, in 3D. Sự đa dạng này đáp ứng nhiều nhu cầu khác nhau của khách hàng.',
        icon: ServiceIco,
    },
    {
        title: 'Đảm bảo Chất lượng',
        description:
            'CADSQUAD cam kết mang lại kết quả xuất sắc với sự chính xác và chú trọng từng chi tiết. Quy trình kiểm soát chất lượng của chúng tôi đảm bảo sự hoàn hảo trong mọi dự án.',
        icon: PremiumIco,
    },
    {
        title: 'Giải pháp Sáng tạo',
        description:
            'Đội ngũ nghệ sĩ 3D của chúng tôi tận tâm biến ý tưởng của bạn thành hiện thực với sự sáng tạo và đổi mới, biến các khái niệm thành những hình ảnh ấn tượng để lại dấu ấn lâu dài.',
        icon: InnovationIco,
    },
    {
        title: 'Công nghệ Hiện đại',
        description:
            'Chúng tôi áp dụng các công cụ phần mềm và phần cứng mới nhất để luôn dẫn đầu trong ngành, đảm bảo hiệu quả và độ chính xác cho mọi dự án.',
        icon: LearningIco,
    },
    {
        title: 'Giao hàng Đúng hạn',
        description:
            'CADSQUAD hiểu rõ tầm quan trọng của tiến độ. Chúng tôi luôn nỗ lực bàn giao dự án đúng thời gian, giúp bạn duy trì lịch trình công việc.',
        icon: DeliveryIco,
    },
    {
        title: 'Lấy Khách hàng làm Trung tâm',
        description:
            'Chúng tôi ưu tiên giao tiếp cởi mở với khách hàng, đảm bảo tầm nhìn và phản hồi của bạn được tích hợp vào quá trình thiết kế để đạt kết quả mong muốn.',
        icon: SatisfactionIco,
    },
    {
        title: 'Giá cả Cạnh tranh',
        description:
            'Bên cạnh chất lượng dịch vụ cao, CADSQUAD vẫn mang đến mức giá cạnh tranh, giúp dịch vụ mô hình 3D, dựng hình và thiết kế chuyên nghiệp trở nên dễ tiếp cận cho nhiều khách hàng.',
        icon: DollarIco,
    },
]
