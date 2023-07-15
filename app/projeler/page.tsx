import Project from '@/components/Project'
import { projects } from '@/data/projects'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Projeler",
  description: "Herkes İçin Linux adı altında geliştirilip yayınlanan uygulamalar bu alanda yer almaktadır."
}

const page = () => {
  return <article>
    <h1>Projeler</h1>
    <div id="project-container">
      {projects.map((project, index) => (
        <Project {...project} key={index} />
      ))}
    </div>
  </article>
}

export default page