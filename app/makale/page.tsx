import { getAllCategories } from '@/utils/category'
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
    {categories.map((category, index) => (
      <div key={index}>
        <Link href={"/makale/" + category}>{category}</Link>
      </div>
    ))}
  </article>
}

export default page