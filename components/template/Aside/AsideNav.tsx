import { getCategoryIcon } from '@/utils/category'
import Link from 'next/link'
import { FC } from 'react'

export type AsideLink = {
  name: string
  link: string
  type: string
}
type AsideProps = {
  title: string
  links: AsideLink[]
}

const AsideNav: FC<AsideProps> = ({ title, links }) => {
  return <nav>
    <span>{title}</span>
    {links.map((link, i) => (
      <Link key={i} href={"/makale/" + link.link}>
        <div>
          {getCategoryIcon(link.type, 36)}
          <span>{link.name}</span>
        </div>
      </Link>
    ))}
  </nav >
}

export default AsideNav