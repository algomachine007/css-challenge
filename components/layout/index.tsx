import { ReactNode } from 'react'
import styles from './layout.module.scss'
type Layout = {
  children: ReactNode
}

const Layout = ({ children }: Layout) => {
  return (
    <main className={styles.wrapper}>{children}</main>
  )
}

export default Layout