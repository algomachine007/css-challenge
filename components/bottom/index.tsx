import styles from './bottom.module.scss'
import SectionWrapper from './../layout/sectionWrapper'
import Image from "next/image"
const Bottom = () => {
  return (
    <div className={styles.wrapper}>

      <SectionWrapper>
        <h2>
          A world made safer for all
        </h2>

        <h4>
          Critical work in support of climate justice and equity
        </h4>

        <button>
          <span> Climate Justice </span> <span> <Image src='/arrow.png' width={20} height={16} /> </span>    </button>

      </SectionWrapper>

    </div>
  )
}

export default Bottom