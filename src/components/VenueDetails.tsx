import InfoCards from './InfoCards'

export default function VenueDetails() {
  return (
    <section className="bg-cream rounded-3xl p-6 sm:p-10 border border-terracotta/10 shadow-sm space-y-4">
      <div className="text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal/80 mb-8">
          Event Details
        </h2>
        {/* <p className="text-xs text-charcoal/60 mt-1">Getting here and parking information</p> */}
      </div>

      <InfoCards />

      <div className="text-center mt-6">
        <p className="text-base text-charcoal/80 leading-relaxed">
          <span className="font-semibold">Dress Code:</span> Garden Casual, pastel colors
        </p>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-cream/40 border border-terracotta/10 space-y-2">
          <h3 className="font-semibold text-sm text-eucalyptus flex items-center gap-2">
            🚗 Parking Instructions
          </h3>
          <p className="text-sm text-charcoal/80 leading-relaxed">
            Complimentary parking is available.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-cream/40 border border-terracotta/10 space-y-2">
          <h3 className="font-semibold text-sm text-eucalyptus flex items-center gap-2">
            👗 Suggested Attire
          </h3>
          <p className="text-sm text-charcoal/80 leading-relaxed">Garden Casual, pastel colors</p>
        </div>
      </div> */}
    </section>
  )
}
