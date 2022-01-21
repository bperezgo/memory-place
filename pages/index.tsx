import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    // Always do navigations after the first render
    router.push('/Login', undefined, { shallow: true })
  }, [])
  return <></>
}
