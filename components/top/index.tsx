import Image from "next/image"
import Link from "next/link"
import Button from "../button"
import Card from "../card"
import SectionWrapper from "../layout/sectionWrapper"
import styles from './top.module.scss'
const Top = () => {
  return (
    <div className={styles.wrapper}>  <SectionWrapper>
      <div className={styles.wrapper__upper}>
        <h2>
          Powerful news collaborations
        </h2>

        <h4>
          Partnerships supporting local newsrooms with world-class resources
        </h4>



        <Button text='See all' />
      </div>

      <div className={styles.wrapper__lower}>

        <Card />
        <Card />
        <Card />
      </div>
    </SectionWrapper>
    </div>
  )
}

export default Top