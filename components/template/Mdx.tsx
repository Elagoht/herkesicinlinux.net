import { useMDXComponent } from "next-contentlayer/hooks"
import "@/styles/terminal.css"

type MdxProps = {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component />
}