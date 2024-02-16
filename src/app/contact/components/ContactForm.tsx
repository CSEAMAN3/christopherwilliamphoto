'use client'

import {useForm, SubmitHandler} from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { ContactFormSchema } from "@/lib/schema"
import { sendEmail } from "@/app/_actions"

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

  const processForm : SubmitHandler<ContactFormInputs> = async (data) => {
    
    const result = await sendEmail(data)

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

  return (
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

      <button
        disabled={isSubmitting}
        className={`${isSubmitting ? "bg-slate-950" : "bg-slate-600"} rounded-lg border border-slate-600 bg-slate-600 py-2.5 font-medium text-stone-200 w-full hover:bg-slate-950`}
      >
        {isSubmitting ? "sending..." : "send"}
      </button>

    </form>
  )
}
