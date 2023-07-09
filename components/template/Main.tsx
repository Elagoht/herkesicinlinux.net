import { FC } from "react"
type MainProps = {
  children: React.ReactNode
}

const Main: FC<MainProps> = ({ children }: MainProps) => {

  return <main>
    {children}
  </main>
}

export default Main