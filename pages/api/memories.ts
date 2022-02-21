import { Repository } from '@data/repository'
import { IMemory } from '@interfaces/memories'

// TODO: This functions with all of this implementation, and needings of
// Injection, call to create a independent server, to manage this connections
// For this mommento I will try to do this implementations with NEXT JS
export default async function getMemories(): Promise<IMemory[]> {
  const region = process.env.AWS_REGION || ''
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID || ''
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || ''
  const memoriesRepository = new Repository({
    region,
    credentials: { accessKeyId, secretAccessKey },
  })
  const defaultImg =
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/41/44/ea.jpg'
  return [{ id: '', img: defaultImg }]
  return memoriesRepository.getMemories()
}
