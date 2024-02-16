import {MapPinIcon} from "@heroicons/react/24/solid"
import {EnvelopeIcon} from "@heroicons/react/24/solid"
import {PhoneIcon} from "@heroicons/react/24/solid"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="p-8 bg-slate-950">
      <div className="text-white flex flex-col md:flex-row gap-8 ">
        <div className="">
          <h3 className="font-bold mb-4">Contact</h3>
          <div className="grid grid-cols-[30px_auto] mb-4">
            <MapPinIcon className="w-5 h-5 mr-3" />
            <p className="text-sm">The Union Building, 51-59 Rose Lane, Norwich, NR1 1BY</p>
          </div>
          <div className="grid grid-cols-[30px_auto] mb-4">
            <EnvelopeIcon className="w-5 h-5 mr-2"/>
            <p className="text-sm">info@christopherwilliamphotography.co.uk</p>
          </div>
          <div className="grid grid-cols-[30px_auto] mb-4">
            <PhoneIcon className="w-5 h-5"/>
            <p className="text-sm">01603 511636</p>
          </div>
        </div>

        <div className="">
          <h3 className="font-bold mb-4">Links</h3>
          <Link href="/" className="block text-sm mb-4 hover:text-sky-500">Home</Link>
          <Link href="/photography" className="block text-sm mb-4 hover:text-sky-500">Photography Services</Link>
          <Link href="/about" className="block text-sm mb-4 hover:text-sky-500">About</Link>
          <Link href="/contact" className="block text-sm mb-4 hover:text-sky-500">Contact</Link>
        </div>

        <div>
          <h3 className="font-bold mb-4">Social Media</h3>
          <div className="flex gap-2">
          <Link href="/">
            <FaFacebookSquare className="w-8 h-8 hover:text-sky-500" />
          </Link>
          <Link href="">
            <FaInstagramSquare className="w-8 h-8 hover:text-sky-500" />
          </Link>
          <Link href="">
            <FaLinkedin className="w-8 h-8 hover:text-sky-500" />
          </Link>
          <Link href="">
          
          </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
