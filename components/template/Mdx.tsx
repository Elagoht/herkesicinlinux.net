import { useMDXComponent } from "next-contentlayer/hooks"
import "./terminal.css"

type MdxProps = {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component />
}