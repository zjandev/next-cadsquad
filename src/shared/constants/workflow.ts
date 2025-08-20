export const WORKFLOW = [
    {
        stepNumber: 1,
        title: 'Idea reception',
        description:
            "We begin by receiving your concept and understanding your vision. Our team collaborates to grasp your project's objectives and unique requirements.",
        color: '#f7ae0c',
    },
    {
        stepNumber: 2,
        title: '3D Modeling and Technical Drawings',
        description:
            'Once we have a clear understanding of your idea, our experts proceed to create detailed 3D models and technical drawings. These serve as the foundation for the design and engineering aspects of the project.',
        color: '#7de057',
    },
    {
        stepNumber: 3,
        title: 'Inspection and Handover',
        description:
            'After the 3D models and technical drawings are complete, we conduct thorough quality checks to ensure that all aspects meet the specified standards. Upon successful validation, we deliver the project to you.',
        color: '#209bfa',
    },
    {
        stepNumber: 4,
        title: 'Production',
        description:
            'Depending on the nature of your project, this step can involve the actual production, fabrication, or realization of the design. We tailor our production processes to align with your specific project requirements and goals.',
        color: '#b46fea',
    },
    {
        stepNumber: 5,
        title: 'Acceptance Testing',
        description:
            "The final phase involves acceptance testing, which is performed based on your project's individual needs and criteria. We work closely with you to conduct the necessary testing and ensure that the end product aligns with your expectations.",
        color: '#de254a',
    },
]

export const VI_WORKFLOW = [
    {
        stepNumber: 1,
        title: 'Tiếp nhận ý tưởng',
        description:
            'Chúng tôi bắt đầu bằng việc tiếp nhận ý tưởng và tìm hiểu tầm nhìn của bạn. Đội ngũ của chúng tôi sẽ phối hợp để nắm rõ mục tiêu và các yêu cầu đặc thù của dự án.',
        color: '#f7ae0c',
    },
    {
        stepNumber: 2,
        title: 'Mô hình 3D và Bản vẽ kỹ thuật',
        description:
            'Khi đã hiểu rõ ý tưởng của bạn, các chuyên gia của chúng tôi sẽ tiến hành tạo mô hình 3D chi tiết và bản vẽ kỹ thuật. Đây là nền tảng cho các yếu tố thiết kế và kỹ thuật của dự án.',
        color: '#7de057',
    },
    {
        stepNumber: 3,
        title: 'Kiểm tra và Bàn giao',
        description:
            'Sau khi hoàn thành mô hình 3D và bản vẽ kỹ thuật, chúng tôi tiến hành kiểm tra chất lượng kỹ lưỡng để đảm bảo mọi yếu tố đạt tiêu chuẩn. Sau khi xác nhận đạt yêu cầu, chúng tôi sẽ bàn giao dự án cho bạn.',
        color: '#209bfa',
    },
    {
        stepNumber: 4,
        title: 'Sản xuất',
        description:
            'Tùy thuộc vào tính chất dự án, bước này có thể bao gồm sản xuất, gia công hoặc hiện thực hóa thiết kế. Chúng tôi tùy chỉnh quy trình sản xuất để phù hợp với yêu cầu và mục tiêu cụ thể của bạn.',
        color: '#b46fea',
    },
    {
        stepNumber: 5,
        title: 'Kiểm tra nghiệm thu',
        description:
            'Giai đoạn cuối cùng là kiểm tra nghiệm thu, được thực hiện dựa trên nhu cầu và tiêu chí riêng của dự án. Chúng tôi phối hợp chặt chẽ với bạn để tiến hành các bước kiểm tra cần thiết, đảm bảo sản phẩm cuối cùng đáp ứng đúng kỳ vọng.',
        color: '#de254a',
    },
]

export type WorkflowItem = (typeof WORKFLOW)[0]
