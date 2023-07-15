import { ImageResponse } from 'next/server'

export const runtime = "edge"

export const alt = "Herkes İçin Linux"

export const size = {
  width: 1200,
  height: 630,
}


export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#E5E5E5",
        color: "#262626",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 60,
        gap: 20
      }}
    >
      <img src="http://localhost:3000/apple-touch-icon.png" alt="amblem" width={384} height={384} />
      <span style={{ color: "#af907d", fontSize: 64 }}>Herkes İçin Linux</span>
      <span style={{ fontSize: 48 }}>Genel Kullanıcı Kitlesi</span>
    </div>,
    {
      ...size,
    }
  )
}