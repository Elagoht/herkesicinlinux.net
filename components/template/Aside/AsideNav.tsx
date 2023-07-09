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
          <div style={{ backgroundImage: `url("${link.icon}")` }}></div>
          <span>{link.name}</span>
        </div>
      </Link>
    ))}
  </nav>
}

export default AsideNav