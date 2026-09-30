'use client'

import { useEffect, useState } from 'react'

export default function CountdownClock() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // Set the date we're counting down to
    let countDownDate = new Date('Nov 7, 2026 16:00:00').getTime()
    // Update the count down every 1 second
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime()

      // Find the distance between now and the count down date
      let distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    }, 1000)
  }, [])

  return (
    <section className="countdown space-y-6">
      <div className="bg-cream rounded-3xl p-6 sm:p-10 border border-eucalyptus text-center space-y-3 ">
        <div className="text-3xl sm:text-5xl flex justify-center  font-semibold text-eucalyptus">
          <div className="w-[20%] flex flex-col items-center">
            {days < 10 ? `0${days}` : days} <span className="text-sm sm:text-xl">hari</span>
          </div>
          <div className="w-[20%] flex flex-col items-center">
            {hours < 10 ? `0${hours}` : hours} <span className="text-sm sm:text-xl">jam</span>
          </div>
          <div className="w-[20%] flex flex-col items-center">
            {minutes < 10 ? `0${minutes}` : minutes}{' '}
            <span className="text-sm sm:text-xl">menit</span>
          </div>
          <div className="w-[20%] flex flex-col items-center">
            {seconds < 10 ? `0${seconds}` : seconds}{' '}
            <span className="text-sm sm:text-xl">detik</span>
          </div>
        </div>
        <a
          className="flex w-fit mt-6 mx-auto bg-eucalyptus hover:cursor-pointer hover:bg-terracotta-dark text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition duration-200 transform active:scale-[0.99] disabled:opacity-50"
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ibadah+Syukur+7+Bulanan+Dave+dan+Poppy&dates=20261107T160000/20261107T200000&ctz=Indonesia/Jakarta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tambahkan ke Kalender
        </a>
      </div>
    </section>
  )
}
