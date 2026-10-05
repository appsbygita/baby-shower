import HeroHeader from '@/components/HeroHeader'
import StoryAndGallery from '@/components/StoryAndGallery'
import VenueDetails from '@/components/VenueDetails'
import RsvpForm from '@/components/RsvpForm'
import './globals.css'
import MessageBoard from '@/components/MessageBoard'
import { Suspense } from 'react'
import Schedule from '@/components/Schedule'
import InvitingStatement from '@/components/InvitingStatement'
import CountdownClock from '@/components/CountdownClock'
import AudioPlayer from '@/components/AudioPlayer'
import BookPlay from '@/components/BookPlay'

export default function Home() {
  return (
    <>
      {/* 3D Book Cover Intro Overlay */}
      <BookPlay />

      {/* Main Page Layout */}
      <HeroHeader />

      <main className="max-w-3xl mx-auto px-4 w-full grow space-y-12 mb-16">
        <StoryAndGallery />
        <VenueDetails />
        <Schedule />
        <Suspense>
          <RsvpForm />
        </Suspense>
        <CountdownClock />
        <InvitingStatement />
        <Suspense>
          <MessageBoard />
        </Suspense>
      </main>
    </>
  )
}
