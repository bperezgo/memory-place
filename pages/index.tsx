import { Profile } from '@components/Profile'
import { InputSecretPassword } from '@components/InputSecretPassword'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.HomeContainer}>
      <Profile />
      <InputSecretPassword />
    </div>
  )
}
