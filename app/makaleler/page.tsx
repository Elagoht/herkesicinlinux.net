import { allDocs } from '@/.contentlayer/generated'
import BlogBox from '@/components/BlogBox'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title: "Makaleler",
  description: "Makaleler bu sayfada listelenmektedir."
}

const page: FC = () => {

  return <BlogBox title="Tüm İçerikler" docs={allDocs.sort((a, b) => b.date - a.date)} />
}
export default page