import styles from './card.module.scss';
import { ICardType } from './types';

const Card = ({ heading, body, time, type }: ICardType) => {
  return (
    <div className={styles.card}>
      <div className={styles.adornment}></div>
      <h4>{heading}</h4>

      <p>{body}</p>

      <p>
        {type} • <time dateTime='February 3, 2021'>{time}</time>{' '}
      </p>
    </div>
  );
};

export default Card;
