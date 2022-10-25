import SectionWrapper from "@layouts/sectionWrapper";

import Banner from "@components/elements/banner";
import { IBottomProps } from "./types";
import styles from "./bottom.module.scss";

const Bottom = ({ info }: IBottomProps) => {
  return (
    <div className={styles.wrapper}>
      <SectionWrapper variant="bg">
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
