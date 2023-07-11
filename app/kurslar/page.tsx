import Course from '@/components/Course'
import courses from '@/data/courses'
import { FC } from 'react'

const page: FC = () => {
  return <article>
    <h1>Kurslar</h1>
    <div id="course-container">
      {courses.map((course, index) => (
        <Course {...course} key={index} />
      ))}
    </div>
  </article>
}

export default page