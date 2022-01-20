import { Profile } from '@components/Profile'
import { InputSecretPassword } from '@components/InputSecretPassword'
import styles from './login.module.scss'

export default function Login() {
  return (
    <div className={styles.LoginContainer}>
      <div className={styles.Login__box}>
        <Profile />
        <InputSecretPassword />
      </div>
    </div>
  )
}
