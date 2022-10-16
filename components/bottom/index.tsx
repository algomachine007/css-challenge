import styles from "./bottom.module.scss";
import SectionWrapper from "@layout/sectionWrapper";
import Banner from "@components/banner";
import { IBottomProps } from "./types";
import Image from "next/image";

const Bottom = ({ info }: IBottomProps) => {
  return (
    <div className={styles.wrapper}>
      <SectionWrapper withBg>
        {/* <Image
          src="/bailey.jpg"
          className={styles.landingImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        /> */}
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
