import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export type AsideLink = {
  name: string
  link: string
  icon: string
}
type AsideProps = {
  title: string
  links: AsideLink[]
}

const AsideNav: FC<AsideProps> = ({ title, links }) => {
  return <nav>
    <span>{title}</span>
    {links.map((link, i) => (
      <Link key={i} href={link.link}>
        <div>
          <Image width={48} height={48} src={`/uploads/blogs/covers/${link.icon}`} alt={link.name} />
          <span>{link.name}</span>
        </div>
      </Link>
    ))}
  </nav >
}

export default AsideNav