import { Doc } from '@/.contentlayer/generated'
import { capitalizeTurkish } from '@/utils/turkish'
import { getCategoryIcon } from '@/utils/category'
import { epochToDate } from '@/utils/dates'
import { CalendarDays } from 'lucide-react'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

type BlogBoxProps = {
  docs: Doc[]
  title: string,
  children?: ReactNode
}

const BlogBox: FC<BlogBoxProps> = ({ docs, title, children }) => {
  return <div className="flex flex-col gap-4">
    {children}
    <h1 className="text-2xl font-bold">{title}</h1>
    <div id="blog-container">
      {docs.map((doc, index) => (
        <Link href={"/makale/" + doc.path} className="blog-box" key={index}>
          <div className="blog-info">
            <div className="blog-title">{doc.title}</div>
            <div className="blog-date"><CalendarDays strokeWidth={1.5} /> {epochToDate(doc.date)}</div>
            <div className="blog-category">{getCategoryIcon(doc.category)}{capitalizeTurkish(doc.category)}</div>
            <div className="blog-desc">{doc.description}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
}

export default BlogBox