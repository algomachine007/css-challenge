import styles from "./bottom.module.scss";
import SectionWrapper from "./../layout/sectionWrapper";
import Image from "next/image";
import Button from "../button";
import Banner from "@components/banner";
const Bottom = () => {
  return (
    <div className={styles.wrapper}>
      <SectionWrapper>
        <Banner title="Amaben" />
      </SectionWrapper>
    </div>
  );
};

export default Bottom;
