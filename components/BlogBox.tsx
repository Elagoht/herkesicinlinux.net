import { Doc } from '@/.contentlayer/generated'
import capitalize from '@/utils/capitalization'
import { getCategoryIcon } from '@/utils/category'
import { epochToDate } from '@/utils/dates'
import { CalendarDays } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'

type BlogBoxProps = {
  docs: Doc[]
}

const BlogBox: FC<BlogBoxProps> = ({ docs }) => {
  return <div id="blog-container">
    {docs.map((doc, index) => (
      <Link href={"/makale/" + doc.path} className="blog-box" key={index}>
        <div className="blog-info">
          <div className="blog-title">{doc.title}</div>
          <div className="blog-date"><CalendarDays strokeWidth={1.5} /> {epochToDate(doc.date)}</div>
          <div className="blog-category">{getCategoryIcon(doc.category)}{capitalize(doc.category)}</div>
          <div className="blog-desc">{doc.description}</div>
        </div>
      </Link>
    ))}
  </div>
}

export default BlogBox