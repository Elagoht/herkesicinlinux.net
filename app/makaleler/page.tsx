import { allDocs } from '@/.contentlayer/generated'
import BlogBox from '@/components/BlogBox'
import { getAllCategories } from '@/utils/category'
import Categories from '@/components/Categories'

const page = () => {
  const categories = getAllCategories()

  return <BlogBox title="Tüm İçerikler" docs={allDocs}>
    <Categories />
  </BlogBox>
}
export default page