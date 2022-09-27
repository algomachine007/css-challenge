import styles from './card.module.scss';
const Card = ({ heading, body, time, variant, type }) => {
  return (
    <div className={styles.card} data-variant={String(variant)}>
      <div className={styles.adornment}></div>
      <h4>{heading}</h4>

      <p>{body}</p>

      <p>
        {' '}
        {type} • <time dateTime='February 3, 2021'>{time}</time>{' '}
      </p>
    </div>
  );
};

export default Card;
