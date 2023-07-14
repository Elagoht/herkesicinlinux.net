import { allDocs } from '@/.contentlayer/generated'
import BlogBox from '@/components/BlogBox'
import { FC } from 'react'


const page: FC = () => {

  return <BlogBox title="Tüm İçerikler" docs={allDocs.sort((a, b) => b.date - a.date)} />
}
export default page