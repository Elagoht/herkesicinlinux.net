type MainProps = {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }: MainProps) => {

  return <main>
    {children}
  </main>
}

export default Main