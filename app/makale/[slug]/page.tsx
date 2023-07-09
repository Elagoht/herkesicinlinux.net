import { Mdx } from "@/components/template/Mdx"
import { allDocs } from "contentlayer/generated"
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
  return <article>
    <Mdx code={doc.body.code} />
  </article>
}

export default page