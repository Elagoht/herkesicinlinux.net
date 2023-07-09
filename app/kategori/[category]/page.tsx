import BlogBox from "@/components/BlogBox"
import capitalize from "@/utils/capitalization"
import { getAllFromCategory, getCategoryIcon } from "@/utils/category"
import { epochToDate } from "@/utils/dates"
import { Calendar, Edit3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
type PageProps = {
  params: {
    category: string
  }
}

const page = ({ params }: PageProps) => {

  const docs = getAllFromCategory(params.category)
  return <BlogBox docs={docs} />
}

export default page