import { FC, ReactNode } from "react"

interface ChildrenProp {
  children: ReactNode
}
interface TerminalProps extends ChildrenProp {
  prompt?: string
}

export const Terminal: FC<TerminalProps> = ({ children, prompt = "user@PC:~$ " }) => {

  return <div className="term">
    <span className="prompt">{prompt}</span>{children}
  </div>
}

export const Location: FC<ChildrenProp> = ({ children = "user@PC:~$ " }) => {

  return <div className="locate">{children}</div>
}


export const Output: FC<ChildrenProp> = ({ children }) => {
  return (
    <div className="output">{children}</div>
  )
}

export const Window: FC<ChildrenProp> = ({ children }: { children: ReactNode }) => {

  return <div className="window">{children}</div>
}
