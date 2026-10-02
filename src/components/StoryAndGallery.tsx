import Image from 'next/image'

export default function StoryAndGallery() {
  return (
    <section className="space-y-6">
      <div className="bg-cream rounded-3xl p-6 sm:p-10 border border-terracotta/10 text-center space-y-3 shadow-sm">
        {/* <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal/80">
          Menyambut Keajaiban Kecil Kami
        </h2> */}
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Dengan penuh sukacita dan ucapan syukur kepada Tuhan, kami,
        </p>
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          DAVE ADITYA & POPPY
        </p>
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          mengundang Bapak/Ibu/Saudara/i untuk hadir dan bersama-sama merayakan Ibadah Syukur 7
          Bulanan atas kehamilan kami.
        </p>
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          17 tahun perjalanan pernikahan telah kami lalui bersama. Dalam perjalanan itu, kami
          belajar untuk terus percaya, berharap, dan menyerahkan setiap rencana kepada Tuhan.
        </p>
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Dan kini, di waktu yang Tuhan tetapkan, kami menerima sebuah anugerah yang begitu indah:
        </p>
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          sebuah kehidupan baru yang Tuhan percayakan kepada kami.
        </p>
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Karena itu, kami ingin mengajak keluarga dan saudara-saudara seiman untuk bersama-sama
          menaikkan puji syukur kepada Tuhan, serta memohon doa dan penyertaan-Nya bagi Poppy dan
          calon buah hati kami hingga proses persalinan dan seterusnya.
        </p>

        <div className="overflow-hidden rounded-3xl w-fit mx-auto mt-12">
          <Image src="/img/pic.jpeg" alt="Dave & Poppy" width={300} height={300} />
        </div>
      </div>

      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        <div className="overflow-hidden rounded-2xl border-4 border-white shadow-sm aspect-square bg-peach-light/40 relative">
          <Image
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80"
            alt="Parents-to-be"
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border-4 border-white shadow-sm aspect-square bg-peach-light/40 relative">
          <Image
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80"
            alt="Nursery Details"
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>
        <div className="col-span-2 md:col-span-1 overflow-hidden rounded-2xl border-4 border-white shadow-sm aspect-square bg-peach-light/40 relative">
          <Image
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
            alt="Baby Shoes"
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </div> */}
    </section>
  )
}
