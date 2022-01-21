import { IMemory } from '@interfaces/memories'

export const getMemories = (): Promise<IMemory[]> => {
  const defaultImg =
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/41/44/ea.jpg'
  const img1 = process.env.IMG_1 || defaultImg
  const img2 = process.env.IMG_2 || defaultImg
  const img3 = process.env.IMG_3 || defaultImg
  return new Promise((resolve) => {
    const imgs: IMemory[] = [{ img: img1 }, { img: img2 }, { img: img3 }]
    resolve(imgs)
  })
}
