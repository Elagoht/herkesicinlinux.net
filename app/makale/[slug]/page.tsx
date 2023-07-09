import { getAuthorPicture } from "@/utils/author"
import { epochToDate } from "@/utils/dates"
import { Mdx } from "@/components/template/Mdx"
import { allDocs } from "contentlayer/generated"
import Image from "next/image"
import { notFound } from "next/navigation"

type PageProps = {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) notFound()
  return doc
}

const page = async ({ params }: PageProps) => {

  const doc = await getDocFromParams(params.slug)
  console.log(getAuthorPicture(doc.author))
  return <article>
    <div id="article-info">
      <div id="article-author">
        <Image width={64} height={64} id="article-pp" src={getAuthorPicture(doc.author)} alt={doc.author} />
        {doc.author}
      </div>
      <div id="article-date">{epochToDate(doc.date)}</div>
    </div>
    <Mdx code={doc.body.code} />
  </article>
}

export default page