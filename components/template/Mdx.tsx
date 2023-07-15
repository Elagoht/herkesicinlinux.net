import { useMDXComponent } from "next-contentlayer/hooks"
import "@/styles/terminal.css"

type MdxProps = {
  code: string
}

const components = {
  a: ({ ...props }) => (
    <a
      target="_blank"
      rel="noreferrer"
      {...props}
    />
  ),
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}