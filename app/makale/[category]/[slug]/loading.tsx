import { CalendarDays, File } from "lucide-react"

type PageProps = {
  params: {
    slug: string
  }
}

const page = async () => {

  return <article>
    <div id="article-info">
      <div id="article-author">
        <image className="w-24 h-24 skeleton" id="article-pp" />
        <div className="placeholder-text !w-20"></div>
      </div>
      <div className="flex sm:flex-col sm:items-end gap-4 flex-wrap">
        <div id="article-date">
          <div className="placeholder-text !w-20"></div>
          <CalendarDays strokeWidth={1.5} />
        </div>
        <div id="article-category">
          <div className="placeholder-text !w-20"></div>
          <File />
        </div>
      </div>
    </div>
    <div className="p4">
      <h1>İçerik Yükleniyor</h1>
      <p>Lütfen bekleyin...</p>
    </div>
  </article>
}

export default page