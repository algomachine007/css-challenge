import styles from "./bottom.module.scss";
import SectionWrapper from "@layout/sectionWrapper";
import Banner from "@components/banner";
import { IBottomProps } from "./types";

const Bottom = ({ info }: IBottomProps) => {
  return (
    <div className={styles.wrapper}>
      <SectionWrapper>
        <Banner
          title={info.title}
          description={info.description}
          buttonText="Climate Justice"
        />
      </SectionWrapper>
    </div>
  );
};

export default Bottom;
