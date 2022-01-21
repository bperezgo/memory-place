import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Portrait } from '@components/Portrait'
import { IMemory } from '@interfaces/memories'
import { getMemories } from '@api/memories'
import { useState } from 'react'

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
  const [currentMemoryIdx, setCurrentMemoryIdx] = useState(0)
  const onNextImg = () => {
    if (currentMemoryIdx >= totalImgs - 1) {
      return setCurrentMemoryIdx(0)
    }
    setCurrentMemoryIdx(currentMemoryIdx + 1)
  }
  const onPrevImg = () => {
    if (currentMemoryIdx <= 0) {
      return setCurrentMemoryIdx(totalImgs - 1)
    }
    setCurrentMemoryIdx(currentMemoryIdx - 1)
  }
  // TODO: If memories comes empty, create another logic
  return (
    <div className="CenteredContainer CenteredVerticalAlign">
      <Portrait
        img={memories[currentMemoryIdx].img}
        onNextImg={onNextImg}
        onPrevImg={onPrevImg}
      />
    </div>
  )
}
