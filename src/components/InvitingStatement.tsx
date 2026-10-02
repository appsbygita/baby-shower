import Image from 'next/image'
export default function InvitingStatement() {
  return (
    <section className="space-y-6">
      <div className="bg-cream rounded-3xl p-6 sm:p-10 border border-terracotta/10 text-center space-y-3 shadow-sm">
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Kehadiran, doa, dan sukacita Bapak/Ibu/Saudara/i akan menjadi bagian yang sangat berarti
          dalam momen istimewa bagi keluarga kami.
        </p>
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Dengan penuh kasih dan ucapan syukur,
        </p>
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Dave Aditya & Poppy sekeluarga 🤍
        </p>

        <div className="overflow-hidden rounded-3xl w-fit mx-auto mt-12">
          <Image src="/img/beach-2-edit.png" alt="Dave & Poppy" width={600} height={600} />
        </div>
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto italic font-serif mt-14">
          “Tuhan telah melakukan perbuatan besar kepada kita, maka kita bersukacita.”
          <br /> — Mazmur 126:3
        </p>
      </div>
    </section>
  )
}
