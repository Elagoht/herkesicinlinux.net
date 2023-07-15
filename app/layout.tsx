import type { Metadata } from 'next'
import "@/styles/index.css"
import "@/styles/article.css"
import Header from '@/components/template/Header'
import Main from '@/components/template/Main'
import Aside from '@/components/template/Aside'
import Footer from '@/components/template/Footer'

export const metadata: Metadata = {
  title: {
    default: "Herkes İçin Linux",
    template: "%s | Herkes İçin Linux"
  },
  description: "Youtube Kanalındaki içeriklere ek olarak makaleler burada yer almaktadır.",
  manifest: "/manifest.json",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo192.png',
    apple: '/logo192.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'technology',
  twitter: {
    card: 'summary_large_image',
    title: 'Herkes İçin Linux',
    description: 'Linux hakkında makaleler',
    creator: '@furkanbytekin',
  },
  openGraph: {
    title: "Herkes İçin Linux",
    description: 'Linux hakkında makaleler',
    url: 'https://herkesicinlinux.net',
    siteName: 'Herkes İçin Linux',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        <div className="flex max-md:flex-col max-w-screen-xl w-full gap-6 p-4 flex-1">
          <Main>{children}</Main>
          <Aside />
        </div>
        <Footer />
      </body>
    </html>
  )
}
