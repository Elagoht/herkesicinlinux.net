import { ICourse } from '@/courses/data'
import { ExternalLink } from 'lucide-react'
import { FC } from 'react'

const Course: FC<ICourse> = ({ title, desc, list, first }) => {
  return <div className="course">
    <h1>{title}</h1>
    <p>{desc}</p>
    <iframe
      src={`https://www.youtube.com/embed/videoseries?list=${list}`}
      title="YouTube video player" allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    >
      Tarayıcınız bu içeriği desteklemiyor
    </iframe>
    <a href={`https://www.youtube.com/watch?v=${first}&list=${list}`}><ExternalLink /> Kursa Git</a>
  </div>
}

export default Course