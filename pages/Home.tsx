import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from './home.module.scss'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/portraits')
    }, 3000)
  }, [])
  return (
    <div className="CenteredContainer CenteredTextAlign CenteredVerticalAlign">
      <h1 className={styles.Title}>Un lugar para guardar nuestros recuerdos</h1>
    </div>
  )
}
