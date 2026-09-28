import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
//import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ibadah Syukur Aditya dan Poppy',
  description:
    'Mengundang Anda untuk merayakan momen bahagia kami dalam menyambut kehadiran buah hati kami.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${playfair.variable} font-sans text-charcoal antialiased min-h-screen flex flex-col justify-between overflow-x-hidden`}
      >
        {children}
        <footer className="py-8 text-center text-xs text-charcoal/50 bg-cream border-t border-terracotta/10">
          <p>Designed with love</p>
        </footer>
      </body>
    </html>
  )
}
