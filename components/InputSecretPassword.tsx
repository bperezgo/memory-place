import styles from './InputSecretPassword.module.scss'

export const InputSecretPassword = () => (
  <div className={styles.InputContainer}>
    <div className={styles.container__input}>
      <input
        className={styles.input__area}
        placeholder="Password"
        type="password"
      />
    </div>
  </div>
)
