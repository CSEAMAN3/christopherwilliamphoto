'use client'

import { useState } from "react"
import { usePathname } from "next/navigation"
import { headerNav } from "@/lib/navigations"
import Link from "next/link"

export default function MobileNav() {

  const pathname = usePathname()
  const [navToggle, setNavToggle] = useState(false)

  const classes = navToggle ? "block" : "hidden"

  return (
    <div className="md:hidden">
      {/* burger bars */}
      <div onClick={()=>setNavToggle(!navToggle)} className="cursor-pointer group">
        <div className="group-hover:bg-sky-500 w-8 h-[2px] bg-stone-200 rounded-full mb-2"></div>
        <div className="group-hover:bg-sky-500 w-8 h-[2px] bg-stone-200 rounded-full mb-2"></div>
        <div className="group-hover:bg-sky-500 w-8 h-[2px] bg-stone-200 rounded-full"></div>
      </div>
      {/* burger menu */}
      <div className={`${classes} z-10 w-screen h-full bg-slate-950 absolute top-0 left-0`}>
        {/* close menu x */}
        <div onClick={()=>setNavToggle(!navToggle)} className="w-8 h-8 absolute top-7 right-8 cursor-pointer group">
          <div className="group-hover:bg-sky-500 w-8 h-[2px] bg-stone-200 rounded-full rotate-45 absolute top-4"></div>
          <div className="group-hover:bg-sky-500 w-8 h-[2px] bg-stone-200 rounded-full -rotate-45 absolute top-4"></div>
          </div>
          <nav className="px-8 mt-24">
            <ul>
              {headerNav.map(link => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href} className="mb-8 text-stone-200">
                    <Link 
                      href={link.href} 
                      className={`${isActive ? "text-sky-500 hover:text-sky-500" : "hover:text-sky-500"} text-xl font-bold`}
                      onClick={()=>setNavToggle(!navToggle)}
                    >
                        {link.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
      </div>

    </div>
  )
}
