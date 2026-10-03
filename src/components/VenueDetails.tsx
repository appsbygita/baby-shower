import InfoCards from './InfoCards'

export default function VenueDetails() {
  return (
    <section className="bg-cream rounded-3xl p-6 sm:p-10 border border-terracotta/10 shadow-sm space-y-4">
      <div className="text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal/80 mb-8">
          Waktu & Tempat
        </h2>
      </div>

      <InfoCards />

      <div className="text-center mt-6">
        <p className="text-base text-charcoal/80 leading-relaxed mb-2">
          <span className="font-bold">Dress Code</span>
        </p>
        <p className="text-base text-charcoal/80 leading-relaxed">
          Kasual Pastel 🌸
          <br />
          Soft pastel • Nyaman • Ceria
        </p>
      </div>
    </section>
  )
}
