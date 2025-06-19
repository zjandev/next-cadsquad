import * as yup from 'yup'

export const ContactSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required(),
})
export type Contact = yup.InferType<typeof ContactSchema>
