"use client"
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

const Page: FC = () => {

  const [time, setTime] = useState(3)
  const router = useRouter()

  useEffect(() => {

    setTimeout(() => {
      router.push('/makaleler')
    }, 3000)

    const timeout = setInterval(
      () => setTime(prev => prev - 1),
      1000
    )
    return () => clearInterval(timeout)
  }, [])

  return <div>
    <p>Aradığınız makale henüz yazılmamış 🤯.</p>
    <p>Aradım ama bulamadım 🤷🏻‍♂️.</p>
    <p>Makaleler ana sayfasına yönlendiriliyorsunuz ✔️. {time}...</p>
  </div>
}

export default Page