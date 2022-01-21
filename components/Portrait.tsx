import { BiCaretRight, BiCaretLeft } from 'react-icons/bi'
import styles from './Portrait.module.scss'

type PortraitProps = {
  img: string
}

export const Portrait = ({ img }: PortraitProps) => {
  return (
    <div className={styles.ExternalPortrait}>
      <div className={`${styles.PrevButton} ${styles.PortraitButton}`}>
        <BiCaretLeft />
      </div>
      <div
        className={styles.InternalPortrait}
      >
          <img src={img} alt="" />
      </div>
      <div className={`${styles.NextButton} ${styles.PortraitButton}`}>
        <BiCaretRight />
      </div>
    </div>
  )
}
