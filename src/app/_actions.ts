'use server'

import {z} from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schema'
import ContactFormEmail from '@/components/email-template'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

const emailAddress = process.env.EMAIL as string

export async function sendEmail(data: ContactFormInputs){
  const result = ContactFormSchema.safeParse(data)

  if(result.success){
    const {name, email, message} = result.data

    try {
      const data = await resend.emails.send({
        from: "contact@christopherwilliamphotography.co.uk",
        to: [emailAddress],
        reply_to: email,
        subject: "Contact form submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({name, email, message})
      })
      return {success: true, data}
    } catch(error){
      return {success: false, error}
    }
  }

  if(result.error){
    return {success: false, error: result.error.format()}
  }
}