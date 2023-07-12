"use client"
import { Doc } from '@/.contentlayer/generated'
import { capitalizeTurkish } from '@/utils/turkish'
import { getCategoryIcon } from '@/utils/category'
import { epochToDate } from '@/utils/dates'
import { CalendarDays, ChevronLeft, ChevronRight, Tag } from 'lucide-react'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import Categories from './Categories'
import { useSearchParams } from 'next/navigation'

type BlogBoxProps = {
  docs: Doc[]
  title: string
}

const BlogBox: FC<BlogBoxProps> = ({ docs, title }) => {

  const [docsToShow, setDocsToShow] = useState<Doc[]>([])
  const [pageNumbers, setPageNumbers] = useState<React.JSX.Element[]>([])

  // Paginate docs
  const docsCount = docs.length
  const docsPerPage = parseInt(process.env.DOCS_PER_PAGE as string)
  const totalPages = Math.ceil(docsCount / docsPerPage)
  const params = useSearchParams()
  const page = parseInt(
    params.get("sayfa") !== null
      ? params.get("sayfa") as string
      : "1"
  )
  useEffect(() => {
    setDocsToShow(docs.slice(
      docsPerPage * (page - 1),
      docsPerPage * page
    ))

    // Calculate page number count
    const pageButtons = []
    for (let i = -2; i < totalPages + 2; ++i) {
      if (i >= 0 && i < totalPages)
        pageButtons.push(
          <Link
            className={page === i + 1 ? "current-page" : undefined}
            key={i}
            href={{ query: { sayfa: i + 1 } }}
          >
            {i + 1}
          </Link>
        )
    }
    setPageNumbers(pageButtons)
  }, [docs, docsPerPage, page, totalPages])

  return <article className="flex flex-col gap-4">
    <Categories />
    <h1>{title}</h1>

    <div id="pagination-container">
      <Link
        className={page === 1 ? "cursor-not-allowed" : undefined}
        href={page !== 1 ? { query: { sayfa: page - 1 } } : {}}
      >
        <ChevronLeft className={page === 1 ? "text-neutral-400" : undefined} />
      </Link>

      <div className="page-numbers">{pageNumbers}</div>

      <Link
        href={page !== totalPages ? { query: { sayfa: page + 1 } } : {}}
        className={page === totalPages ? "cursor-not-allowed" : undefined}
      >
        <ChevronRight className={page === totalPages ? "text-neutral-400" : undefined} />
      </Link>
    </div>

    <div id="blog-container">
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
  </article >
}

export default BlogBox