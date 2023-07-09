"use client"
import { FC } from "react"
import { Contact, FileText, GraduationCap, Home, Package, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header: FC = () => {
  const pathname = usePathname()

  return <header>
    <div>
      <Link href="/">
        <Image width={48} height={48} src="/linuxforeveryone.svg" alt="amblem" />
        <div>Herkes İçin Linux</div>
      </Link>
      <nav>
        <Link className={pathname.split("/")[1] == "" ? "active" : undefined} href="/"><Home /></Link>
        <Link className="hidden" href="/"></Link>
        <Link className={pathname.split("/")[1] == "makaleler" ? "active" : undefined} href="/makaleler"><FileText /></Link>
        <Link className={pathname.split("/")[1] == "makaleler" ? "active" : undefined} href="/makaleler">Makaleler</Link>
        <Link className={pathname.split("/")[1] == "videoler" ? "active" : undefined} href="/videolar"><Youtube /></Link>
        <Link className={pathname.split("/")[1] == "videoler" ? "active" : undefined} href="/videolar" > Videolar</Link>
        <Link className={pathname.split("/")[1] == "kurslar" ? "active" : undefined} href="/kurslar"><GraduationCap /></Link>
        <Link className={pathname.split("/")[1] == "kurslar" ? "active" : undefined} href="/kurslar">Kurslar</Link>
        <Link className={pathname.split("/")[1] == "projeler" ? "active" : undefined} href="/projeler"><Package /></Link>
        <Link className={pathname.split("/")[1] == "projeler" ? "active" : undefined} href="/projeler">Projeler</Link>
      </nav >
    </div >
  </header >
}

export default Header