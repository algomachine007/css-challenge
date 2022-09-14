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

        See all ==



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