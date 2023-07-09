import { getAllCategories, getCategoryIcon } from '@/utils/category'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { FC } from 'react'

type CategoryPageProps = {
  params: {
    category: string
  }
}

const page: FC<CategoryPageProps> = ({ params }) => {
  const categories = getAllCategories()

  return <article>
    <h1>Kategoriler</h1>
    <div className="category-container">
      {categories.map((category, index) => (
        <Link href={"/kategori/" + category} className="category-box" key={index}>
          {getCategoryIcon(category)}
          <div>
            {category}
          </div>
        </Link>
      ))}
    </div >
  </article >
}

export default page