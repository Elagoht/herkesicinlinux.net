import Course from '@/components/Course'
import courses from '@/courses/data'
import { FC } from 'react'

const page: FC = () => {
  return <article>
    <h1>Kurslar</h1>
    <div className="flex flex-col gap-4">
      {courses.map((course, index) => (
        <Course {...course} key={index} />
      ))}
    </div>
  </article>
}

export default page