'use client'

import { getName } from '@/actions/dbActions'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function BookLoader() {
  const [isOpen, setIsOpen] = useState(false)
  const [guestName, setGuestName] = useState('')

  const handleOpen = () => {
    setIsOpen(true)
  }
  useEffect(() => {
    // Auto-open invitation after 2.3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2300)
    return () => clearTimeout(timer)
  }, [])

  const searchParams = useSearchParams()
  useEffect(() => {
    ;(async () => setGuestName(await getName(searchParams.get('guestid') || '')))()
  }, [])

  return (
    <div
      className={`book-overlay fixed inset-0 z-50 bg-cream/95 backdrop-blur-md flex items-center justify-center p-4 book-perspective ${
        isOpen ? 'book-open' : ''
      }`}
    >
      <div className="whole-book relative w-full max-w-sm h-120 bg-white rounded-r-2xl shadow-2xl border-y border-r border-terracotta/20 flex flex-col justify-center items-center text-center p-6">
        {/* Back Spine Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-5 bg-linear-to-r from-terracotta-dark/20 to-transparent z-10" />

        {/* 3D Flipping Front Cover */}
        <div className="book-cover absolute inset-0 bg-terracota rounded-r-2xl border-l-8 border-terracotta-dark shadow-2xl flex flex-col items-center justify-between p-8 text-white z-20">
          <div className="w-full h-full border border-peach-light/40 rounded-lg p-6 flex flex-col items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-cream font-semibold">
              Kepada
            </span>

            <div className="space-y-2">
              <span className="text-3xl">✨</span>
              <h2 className="font-serif text-xl font-semibold tracking-wide text-white">
                {guestName || 'Tamu Undangan'}
              </h2>
              {/* <p className="text-xs text-peach-light font-serif italic">Baby Shower Celebration</p> */}
            </div>

            <button className="px-5 py-2.5 bg-cream text-terracota rounded-full font-semibold text-xs tracking-wider uppercase shadow-md hover:bg-white transition transform active:scale-95">
              Open Invitation
            </button>
          </div>
        </div>

        {/* Inside Right Page Content */}
        <div className="space-y-3 p-4">
          <h3 className="font-serif text-2xl text-terracotta font-semibold">
            Welcoming Our Little One
          </h3>
          <p className="text-xs text-charcoal/70 leading-relaxed">
            Preparing the celebration details for you...
          </p>
          <div className="w-8 h-8 mx-auto border-2 border-terracotta border-t-transparent rounded-full animate-spin mt-4" />
        </div>
      </div>
    </div>
  )
}
