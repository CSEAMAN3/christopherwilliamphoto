'use client'

import {useForm, SubmitHandler} from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { ContactFormSchema } from "@/lib/schema"
import { sendEmail } from "@/app/_actions"

// Importing Script for cloudflare script
import Script from "next/script"
import { useEffect } from "react"

const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY as string

export type ContactFormInputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting}
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  useEffect(() => {
    reset(); // Resets the form fields
    // Any additional logic to reset/reinitialize the Turnstile widget
  },[reset]);

  const processForm : SubmitHandler<ContactFormInputs> = async (data, event) => {

    // Create a new FormData instance from the form
    const formData = new FormData(event?.target as HTMLFormElement);

    // Retrieve the Turnstile token from the FormData
    const turnstileToken = formData.get('cf-turnstile-response')

  if (turnstileToken !== null) {
        const extendedData: ExtendedContactFormInputs = {
            ...data,
            turnstileToken: turnstileToken as string // Asserting turnstileToken as string here.
        };
    
    const result = await sendEmail(extendedData)

    if(result?.success){
      console.log({data: result.data})
      toast.success('email sent')
      reset()
      return
    }
    // toast error
    console.log(result?.error)
    toast.error('something went wrong')
  }
}


  return (
    <>
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
    <form
      onSubmit={handleSubmit(processForm)}
      className="max-w-[400px] mx-auto text-slate-600"
    >

      <div className="mb-8">
        <label htmlFor="name" className="font-bold">Your name</label>
        <input 
          type="text"
          id="name"
          placeholder="Christopher William"
          className="w-full rounded-lg border border-grey-300 border-1 p-2"
          {...register('name')}
        />
        {errors.name?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>


      <div className="mb-8">
        <label htmlFor="email" className="font-bold">Your email</label>
        <input 
          type="text"
          id="email"
          placeholder="name@email.com"
          className="w-full rounded-lg border border-grey-300 border-1 p-2"
          {...register('email')}
        />
        {errors.email?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>


      <div className="mb-4">
        <label htmlFor="message" className="font-bold">Your message</label>
        <textarea 
          id="message"
          placeholder="Hi, I would like to enquire about your photography services..."
          cols={5} 
          rows={10} 
          className="w-full rounded-lg border border-gray-300 border-1 p-2"
          {...register('message')}
        />
        {errors.message?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div 
        className="cf-turnstile mb-8" 
        data-theme="light" 
        data-sitekey={siteKey}
      ></div>
      
      <button
        disabled={isSubmitting}
        className={`${isSubmitting ? "bg-slate-950" : "bg-slate-600"} rounded-lg border border-slate-600 bg-slate-600 py-2.5 font-medium text-stone-200 w-full hover:bg-slate-950`}
      >
        {isSubmitting ? "sending..." : "send"}
      </button>

    </form>
    </>
  )
}
