import capitalize from "@/utils/capitalization"
import { epochToDate } from "@/utils/dates"
import { allDocs } from "contentlayer/generated"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type PageProps = {
  params: {
    category: string
  }
}

async function getDocFromParams(category: string) {
  const docs = allDocs
  const blogs = docs.find((doc) => doc.category === category)

  if (!blogs) notFound()
  return blogs
}

const page = async ({ params }: PageProps) => {

  const docs = await getDocFromParams(params.category)
  return <div className="flex flex-col gap-4 flex-wrap">
    <div className="text-2xl font-bold">&quot;{capitalize(params.category)}&quot; kategorisine ait bloglar listeleniyor.</div>
    {allDocs.map((doc, index) => (
      <Link href={"/makale/" + doc.path}
        className="blog" key={index}
      >
        <div className="font-bold text-lg">{doc.title}</div>
        <Image width={64} height={64} src={"/uploads/blogs/covers/" + doc.cover} alt={doc.title} />
        <div>{epochToDate(doc.date)}</div>
        <p>{doc.description}</p>
      </Link>
    ))}
  </div>
}

export default page