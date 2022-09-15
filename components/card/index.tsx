import styles from './card.module.scss'
const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.adornment}></div>
      <h4>Lacus eget elit dui dapibus volutpat id.</h4>

      <p>Ornare quis donec odio sagittis, gravida facilisi vivamus. Non potenti et feugiat urna tristique leo ut et. Ultrices diam.</p>

      <p> Report • <time dateTime="February 3, 2021">February 3, 2021</time>  </p>
    </div>
  )
}

export default Card