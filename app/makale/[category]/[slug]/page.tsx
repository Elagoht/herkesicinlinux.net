import { getAuthorPicture } from "@/utils/author"
import { epochToDate } from "@/utils/dates"
import { Mdx } from "@/components/template/Mdx"
import { allDocs } from "contentlayer/generated"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarDays } from "lucide-react"
import { getCategoryIcon } from "@/utils/category"
import { capitalizeTurkish } from "@/utils/turkish"
import Link from "next/link"
import { FC } from "react"
import { Metadata } from 'next'

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const doc = await getDocFromParams(params.slug)
  return {
    title: doc.title,
    description: doc.description,
    keywords: doc.tags,
    authors: [{ name: doc.author }],
    creator: "Furkan Baytekin",
    publisher: "Furkan Baytekin",
  }
}

const page: FC<PageProps> = async ({ params }) => {

  const doc = await getDocFromParams(params.slug)
  return <article>
    <div id="article-info">
      <div id="article-author">
        <Image width={96} height={96} id="article-pp" src={getAuthorPicture(doc.author)} alt={doc.author} />
        {doc.author}
      </div>
      <div className="flex sm:flex-col sm:items-end gap-4 flex-wrap">
        <div id="article-date">
          {epochToDate(doc.date)}
          <CalendarDays strokeWidth={1.5} />
        </div>
        <Link id="article-category" href={"/kategori/" + doc.category}>
          {capitalizeTurkish(doc.category)}
          {getCategoryIcon(doc.category)}
        </Link>
      </div>
    </div>
    <Mdx code={doc.body.code} />
  </article>
}

export default page