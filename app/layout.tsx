import type { Metadata } from 'next'
import "./index.css"
import Header from '@/components/Header'
import Main from '@/components/Main'

export const metadata: Metadata = {
  title: "Herkes İçin Linux",
  description: 'Blog posts belong to video contents',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>
          <Main>
            {children}
          </Main>
        </div>
      </body>
    </html>
  )
}
