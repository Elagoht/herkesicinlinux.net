"use client"
import { getAllCategories, getCategoryIcon } from '@/utils/category'
import { capitalizeTurkish } from '@/utils/turkish'
import { FilterX } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Categories = () => {
  const pathname = usePathname()

  return <>
    <h1 className="text-2xl font-bold">Kategoriler</h1>
    <div className="category-container">
      <Link href="/makaleler" className={"category-box" + (pathname.split("/")[1] == "makaleler" ? " mt-1 border-b-0" : "")}>
        <FilterX strokeWidth={1.5} />
        <div>Tümü</div>
      </Link>
      {getAllCategories().map((category, index) => (
        <Link href={"/kategori/" + category} className={"category-box" + (pathname.split("/")[2] == category ? " mt-1 border-b-0" : "")}
          key={index}
        >
          {getCategoryIcon(category)}
          <div>
            {capitalizeTurkish(category)}
          </div>
        </Link>
      ))}
    </div >
  </>
}

export default Categories