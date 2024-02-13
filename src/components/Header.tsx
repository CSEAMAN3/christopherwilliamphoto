import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="px-8 mb-8">
      <div className="border-b border-black py-8 flex justify-between items-center">
        <h1>
          <Link href="/">Christopher William Photography</Link>
        </h1>
        {/* desktop nav */}
        <div className="hidden md:block">
          <DesktopNav />
        </div>
        {/* mobile nav */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
