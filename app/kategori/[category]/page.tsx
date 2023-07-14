import BlogBox from "@/components/BlogBox"
import { capitalizeTurkish } from "@/utils/turkish"
import { getAllFromCategory } from "@/utils/category"
import { FC } from "react"

type PageProps = {
  params: {
    category: string
  }
}

const page: FC<PageProps> = ({ params }) => {

  const docs = getAllFromCategory(params.category)
  return <BlogBox title={capitalizeTurkish(params.category) + " İçerikleri"} docs={docs} />
}

export default page