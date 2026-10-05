'use client'

import { Suspense, useState } from 'react'
import AudioPlayer from './AudioPlayer'
import BookLoader from './BookLoader'

export default function BookPlay() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Suspense>
      <BookLoader onOpen={setIsOpened} />
      <AudioPlayer isOpened={isOpened} />
    </Suspense>
  )
}
