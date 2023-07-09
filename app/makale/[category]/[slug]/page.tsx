import { getAuthorPicture } from "@/utils/author"
import { epochToDate } from "@/utils/dates"
import { Mdx } from "@/components/template/Mdx"
import { allDocs } from "contentlayer/generated"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarDays } from "lucide-react"
import { getCategoryIcon } from "@/utils/category"
import capitalize from "@/utils/capitalization"

type PageProps = {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slug === slug)

  if (!doc) notFound()
  return doc
}

const page = async ({ params }: PageProps) => {

  const doc = await getDocFromParams(params.slug)
  return <article>
    <div id="article-info">
      <div id="article-author">
        <Image width={64} height={64} id="article-pp" src={getAuthorPicture(doc.author)} alt={doc.author} />
        {doc.author}
      </div>
      <div className="flex sm:flex-col sm:items-end gap-4 flex-wrap">
        <div id="article-date">
          {epochToDate(doc.date)}
          <CalendarDays />
        </div>
        <div id="article-category">
          {doc.category && capitalize(doc.category)}
          {doc.category && getCategoryIcon(doc.category)}
        </div>
      </div>
    </div>
    <Mdx code={doc.body.code} />
  </article>
}

export default page