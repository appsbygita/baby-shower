import BookLoader from '@/components/BookLoader'
import HeroHeader from '@/components/HeroHeader'
import StoryAndGallery from '@/components/StoryAndGallery'
import VenueDetails from '@/components/VenueDetails'
import RsvpForm from '@/components/RsvpForm'
import './globals.css'
import MessageBoard from '@/components/MessageBoard'

export default function Home() {
  return (
    <>
      {/* 3D Book Cover Intro Overlay */}
      <BookLoader />

      {/* Main Page Layout */}
      <HeroHeader />

      <main className="max-w-3xl mx-auto px-4 w-full grow space-y-12 mb-16">
        <StoryAndGallery />
        <VenueDetails />
        <RsvpForm />
        <MessageBoard />
      </main>
    </>
  )
}
