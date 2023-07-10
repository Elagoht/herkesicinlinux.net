"use client"
import { useEffect, useState } from 'react'
import { YouTubeVideoItem, fetchYouTubeVideos } from '@/utils/youtube'
import Image from 'next/image'

const Page = () => {
  const [videos, setVideos] = useState<YouTubeVideoItem[]>([])
  const [nextPageToken, setNextPageToken] = useState('')

  const fetchVideos = async (pageToken = '') => {
    const { videos: fetchedVideos, nextPageToken: fetchedNextPageToken } = await fetchYouTubeVideos(pageToken)
    setVideos((prev) => [...prev, ...fetchedVideos])
    setNextPageToken(fetchedNextPageToken)
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  const loadMoreVideos = () => {
    fetchVideos(nextPageToken)
  }
  return <>
    <h1>Youtube Videos</h1>
    <div id="blog-container">
      {videos &&
        videos.map((video) => (
          <div key={video.id.videoId} className="card">
            <Image src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <div className="blog">{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
          </div>
        ))
      }
      {nextPageToken && (
        <button onClick={loadMoreVideos}>Load More</button>
      )}
      {videos.length === 0 &&
        <>Videolar yüklenirken bir hata oluştu.</>
      }
    </div>
  </>
}

export default Page