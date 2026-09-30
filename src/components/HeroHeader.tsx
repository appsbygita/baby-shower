export default function HeroHeader() {
  return (
    <header className="w-full text-center pt-12 pb-8 px-4">
      <div className="max-w-xl mx-auto space-y-3">
        <span className="inline-block uppercase tracking-widest text-xs font-semibold text-eucalyptus px-3.5 py-1.5 bg-peach-light rounded-full border border-terracotta/10">
          You're Invited
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-terracotta tracking-tigh mb-6">
          Ibadah Syukur
          <br /> 7 Bulanan
        </h1>
        <p className="text-charcoal/80 text-base sm:text-xl italic font-serif">
          “Tuhan telah melakukan perbuatan besar kepada kita, maka kita bersukacita”
          <br />
          Mazmur 126:3
        </p>
      </div>
    </header>
  )
}
