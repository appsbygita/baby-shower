'use client'

import { getMessages, submitMessage } from '@/app/actions/messageActions'
import { useActionState, useEffect, useRef, useState } from 'react'
import MessageCard from './MessageCard'
import { Message } from '@/payload-types'

export default function MessageBoard() {
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(prevState: { success: boolean }, formData: FormData) {
    await submitMessage(formData)
    await fetchLatestData()
    return { success: true }
  }
  //   const [submitted, setSubmitted] = useState(false)
  //   const [loading, setLoading] = useState(false)
  const [state, formAction, isPending] = useActionState(handleSubmit, {
    success: false,
  })
  const [messages, setMessages] = useState([] as Message[])

  const fetchLatestData = async () => {
    try {
      // Replace this with your actual API endpoint: fetch('/api/items')

      const data = await getMessages()
      setMessages(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchLatestData()
  }, [])

  //   const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     setLoading(true)

  //     // Simulate API request to Next.js API / Payload CMS
  //     await submitMessage(new FormData(e.currentTarget))
  //     setLoading(false)
  //     setSubmitted(true)
  //   }

  return (
    <section
      id="message-board"
      className="bg-cream rounded-3xl p-6 sm:p-10 shadow-sm border border-terracotta/15"
    >
      <div className="text-center mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-terracotta">
          Untaian Salam
        </h2>
        <p className="text-sm text-charcoal/70 mt-1">Sampaikan pesan dan ucapan selamat Anda</p>
      </div>

      <form className={`space-y-6`} ref={formRef} action={formAction}>
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-eucalyptus mb-2"
          >
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-terracotta/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:bg-white transition"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-eucalyptus mb-2"
          >
            Tinggalkan pesan
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            placeholder="Tidak sabar untuk merayakan bersama Anda!"
            className="w-full px-4 py-3 rounded-xl border border-terracotta/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:bg-white transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-eucalyptus hover:cursor-pointer hover:bg-terracotta-dark text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition duration-200 transform active:scale-[0.99] disabled:opacity-50"
        >
          {isPending ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
      </form>

      {/* {submitted && (
        <div className="mt-6 p-4 rounded-xl bg-eucalyptus/10 text-eucalyptus-dark text-center border border-eucalyptus/20">
          <p className="font-semibold text-base">Pesan Anda telah tersampaikan. ✨</p>
        </div>
      )} */}

      <div className="mt-8 space-y-4 h-120 overflow-y-auto scrollbar-thin scrollbar-thumb-terracotta/40 scrollbar-track-cream/20">
        {messages.map((msg) => (
          <MessageCard key={msg.id} name={msg.name} date={msg.createdAt} message={msg.message} />
        ))}
      </div>
    </section>
  )
}
