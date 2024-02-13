import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Photography Services",
  description: "Photography Services from Christopher William Photography"
}

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <main className="min-h-screen px-8">
      {children}
    </main>
  )
}