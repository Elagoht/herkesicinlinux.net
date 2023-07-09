import { allDocs } from '@/.contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { epochToDate } from '../../utils/dates'

const page = () => {


  return <div className="flex flex-col gap-4 flex-wrap">
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