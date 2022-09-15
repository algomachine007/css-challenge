import Image from "next/image"
import React from 'react'
import styles from './button.module.scss'

type Button = {
  isDark?: boolean,
  text: string
}
const Button = ({ isDark, text, ...rest }: Button) => {
  return (
    <button className={styles.button} {...rest}>
      <span>{text} </span> <span> <Image src='/arrow.png' width={20} height={16} /> </span>
    </button>
  )
}

export default Button