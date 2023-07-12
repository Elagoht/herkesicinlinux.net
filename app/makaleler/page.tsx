import { allDocs } from '@/.contentlayer/generated'
import BlogBox from '@/components/BlogBox'

const page = () => {

  return <BlogBox title="Tüm İçerikler" docs={[...allDocs].sort((a, b) => b.date - a.date)} />
}
export default page