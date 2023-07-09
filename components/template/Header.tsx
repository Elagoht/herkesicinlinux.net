"use client"
import { FC } from "react"
import { Contact, FileText, GraduationCap, Package, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header: FC = () => {
  const pathname = usePathname()

  return <header>
    <div>
      <div>
        <Link href="/"><Image unoptimized width={76} height={76} src="/linuxforeveryone.svg" alt="amblem" /></Link>
        <div> Herkes İçin Linux</div>
      </div>
      <nav>
        <Link className={pathname.split("/")[1] == "makaleler" ? "active" : undefined} href="/makaleler"><FileText /></Link>
        <Link className={pathname.split("/")[1] == "makaleler" ? "active" : undefined} href="/makaleler">Makaleler</Link>
        <Link className={pathname.split("/")[1] == "videoler" ? "active" : undefined} href="/videolar"><Youtube /></Link>
        <Link className={pathname.split("/")[1] == "videoler" ? "active" : undefined} href="/videolar" > Videolar</Link>
        <Link className={pathname.split("/")[1] == "kurslar" ? "active" : undefined} href="/kurslar"><GraduationCap /></Link>
        <Link className={pathname.split("/")[1] == "kurslar" ? "active" : undefined} href="/kurslar">Kurslar</Link>
        <Link className={pathname.split("/")[1] == "projeler" ? "active" : undefined} href="/projeler"><Package /></Link>
        <Link className={pathname.split("/")[1] == "projeler" ? "active" : undefined} href="/projeler">Projeler</Link>
        <Link className={pathname.split("/")[1] == "iletişim" ? "active" : undefined} href="/iletişim"><Contact /></Link>
        <Link className={pathname.split("/")[1] == "iletişim" ? "active" : undefined} href="/iletisim">İletişim</Link>
      </nav >
    </div >
  </header >
}

export default Header