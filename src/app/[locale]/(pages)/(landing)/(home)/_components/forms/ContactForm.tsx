'use client'

import { Button, Input, Textarea } from '@heroui/react'
import { useFormik } from 'formik'
import { useTranslations } from 'next-intl'

import { ContactSchema } from '@/validationSchemas/contact.schema'

export default function ContactForm() {
    const tButton = useTranslations('button')

    const formik = useFormik({
        validationSchema: ContactSchema,
        initialValues: {
            fullName: '',
            email: '',
            message: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className="size-full space-y-5">
            <Input id="fullName" name="fullName" label="Full name" />
            <Input id="email" name="email" label="Email" />
            <Textarea id="message" name="message" label="Message" />
            <div className="w-full grid place-items-center">
                <Button className="px-10 py-6" color="primary">
                    {tButton('sendMessage')}
                </Button>
            </div>
        </form>
    )
}
