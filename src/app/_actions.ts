'use server'

import {z} from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schema'
import ContactFormEmail from '@/components/email-template'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

const emailAddress = process.env.EMAIL as string

// Extend ContactFormInputs to include the turnstileToken
type ExtendedContactFormInputs = ContactFormInputs & {
  turnstileToken: string;
};

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.CLOUDFLARE_SECRET_KEY; // Make sure to set this in your environment
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`
  });
  const verificationResult = await response.json();
  console.log("tokenResponse: ", verificationResult)
  return verificationResult.success;
}


export async function sendEmail(data: ExtendedContactFormInputs){
  console.log(data)
  const result = ContactFormSchema.safeParse(data)

  // Verify the Turnstile token
  const isTokenValid = await verifyTurnstileToken(data.turnstileToken);
  if (!isTokenValid) {
    console.error('Turnstile verification failed');
    return { success: false, error: 'Turnstile verification failed' };
  }

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