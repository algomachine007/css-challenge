import React from 'react'
import styles from './sectionWrapper.module.scss'
type SectionWrapper = {
  children: React.ReactNode
}

const SectionWrapper = ({ children }: SectionWrapper) => {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

export default SectionWrapper