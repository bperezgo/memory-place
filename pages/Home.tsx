import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/Portraits')
    }, 3000)
  }, [])
  return (
    <div className="CenteredContainer CenteredTextAlign CenteredVerticalAlign">
      <h1 className="Title">Un lugar para guardar nuestros recuerdos</h1>
    </div>
  )
}
