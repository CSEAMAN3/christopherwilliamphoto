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
    <>
      {/* burger bars */}
      <div onClick={()=>setNavToggle(!navToggle)} className="cursor-pointer group">
        <div className="group-hover:bg-orange-500 w-8 h-[2px] bg-black rounded-full mb-2"></div>
        <div className="group-hover:bg-orange-500 w-8 h-[2px] bg-black rounded-full mb-2"></div>
        <div className="group-hover:bg-orange-500 w-8 h-[2px] bg-black rounded-full"></div>
      </div>
      {/* burger menu */}
      <div className={`${classes} w-screen h-full bg-orange-500 absolute top-0 left-0`}>
        {/* close menu x */}
        <div onClick={()=>setNavToggle(!navToggle)} className="w-8 h-8 absolute top-7 right-8 cursor-pointer group">
          <div className="group-hover:bg-sky-800 w-8 h-[2px] bg-white rounded-full rotate-45 absolute top-4"></div>
          <div className="group-hover:bg-sky-800 w-8 h-[2px] bg-white rounded-full -rotate-45 absolute top-4"></div>
          </div>
          <nav className="px-8 mt-24">
            <ul>
              {headerNav.map(link => {
                const isActive = pathname === link.href
                return (
                  <li key={link.title} className="mb-8 text-white">
                    <Link 
                      href={link.href} 
                      className={`${isActive ? "text-sky-800 hover:text-sky-800" : "hover:text-sky-600"} text-xl font-bold`}
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

    </>
  )
}
