import {z} from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().min(1, {message: 'name is required'}),
  email: z.string().min(3, {message: 'email is required'}).email('invalid email'),
  message: z
    .string()
    .min(10, {message: 'message is required with a minimum of 10 characters'}),
})