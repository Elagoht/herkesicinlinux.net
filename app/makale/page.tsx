import { redirect } from 'next/navigation'
import { FC } from 'react'

const page: FC = () => {
  redirect("/makaleler")
}

export default page