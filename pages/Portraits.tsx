import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Portrait } from '@components/Portrait'
import { IMemory } from '@interfaces/memories'
import { getMemories } from '@api/memories'

type MemoriesProps = {
  memories: IMemory[]
}

export const getStaticProps: GetStaticProps<MemoriesProps> = async () => {
  const memories = await getMemories()

  return {
    props: { memories },
  }
}

export default function Portraits({
  memories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const totalImgs = memories.length
  // TODO: If memories comes empty, create another logic
  return (
    <div className="CenteredContainer CenteredVerticalAlign">
      <Portrait img={memories[0].img} />
    </div>
  )
}
