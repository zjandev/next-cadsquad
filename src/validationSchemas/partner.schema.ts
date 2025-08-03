import * as yup from 'yup'

export const PartnerSchema = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    imageUrl: yup.string(),
    order: yup.string(),
})
export type Partner = yup.InferType<typeof PartnerSchema>
