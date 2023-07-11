import { ICourse } from '@/courses/data'
import { BrainCog } from 'lucide-react'
import { FC } from 'react'

const Course: FC<ICourse> = ({ title, desc, list, first }) => {
  return <div className="course-box">
    <div className="course-box-container">
      <div className="course-title">{title}</div>
      <a href={`https://www.youtube.com/watch?v=${first}&list=${list}`}><BrainCog /> Öğren</a>
    </div>
    <div className="course-description">{desc}</div>
    <iframe
      src={`https://www.youtube.com/embed/videoseries?list=${list}`}
      title="YouTube video player" allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    >
      Tarayıcınız bu içeriği desteklemiyor
    </iframe>
  </div>
}

export default Course