import Image from 'next/image';
import styles from './button.module.scss';
import { ButtonProps } from './types';

const Button = ({ isDark, text, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} {...rest} data-variant={String(isDark)}>
      <span>{text} </span>
      <span>
        <Image
          src={isDark ? '/Union.png' : '/arrow.png'}
          width={20}
          height={16}
          alt={text}
        />
      </span>
    </button>
  );
};

export default Button;
