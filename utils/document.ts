import { allDocs } from "@/.contentlayer/generated"
import { notFound } from "next/navigation"

const getDocFromParams = async (slug: string) => {
  const doc = allDocs.find((doc) => doc.slug === slug)

  if (!doc) notFound()
  return doc
}

export default getDocFromParams