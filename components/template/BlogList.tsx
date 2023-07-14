import { Doc } from '@/.contentlayer/generated'
import { getCategoryIcon } from '@/utils/category'
import { epochToDate } from '@/utils/dates'
import { capitalizeTurkish } from '@/utils/turkish'
import { CalendarDays, Tag } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'

type BlogListProps = {
  docsToShow: Doc[]
}

const BlogList: FC<BlogListProps> = ({ docsToShow }) => {
  return <div id="blog-container">
    {docsToShow.map((doc, index) => (
      <Link href={"/makale/" + doc.path} className="blog-box" key={index}>
        <div className="blog-info">
          <div className="blog-title">{doc.title}</div>
          <div className="blog-date">
            <CalendarDays strokeWidth={1.5} />
            {epochToDate(doc.date)}
          </div>
          <div className="blog-category">
            {getCategoryIcon(doc.category)}{capitalizeTurkish(doc.category)}
          </div>
          <div className="blog-desc">
            {doc.description}
          </div>
          <div className="blog-tags">
            <Tag className="text-neutral-200 h-8 mr-1" size={24} />
            {doc.tags.split(", ").map((tag: string) => (
              <div className="blog-tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </Link>
    ))}
  </div>
}

export default BlogList