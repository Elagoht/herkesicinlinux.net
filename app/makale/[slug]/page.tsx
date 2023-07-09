import { Mdx } from "@/components/Mdx"
import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation"

interface PageProps {
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
  return <article>
    <Mdx code={doc.body.code} />
  </article>
}

export default page