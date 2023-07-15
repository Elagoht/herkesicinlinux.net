import Course from '@/components/Course'
import courses from '@/data/courses'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title: "Kurslar",
  description: "Tarafımızca verilen kurslar bu alanda listelenmektedir."
}

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