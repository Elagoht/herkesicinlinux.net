import BlogBox from "@/components/BlogBox"
import { capitalizeTurkish } from "@/utils/turkish"
import { getAllFromCategory, getCategoryIcon } from "@/utils/category"
import { epochToDate } from "@/utils/dates"
import { Calendar, Edit3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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