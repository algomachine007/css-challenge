import React from 'react';
import styles from './sectionWrapper.module.scss';
type SectionWrapper = {
  children: React.ReactNode;
  variant?: string;
};

const SectionWrapper = ({ children, variant }: SectionWrapper) => {
  return (
    <div className={styles.wrapper} data-variant={String(variant)}>
      {children}
    </div>
  );
};

export default SectionWrapper;
