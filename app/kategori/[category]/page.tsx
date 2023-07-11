import BlogBox from "@/components/BlogBox"
import { capitalizeTurkish } from "@/utils/turkish"
import { getAllFromCategory } from "@/utils/category"
import Categories from "@/components/Categories"
type PageProps = {
  params: {
    category: string
  }
}

const page = ({ params }: PageProps) => {
  const docs = getAllFromCategory(params.category)
  return <div className="flex flex-col gap-4">
    <Categories />
    <BlogBox title={capitalizeTurkish(params.category) + " İçerikleri"} docs={docs} />
  </div>
}

export default page