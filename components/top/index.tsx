import Image from "next/image"
import Link from "next/link"
import Card from "../card"
import styles from './top.module.scss'
const Top = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__upper}>
        <h2>
          Powerful news collaborations
        </h2>

        <h4>
          Partnerships supporting local newsrooms with world-class resources
        </h4>

        <button>
          <span>See all </span> <span> <Image src='/arrow.png' width={20} height={16} /> </span>    </button>
      </div>

      <div className={styles.wrapper__lower}>

        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Top