import styles from './Profile.module.scss'

type ProfileProps = {
  img: string
}

export const Profile = ({ img }: ProfileProps) => (
  <div className={styles.ProfileContainer}>
    <div className={styles.external__circle}>
      <div
        className={styles.inner__circle}
        // style={{ background: `url('${img}') no-repeat none` }}
      >
        <img src={img} alt="" />
      </div>
    </div>
  </div>
)
