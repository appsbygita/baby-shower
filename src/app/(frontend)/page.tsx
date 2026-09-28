import BookLoader from '@/components/BookLoader'
import HeroHeader from '@/components/HeroHeader'
import InfoCards from '@/components/InfoCards'
import StoryAndGallery from '@/components/StoryAndGallery'
import Schedule from '@/components/Schedule'
import VenueDetails from '@/components/VenueDetails'
import FAQAccordion from '@/components/FAQAccordion'
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

      <main className="max-w-3xl mx-auto px-4 w-full flex-grow space-y-12 mb-16">
        <StoryAndGallery />
        {/* <InfoCards /> */}
        <VenueDetails />
        {/* <FAQAccordion /> */}
        <RsvpForm />
        <MessageBoard />
      </main>
    </>
  )
}
