import { allDocs } from "@/.contentlayer/generated"
import { AsideLink } from "./AsideNav"

export const getLatestContents: () => AsideLink[] = () => {
  const docs = [...allDocs].sort((doc) => doc.date).reverse().slice(0, 5)
  return docs.map((doc) => ({
    name: doc.title,
    link: doc.path,
    type: doc.category
  }))
}