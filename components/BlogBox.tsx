"use client"
import { Doc } from '@/.contentlayer/generated'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import Categories from './Categories'
import BlogList from './template/BlogList'
import searchForDocs from '@/utils/search'

type BlogBoxProps = {
  docs: Doc[]
  title: string
}

const BlogBox: FC<BlogBoxProps> = ({ docs, title }) => {

  const [docsToShow, setDocsToShow] = useState<Doc[]>([])
  const [searchedDocs, setSearchedDocs] = useState<Doc[]>([])
  const [search, setSearch] = useState<string>("")
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [numberLinks, setNumberLinks] = useState<ReactNode[]>([])

  const handleSearch = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setPage(1)
  }, [setPage])

  const handlePage = useCallback((goto: number): void => {
    setPage(goto)
  }, [])

  useEffect(() => {
    // Press F to search
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "f") {
        const searchBar = document.querySelector("#search-bar") as HTMLElement
        searchBar.focus()
      }
    }
    document.addEventListener("keypress", handleKeyPress)

    return () => {
      document.removeEventListener("keypress", handleKeyPress)
    }

  }, [])

  useEffect(() => {
    // Redirect if page number is invalid
    if (!/^[1-9]\d*$/.test(String(page))) {
      handlePage(1)
    } else if (page > totalPages) handlePage(1)

    const docsPerPage = parseInt(process.env.DOCS_PER_PAGE || "10")

    // Search For Docs
    const searchedDocs = searchForDocs(docs, search)
    const updatedDocsToShow = searchedDocs.slice(
      (page - 1) * docsPerPage,
      page * docsPerPage
    )
    setSearchedDocs(searchedDocs)
    setDocsToShow(updatedDocsToShow)
  }, [handlePage, page, docs, search, totalPages])

  useEffect(() => {
    const docsPerPage = parseInt(process.env.DOCS_PER_PAGE || "10")
    setTotalPages(Math.ceil(searchedDocs.length / docsPerPage))

    const tempNumbers = []
    for (
      let i = (
        page === totalPages
          ? -4
          : page <= totalPages - 2
            ? -2
            : -3
      );
      i <= (page <= 2
        ? page === 1
          ? 4
          : 3
        : 2
      );
      ++i) {
      tempNumbers.push(
        page + i > 0 && page + i <= totalPages && <button
          key={i}
          className={i === 0 ? "current-number" : undefined}
          onClick={() => handlePage(page + i)}
        >
          {page + i}
        </button >
      )
    }
    setNumberLinks(tempNumbers)
  }, [searchedDocs.length, page, handlePage, totalPages])

  return <div className="grow max-w-none mx-auto prose prose-neutral dark:prose-invert flex flex-col gap-4">

    <Categories />

    <h1>{title}</h1>

    {/* Search Bar */}
    <form onSubmit={(event) => handleSearch(event)}>
      <input
        type="search" name="sorgu" id="search-bar"
        placeholder='Makaleleri filtrele ( "F" tuşuna basarak buraya odaklan!)'
        value={search} onChange={(event) => setSearch(event.currentTarget.value)}
      />
    </form>

    {/* Pagination */}
    <div>Toplamda {searchedDocs.length} makale listeleniyor. Sayfa {page}/{totalPages}</div>
    <div id="pagination-container">
      <button
        className={page === 1 ? "cursor-not-allowed text-neutral-400 dark:text-neutral-700" : undefined}
        onClick={() => page === 1 ? undefined : handlePage(page - 1)}
      ><ChevronLeft />
      </button>

      <div className="page-numbers">{numberLinks}</div>

      <button
        className={page === totalPages ? "cursor-not-allowed text-neutral-400 dark:text-neutral-700" : undefined}
        onClick={() => page === totalPages ? undefined : handlePage(page + 1)}
      ><ChevronRight />
      </button>
    </div>

    {/* Blog List */}
    <BlogList docsToShow={docsToShow} />


  </div >
}

export default BlogBox