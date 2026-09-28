export default function InfoCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-cream p-6 rounded-2xl shadow-sm border border-terracotta/10 text-center space-y-1">
        <div className="w-10 h-10 mx-auto bg-peach-light rounded-full flex items-center justify-center text-terracotta font-bold text-lg mb-2">
          📅
        </div>
        <h3 className="font-semibold text-xs uppercase tracking-wider text-eucalyptus">Tanggal</h3>
        <p className="text-charcoal font-medium">Sabtu, 7 November 2026</p>
        <p className="text-xs text-charcoal/60">4:00 PM - 8:00 PM</p>
      </div>

      <div className="bg-cream p-6 rounded-2xl shadow-sm border border-terracotta/10 text-center space-y-1">
        <div className="w-10 h-10 mx-auto bg-peach-light rounded-full flex items-center justify-center text-terracotta font-bold text-lg mb-2">
          📍
        </div>
        <h3 className="font-semibold text-xs uppercase tracking-wider text-eucalyptus">Tempat</h3>
        <p className="text-charcoal font-medium">Umatis Resto & Venue, BSD</p>
        <a
          href="https://maps.app.goo.gl/Dyg1CyrJBfbqGfA49"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-charcoal/60 hover:underline"
        >
          <p>(lihat peta)</p>
        </a>
      </div>
    </section>
  )
}
