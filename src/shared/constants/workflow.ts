export const WORKFLOW = [
    {
        stepNumber: 1,
        title: 'Idea reception',
        description:
            "We begin by receiving your concept and understanding your vision. Our team collaborates to grasp your project's objectives and unique requirements.",
        color: '#ef4444',
    },
    {
        stepNumber: 2,
        title: '3D Modeling and Technical Drawings',
        description:
            'Once we have a clear understanding of your idea, our experts proceed to create detailed 3D models and technical drawings. These serve as the foundation for the design and engineering aspects of the project.',
        color: '#f59e0b',
    },
    {
        stepNumber: 3,
        title: 'Inspection and Handover',
        description:
            'After the 3D models and technical drawings are complete, we conduct thorough quality checks to ensure that all aspects meet the specified standards. Upon successful validation, we deliver the project to you.',
        color: '#10b981',
    },
    {
        stepNumber: 4,
        title: 'Production',
        description:
            'Depending on the nature of your project, this step can involve the actual production, fabrication, or realization of the design. We tailor our production processes to align with your specific project requirements and goals.',
        color: '#3b82f6',
    },
    {
        stepNumber: 5,
        title: 'Acceptance Testing',
        description:
            "The final phase involves acceptance testing, which is performed based on your project's individual needs and criteria. We work closely with you to conduct the necessary testing and ensure that the end product aligns with your expectations.",
        color: '#8b5cf6',
    },
]

export type WorkflowItem = (typeof WORKFLOW)[0]
