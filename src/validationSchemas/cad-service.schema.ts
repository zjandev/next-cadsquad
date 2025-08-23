import * as yup from 'yup'

export const CadServiceSchema = yup.object().shape({
    id: yup.number(),
    order: yup.number(),
    title: yup.object({
        original: yup.string(),
        vi: yup.string(),
    }),
    slug: yup.string(),
    description: yup.object({
        original: yup.string(),
        vi: yup.string(),
    }),
    plainDescription: yup.object({
        original: yup.string(),
        vi: yup.string(),
    }),
    shortDescription: yup.object({
        original: yup.string(),
        vi: yup.string(),
    }),
    thumbnail: yup.object({
        vertical: yup.string(),
        horizontal: yup.string(),
        verticalType: yup.string(),
        horizontalType: yup.string(),
    }),
    images: yup.array(yup.string().required()),
    content: yup.object({
        original: yup.string(),
        vi: yup.string(),
    }),
})
export type CadService = yup.InferType<typeof CadServiceSchema>
