import { ImageResponse } from 'next/server'
import getAudienceAmblem, { getAudienceText } from '@/utils/audience'
import getDocFromParams from '@/utils/document'

export const runtime = "edge"

export const alt = "Herkes İçin Linux"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image({ params }: { params: { slug: string } }) {
  const doc = await getDocFromParams(params.slug)

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
      <div style={{ display: "flex", width: "100%", gap: 60, marginBottom: 40 }}>
        <img src={`https://www.herkesicinlinux.net${getAudienceAmblem(doc.audience)}`} alt="amblem" width={256} height={256} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ fontSize: 64, color: "#8c7364" }}>Herkes İçin Linux</span>
          <span style={{ fontSize: 32, color: "#af907d" }}>{getAudienceText(doc.audience)}</span>
          <span style={{ fontSize: 32 }}>Yazar: {doc.author}</span>
        </div>
      </div>
      <span style={{ fontSize: 48, width: "100%", color: "#af907d" }}>{doc.title}</span>
      <span style={{ fontSize: 32, width: "100%" }}>{doc.description}</span>
    </div >,
    { ...size, }
  )
}