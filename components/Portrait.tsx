import { BiCaretRight, BiCaretLeft } from 'react-icons/bi'
import styles from './Portrait.module.scss'

type PortraitProps = {
  img: string
  onNextImg: () => void
  onPrevImg: () => void
}

export const Portrait = ({ img, onNextImg, onPrevImg }: PortraitProps) => {
  return (
    <div className={styles.ExternalPortrait}>
      <div
        className={`${styles.PrevButton} ${styles.PortraitButton}`}
        onClick={onNextImg}
      >
        <BiCaretLeft />
      </div>
      <div className={styles.InternalPortrait}>
        <img src={img} alt="" />
      </div>
      <div
        className={`${styles.NextButton} ${styles.PortraitButton}`}
        onClick={onPrevImg}
      >
        <BiCaretRight />
      </div>
    </div>
  )
}
