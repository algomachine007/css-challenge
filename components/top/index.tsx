import Button from '../button';

import SectionWrapper from '../layout/sectionWrapper';
import styles from './top.module.scss';
import cardData from './../../data/cardData.json';
import Card from '@components/card';
import { ITopType } from './types';
const Top = ({ heading, subHeading }: ITopType) => {
  return (
    <div className={styles.wrapper}>
      <SectionWrapper>
        <div className={styles.wrapper__upper}>
          <h2>{heading}</h2>

          <h4>{subHeading}</h4>

          <Button text='See all' />
        </div>

        <div className={styles.wrapper__lower}>
          {cardData.map(({ heading, body, id, type, time }) => (
            <Card
              key={id}
              heading={heading}
              body={body}
              type={type}
              time={time}
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Top;
