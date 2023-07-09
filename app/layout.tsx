import type { Metadata } from 'next'
import "./index.css"
import Header from '@/components/template/Header'
import Main from '@/components/template/Main'
import Aside from '@/components/template/Aside'

export const metadata: Metadata = {
  title: "Herkes İçin Linux",
  description: 'Blog posts belong to video contents',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex max-md:flex-col-reverse">
          <Main>
            {children}
          </Main>
          <Aside />
        </div>
      </body>
    </html>
  )
}
