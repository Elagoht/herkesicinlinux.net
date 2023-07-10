import { allDocs } from "@/.contentlayer/generated"
import { AsideLink } from "./AsideNav"

export const getLatestContents: () => AsideLink[] = () => {
  const docs = [...allDocs].sort((a, b) => b.date - a.date).slice(0, 5)
  return docs.map((doc) => ({
    name: doc.title,
    link: doc.path,
    type: doc.category
  }))
}