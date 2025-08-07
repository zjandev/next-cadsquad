import * as yup from 'yup'

export const PostSchema = yup.object().shape({
    id: yup.string(),
    title: yup.string(),
    slug: yup.string(),
    shortDescription: yup.string().nullable(),
    keywords: yup.array(yup.string().required()).nullable(),
    thumbnailUrl: yup.string(),
    content: yup.string(),
    tags: yup.array(yup.string().required()),
    countView: yup.number(),
    createdAt: yup.string(),
    updatedAt: yup.string(),
})
export type Post = yup.InferType<typeof PostSchema>
