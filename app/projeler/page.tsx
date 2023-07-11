import Project from '@/components/Project'
import { projects } from '@/data/projects'
import React from 'react'

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