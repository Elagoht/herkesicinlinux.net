import { allDocs } from "@/.contentlayer/generated"
import { AsideLink } from "./AsideNav"

export const getLatestContents: () => AsideLink[] = () => {
  const docs = allDocs.sort((doc) => doc.date)
  return docs.map((doc) => ({
    name: doc.title,
    link: doc.slug,
    icon: doc.cover
  }))
}