import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Profile } from '@components/Profile'
import { InputSecretPassword } from '@components/InputSecretPassword'
import { getProfileImg } from '@api/profile'

export const getStaticProps: GetStaticProps<{
  profileImg: string
}> = async () => {
  const profileImg = await getProfileImg()
  return {
    props: {
      profileImg,
    },
  }
}

export default function Login({
  profileImg,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="CenteredContainer">
      <div className="Login__box">
        <Profile img={profileImg} />
        <InputSecretPassword />
      </div>
    </div>
  )
}
