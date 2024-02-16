import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <div className="py-16">
      <h2 className="max-w-[400px] mx-auto font-bold text-xl mb-2 text-slate-600">Get in touch</h2>
      <p className="mb-8 max-w-[400px] mx-auto text-slate-600">Looking for a photographer or videographer? Then send us a message, we&apos;re always happy to discuss any projects and how we could be of service.</p>
      <ContactForm />
    </div>
  )
}
