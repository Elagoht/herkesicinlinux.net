import { getAuthorPicture } from "@/utils/author"
import { epochToDate } from "@/utils/dates"
import { Mdx } from "@/components/template/Mdx"
import Image from "next/image"
import { CalendarDays } from "lucide-react"
import { getCategoryIcon } from "@/utils/category"
import { capitalizeTurkish } from "@/utils/turkish"
import Link from "next/link"
import { FC } from "react"
import { Metadata } from 'next'
import getAudienceAmblem, { getAudienceShortText } from "@/utils/audience"
import getDocFromParams from "@/utils/document"

type PageProps = {
  params: {
    slug: string
  }
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
    twitter: {
      card: "summary_large_image",
      title: `${doc.title} | Herkes İçin Linux`,
      description: doc.description,
      creator: "@furkanbytekin",
    },
    openGraph: {
      title: `${doc.title} | Herkes İçin Linux`,
      description: doc.description,
      url: "https://herkesicinlinux.net",
      siteName: "Herkes İçin Linux",
      locale: "tr_TR",
      type: "website",
    },
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
      <div className="flex sm:flex-col sm:items-end gap-2 flex-wrap justify-center">
        <div id="article-date">
          {epochToDate(doc.date)}
          <CalendarDays strokeWidth={1.5} />
        </div>
        <Link id="article-category" href={"/kategori/" + doc.category}>
          {capitalizeTurkish(doc.category)}
          {getCategoryIcon(doc.category)}
        </Link>
        <div id="article-audience">
          {getAudienceShortText(doc.audience)}
          <Image width={24} height={24} src={getAudienceAmblem(doc.audience)} alt="Kitle Amblemi" className="m-0" />
        </div>
      </div>
    </div>
    <Mdx code={doc.body.code} />
  </article>
}

export default page