"use client"
import { getAllCategories, getCategoryIcon } from '@/utils/category'
import { capitalizeTurkish } from '@/utils/turkish'
import { FilterX } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Categories = () => {
  const pathname = usePathname()
  const router = useRouter()

  return <>
    <h1>Kategoriler</h1>
    <div className="category-container">
      <Link href="/makaleler" className={"category-box" + (pathname.split("/")[1] == "makaleler" ? " active-category" : "")}>
        <FilterX strokeWidth={1.5} />
        <div>Tümü</div>
      </Link>
      {getAllCategories().map((category, index) => (
        <button onClick={() => router.push("/kategori/" + category)} className={"category-box" + (pathname.split("/")[2] == category ? " active-category" : "")}
          key={index}
        >
          {getCategoryIcon(category)}
          <div>
            {capitalizeTurkish(category)}
          </div>
        </button>
      ))}
    </div >
  </>
}

export default Categories