export const getProfileImg = (): Promise<string> => {
  const profileImg =
    process.env.PROFILE_IMG ||
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/41/44/ea.jpg'
  return new Promise((resolve) => {
    resolve(profileImg)
  })
}
