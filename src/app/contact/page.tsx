import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <h2 className="text-center font-bold text-xl mb-2">Contact Us</h2>
      <p className="mb-8 max-w-[400px] mx-auto">Looking for a photographer or videographer? Then send us a message, we&apos;re always happy to discuss any projects and how we could be of service.</p>
      <ContactForm />
    </div>
  )
}
