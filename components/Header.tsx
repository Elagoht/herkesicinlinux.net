import { ClipboardList, Compass, Contact, FileText, GraduationCap, Newspaper, Package, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Header: React.FC = () => {
  return <header>
    <div>
      <div>
        <Link href="/"><Image unoptimized width={76} height={76} src="/linuxforeveryone.svg" alt="amblem" /></Link>
        <div> Herkes İçin Linux</div>
      </div>
      <nav>
        <Link href="/makaleler/icerikler"><FileText /></Link>
        <Link href="/makaleler">Makaleler</Link>
        <Link href="/videolar"><Youtube /></Link>
        <Link href="/videolar">Videolar</Link>
        <Link href="/Kurslar"><GraduationCap /></Link>
        <Link href="/Kurslar">Kurslar</Link>
        <Link href="/Projeler"><Package /></Link>
        <Link href="/Projeler">Projeler</Link>
        <Link href="/İletişim"><Contact /></Link>
        <Link href="/İletişim">İletişim</Link>
      </nav>
    </div>
  </header >
}

export default Header