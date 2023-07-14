import { Doc } from "@/.contentlayer/generated";

const searchForDocs = (docs: Doc[], searchTerm: string): Doc[] => {
  if (searchTerm === "") return docs

  searchTerm = searchTerm.toLocaleLowerCase("tr")

  return docs.filter((doc) =>
    doc.title.toLocaleLowerCase("tr").includes(searchTerm) ||
    doc.description.toLocaleLowerCase("tr").includes(searchTerm) ||
    doc.tags.toLocaleLowerCase("tr").includes(searchTerm)
  )
}

export default searchForDocs