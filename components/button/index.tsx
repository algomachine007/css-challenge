import Image from "next/image"
import React from 'react'
import styles from './button.module.scss'

type Button = {
  isDark?: boolean,
  text: string
}
const Button = ({ isDark, text, ...rest }: Button) => {
  return (
    <button className={styles.button} {...rest} data-variant={isDark ? 'dark' : ''}>
      <span>{text} </span> <span> <Image src={isDark ? "/Union.png" : '/arrow.png'} width={20} height={16} /> </span>
    </button>
  )
}

export default Button