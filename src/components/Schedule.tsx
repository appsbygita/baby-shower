export default function Schedule() {
  return (
    <section className="bg-cream rounded-3xl p-6 sm:p-10 border border-terracotta/10 shadow-sm space-y-6">
      <div className="text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-terracotta">
          Jadwal Acara
        </h2>
        {/* <p className="text-xs text-charcoal/60 mt-1">
          Berikut adalah jadwal acara yang telah kami susun:
        </p> */}
      </div>

      <div className="relative border-l-2 border-terracotta/20 ml-4 sm:ml-32 space-y-6 py-2">
        <div className="relative pl-6">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-eucalyptus border-4 border-white" />
          <span className="sm:absolute sm:-left-32 sm:top-0 text-xs font-bold text-eucalyptus tracking-wider uppercase">
            16:00 WIB
          </span>
          {/* <h3 className="font-semibold text-base text-charcoal">Kedatangan</h3> */}
          <p className="text-base text-eucalyptus">Kedatangan tamu undangan.</p>
        </div>

        <div className="relative pl-6">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-eucalyptus border-4 border-white" />
          <span className="sm:absolute sm:-left-32 sm:top-0 text-xs font-bold text-eucalyptus tracking-wider uppercase">
            16:30 WIB
          </span>
          {/* <h3 className="font-semibold text-base text-charcoal">Ibadah Syukur dimulai</h3> */}
          <p className="text-base text-eucalyptus">Ibadah Syukur dimulai.</p>
        </div>

        <div className="relative pl-6">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-eucalyptus border-4 border-white" />
          <span className="sm:absolute sm:-left-32 sm:top-0 text-xs font-bold text-eucalyptus tracking-wider uppercase">
            18:30 WIB
          </span>
          {/* <h3 className="font-semibold text-base text-charcoal">Ramah tamah</h3> */}
          <p className="text-base text-eucalyptus">Ramah tamah dan makan malam bersama.</p>
        </div>
      </div>
    </section>
  )
}
