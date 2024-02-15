import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Image from 'next/image'
import Logo from '../../public/images/cwplogowhite.svg'

export default function Header() {
  return (
    <header className="px-8 mb-8 bg-slate-950">
      <div className="py-4 flex justify-between items-center">
        <h1>
          <Link href="/">
            <Image 
              src={Logo}
              alt="christopher william photography logo"
              width="150"
              height="150"
            />
          </Link>
        </h1>
        {/* desktop nav */}
          <DesktopNav />
        {/* mobile nav */}
          <MobileNav />
      </div>
    </header>
  )
}
