import { Doc, allDocs } from "@/.contentlayer/generated";
import { File, FileText, Newspaper, Sparkles, LucideProps } from "lucide-react"
import React, { FunctionComponentElement } from "react"

export const getCategoryIcon:
  (category: string) => FunctionComponentElement<LucideProps> =
  (category) => {
    let icon
    switch (category) {
      case "rehber": icon = FileText; break
      case "haber": icon = Newspaper; break
      case "öneri": icon = Sparkles; break
      default: icon = File; break
    }
    return React.createElement(icon, null, "") as FunctionComponentElement<LucideProps>
  }

export const getAllCategories:
  () => string[] =
  () => {
    return [...new Set(allDocs.map(doc => doc.category))]
  }

export const getAllFromCategory:
  (category: string) => Doc[] =
  (category) => {
    return allDocs.filter(doc => doc.category === category)
  }