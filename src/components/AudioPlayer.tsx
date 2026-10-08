'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function AudioPlayer({ isOpened }: { isOpened: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        setIsPlaying(true)
      } else {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }
  }
  useEffect(() => {
    if (audioRef.current) {
      setIsPlaying(isOpened)
      if (isOpened) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isOpened])
  return (
    <div className="fixed bottom-0 right-0 z-50 pr-4 pb-4">
      <button
        onClick={handlePlayPause}
        className={`px-4 py-4 bg-white drop-shadow-lg rounded-full ${isOpened ? '' : 'hidden'}`}
      >
        {isPlaying ? (
          <Image src="/img/pause.png" alt="Pause" width={24} height={24} />
        ) : (
          <Image src="/img/play.png" alt="Play" width={24} height={24} />
        )}
      </button>
      <audio autoPlay loop ref={audioRef}>
        <source src="/audio/tye-trim.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
