'use client'

import { getGuest, updateRsvp } from '@/actions/dbActions'
import { Guest } from '@/payload-types'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function RsvpForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [guest, setGuest] = useState(null as Guest | null)
  const [slugParam, setSlugParam] = useState('')
  // const [guestName, setGuestName] = useState('')
  // const [maxGuests, setMaxGuests] = useState(0)

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    await updateRsvp(slugParam, new FormData(e.currentTarget))

    setLoading(false)
    setSubmitted(true)
  }

  const searchParams = useSearchParams()
  useEffect(() => {
    ;(async () => {
      // setGuestName(await getName(searchParams.get('guestid') || ''))
      // setMaxGuests(await getMaxGuests(searchParams.get('guestid') || ''))
      setSlugParam(searchParams.get('guestid') || '')
      setGuest(await getGuest(searchParams.get('guestid') || ''))
    })()
  }, [])

  return (
    <section
      id="rsvp"
      className="bg-cream rounded-3xl p-6 sm:p-10 shadow-sm border border-terracotta/15"
    >
      <div className="text-center mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-terracotta">
          Kindly Respond
        </h2>
        <p className="text-lg text-charcoal/70 mt-1">Mohon RSVP sebelum 31 Oktober 2026</p>
      </div>

      {guest === null || guest === undefined || guest.name === undefined ? (
        <p className="text-center text-charcoal/70">Mohon cek kembali link yang Anda gunakan.</p>
      ) : guest?.done === 'yes' ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">{guest.name}</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-eucalyptus mb-2">
            Terkonfirmasi {guest.attending === 'yes' ? 'Hadir' : 'Tidak Hadir'}
          </p>
          {guest.attending === 'yes' ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-eucalyptus mb-2">
              Pax:{' '}
              <span className="text-black lowercase font-normal text-base">
                {guest.numOfRsvp} orang
              </span>
            </p>
          ) : null}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`space-y-6 ${submitted ? 'opacity-50 pointer-events-none' : ''}`}
        >
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold uppercase tracking-wider text-eucalyptus mb-2"
            >
              Nama
            </label>
            <input
              type="text"
              id="fullName"
              name="name"
              required
              disabled
              defaultValue={guest?.name || 'Nama Anda'}
              className="w-full px-4 py-3 rounded-xl border border-terracotta/20 bg-cream/30 text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:bg-white transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-eucalyptus mb-2">
              Konfirmasi kehadiran *
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-terracotta/20 bg-cream/30 cursor-pointer hover:bg-peach-light/40 transition">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  required
                  className="accent-terracotta"
                />
                <span className="text-sm font-medium text-charcoal">Hadir :)</span>
              </label>
              <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-terracotta/20 bg-cream/30 cursor-pointer hover:bg-peach-light/40 transition">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  required
                  className="accent-terracotta"
                />
                <span className="text-sm font-medium text-charcoal">Tidak Hadir :(</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="guests"
                className="block text-xs font-semibold uppercase tracking-wider text-eucalyptus mb-2"
              >
                Total Tamu
              </label>
              <select
                id="guests"
                name="numOfRsvp"
                defaultValue={guest?.numOfRsvp || 1}
                className="w-full px-4 py-3 rounded-xl border border-terracotta/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:bg-white transition"
              >
                {[...Array(guest?.maxGuests || 0).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} orang
                  </option>
                ))}
                {/* <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option> */}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="dietary"
                className="block text-xs font-semibold uppercase tracking-wider text-eucalyptus mb-2"
              >
                Restriksi Diet / Alergi
              </label>
              <input
                type="text"
                id="dietary"
                name="dietaryRestrictions"
                placeholder="Vegetarian, No Nuts, etc."
                className="w-full px-4 py-3 rounded-xl border border-terracotta/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:bg-white transition"
                defaultValue={guest?.dietaryRestrictions || ''}
              />
            </div>
          </div>

          {/* <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-eucalyptus mb-2"
          >
            Tinggalkan pesan
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Tidak sabar untuk merayakan bersama Anda!"
            className="w-full px-4 py-3 rounded-xl border border-terracotta/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:bg-white transition resize-none"
          />
        </div> */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-eucalyptus hover:cursor-pointer hover:bg-terracotta-dark text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition duration-200 transform active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? 'Mengirim...' : 'Kirim Konfirmasi'}
          </button>
        </form>
      )}
      {submitted && (
        <div className="mt-6 p-4 rounded-xl bg-eucalyptus/10 text-eucalyptus-dark text-center border border-eucalyptus/20">
          <p className="font-semibold text-base">Terima kasih! Respon Anda telah diterima. ✨</p>
          <p className="text-xs mt-1">Kami menantikan kehadiran Anda!</p>
        </div>
      )}
    </section>
  )
}
