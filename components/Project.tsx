"use client"
import { IProject } from '@/data/projects'
import { ChevronLeft, ChevronRight, Code, Store } from 'lucide-react'
import Image from 'next/image'
import { FC, useState } from 'react'

const Project: FC<IProject> = ({ title, desc, link, stores, images }) => {

  const imageCount: number = images.length
  const [gallery, setGallery] = useState<number>(0)

  const handleGallery = (modifier: number) => {
    const newIndex = (gallery - modifier + imageCount) % imageCount
    setGallery(newIndex)
  }

  return <div className="course-box">
    <div className="course-title">{title}</div>
    <div className="course-description">
      {desc.map((paragrap, index) => (
        <p key={index}>{paragrap}</p>
      ))}
    </div>
    <div className="course-box-container">
      <a target="_blank" rel="noreferrer" href={link}><Code /> Kod</a>
      {stores?.map((store, index) => (
        <a target="_blank" rel="noreferrer" key={index} href={store.link}>
          <Store /> {store.name}
        </a>
      ))}
    </div>
    <div className="project-gallery">
      <div className="project-gallery-image-container">
        <Image src={images[gallery <= 0 ? imageCount - 1 : gallery - 1]} alt={title} width={944} height={576} />
        <Image src={images[gallery >= imageCount - 1 ? 0 : gallery + 1]} alt={title} width={944} height={576} />
        <Image src={images[gallery]} alt={title} width={944} height={576} />
      </div>
      <div className="project-gallery-controller">
        <button onClick={() => handleGallery(-1)}><ChevronLeft strokeWidth={3} /></button>
        <button onClick={() => handleGallery(1)}><ChevronRight strokeWidth={3} /></button>
      </div>
    </div>
  </div>
}

export default Project