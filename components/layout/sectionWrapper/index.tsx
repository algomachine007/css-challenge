import Image from 'next/image';
import React from 'react';
import styles from './sectionWrapper.module.scss';
type SectionWrapper = {
  children: React.ReactNode;
  withBg?: boolean;
};

const SectionWrapper = ({ children, withBg }: SectionWrapper) => {
  const className = withBg ? styles.wrapperWithBg : styles.wrapper;
  return <div className={className}>{children}</div>;
};

export default SectionWrapper;
