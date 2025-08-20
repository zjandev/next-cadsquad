import * as yup from 'yup'

export const ServiceSchema = yup.object().shape({
    id: yup.number(),
    order: yup.number(),
    name: yup.string(),
    slug: yup.string(),
    description: yup.string(),
    textDescription: yup.string(),
    shortDescription: yup.string(),
    thumbnail: yup.string(),
    horizontalThumbnail: yup.string(),
    images: yup.array(yup.string().required()),
    content: yup.string(),
})
export type Service = yup.InferType<typeof ServiceSchema>
