import { allDocs } from '@/.contentlayer/generated'
import BlogBox from '@/components/BlogBox'
import Categories from '@/components/Categories'

const page = () => {
  console.log(allDocs)

  return <BlogBox title="Tüm İçerikler" docs={[...allDocs].sort((a, b) => b.date - a.date)}>
    <Categories />
  </BlogBox>
}
export default page