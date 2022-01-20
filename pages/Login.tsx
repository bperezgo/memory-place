import { Profile } from '@components/Profile'
import { InputSecretPassword } from '@components/InputSecretPassword'
import styles from './index.module.scss'

export default function Login() {
  return (
    <div className={styles.LoginContainer}>
      <Profile />
      <InputSecretPassword />
    </div>
  )
}
