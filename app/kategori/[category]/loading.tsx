import { CalendarDays, ChevronLeft, ChevronRight, File, FilterX, Tag } from 'lucide-react'
import React from 'react'

const loading = () => {
  return <div className="grow max-w-none mx-auto prose prose-neutral dark:prose-invert flex flex-col gap-4">

    <h1>Kategoriler</h1>
    <div className="category-container">
      <div className="category-box skeleton">
        <FilterX strokeWidth={1.5} />
        <div>Tümü</div>
      </div>
      {Array.from({ length: 3 }, (_, index) => (
        <button className="category-box skeleton" key={index}>
          {<File />}<div>...</div>
        </button>
      ))}
    </div >

    <h1>İçerikler</h1>

    {/* Search Bar */}
    <form onSubmit={undefined}>
      <input disabled id="search-bar" className="skeleton"
        placeholder="İçerikler Aranıyor..."
      />
    </form>

    {/* Pagination */}
    <div>İçerikler elde ediliyor...</div>
    <div id="pagination-container">
      <button><ChevronLeft /></button>

      <div className="page-numbers">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>

      <button><ChevronRight />
      </button>
    </div>

    {/* Blog List */}
    <div id="blog-container">
      {Array.from({ length: 4 }, (_, index) => (
        <div className="blog-box skeleton" key={index}>
          <div className="blog-info">
            <div className="blog-title placeholder-text"></div>
            <div className="blog-date">
              <CalendarDays strokeWidth={1.5} />
              <div className="placeholder-text" ></div>
            </div>
            <div className="blog-category">
              <File />
              <div className="placeholder-text" ></div>
            </div>
            <div className="blog-desc placeholder-text"></div>
            <div className="blog-tags">
              <Tag className="text-neutral-200 h-8 mr-1" size={24} />
              {Array.from({ length: 5 }, (_, tag) => (
                <div className="blog-tag placeholder-text" key={tag}></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>


  </div >
}

export default loading