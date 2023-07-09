import { allDocs } from '@/.contentlayer/generated'
import Link from 'next/link'

const page = () => {

  return <div className="flex flex-col gap-4 flex-wrap">
    {allDocs.map((doc, index) => (
      <Link href={"/makale/" + doc.slugAsParams}
        className="blog" key={index}
      >
        <div className="font-bold text-lg">{doc.title}</div>
        <p>{doc.description}</p>
      </Link>
    ))}
  </div>
}
export default page