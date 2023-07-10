import axios from "axios"

interface IYoutubeFetch {
  videos: YouTubeVideoItem[]
  nextPageToken: string
}

export const fetchYouTubeVideos:
  (pageToken: string) => Promise<IYoutubeFetch> =
  async (pageToken = "") => {
    try {
      const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
      const CHANNEL_ID = 'UCIWYzLPBy2Av4sgUsRClP0g' // Herkes İçin Linux
      const maxResults = 10

      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}&maxResults=${maxResults}&pageToken=${pageToken}`
      )

      const videos = response.data.items
      const nextPageToken = response.data.nextPageToken || ""

      return {
        videos,
        nextPageToken,
      }
    } catch (error) {
      console.error('Error fetching YouTube videos:', error)
      return {
        videos: [],
        nextPageToken: '',
      } as IYoutubeFetch
    }
  }

export interface YouTubeVideoItem {
  kind: string
  etag: string
  id: {
    kind: string
    videoId: string
  }
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: {
        url: string
        width: number
        height: number
      }
      medium: {
        url: string
        width: number
        height: number
      }
      high: {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
    liveBroadcastContent: string
  }
}