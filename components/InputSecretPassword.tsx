import { useRef } from 'react'
import { useRouter } from 'next/router'
import styles from './InputSecretPassword.module.scss'

type InputSecretPasswordProps = {}

export const InputSecretPassword = ({}: InputSecretPasswordProps) => {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const onPressEnter = (event: any) => {
    const password = inputRef.current?.value
    if (event.key === 'Enter' && password === 'beyourselfforever') {
      router.push('/Home')
    }
  }
  return (
    <div className={styles.InputContainer}>
      <div className={styles.container__input}>
        <input
          className={styles.input__area}
          placeholder="Password"
          type="password"
          ref={inputRef}
          onKeyDown={onPressEnter}
        />
      </div>
    </div>
  )
}
