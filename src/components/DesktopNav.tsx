'use client'

import { headerNav } from "@/lib/navigations";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname()
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4">
        {headerNav.filter(link => link.href !== "/").map(link => {
          const isActive = pathname === link.href
          return (
            <li key={link.href}>
              <Link href={link.href} className={`${isActive ? "text-orange-500 hover:text-orange-500" : "hover:text-sky-500"}`}>{link.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
