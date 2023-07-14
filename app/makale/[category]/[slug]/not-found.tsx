"use client"
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

const Page: FC = () => {

  const [time, setTime] = useState(5)
  const router = useRouter()

  useEffect(() => {

    setTimeout(() => {
      router.push('/makaleler')
    }, 5000)

    const timeout = setInterval(
      () => setTime(prev => prev - 1),
      1000
    )
    return () => clearInterval(timeout)
  }, [router])

  return <article>
    <div className="text-center h-full flex items-center justify-center flex-col grow flex-1">
      <h1>Hata 404!</h1>
      <span>Aradığınız makale henüz yazılmamış 🤯</span>
      <span>Makaleler ana sayfasına yönlendiriliyorsunuz ↩️ {time}...</span>
    </div>
  </article>
}

export default Page