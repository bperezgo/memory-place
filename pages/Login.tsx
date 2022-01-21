import { Profile } from '@components/Profile'
import { InputSecretPassword } from '@components/InputSecretPassword'
import styles from './login.module.scss'

const exampleImg =
  'https://lh3.googleusercontent.com/HThMSkbSg2ntSQZdcFsOtflgkL6vBJPm6bJFeat2c64WkMjvLeHjEvux2U8fFOHydrNz--kcAVv4AQMlD4Z9sR60ZA=w640-h400-e365-rj-sc0x00ffffff'

export default function Login() {
  return (
    <div className={styles.LoginContainer}>
      <div className={styles.Login__box}>
        <Profile img={exampleImg} />
        <InputSecretPassword />
      </div>
    </div>
  )
}
