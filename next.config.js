module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  env: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  }
}