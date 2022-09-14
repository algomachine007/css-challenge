import { ReactNode } from 'react'

type Layout = {
  children: ReactNode
}

const Layout = ({ children }: Layout) => {
  return (
    <main>{children}</main>
  )
}

export default Layout