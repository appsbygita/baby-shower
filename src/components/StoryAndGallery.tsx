import Image from 'next/image'

export default function StoryAndGallery() {
  return (
    <section className="space-y-6">
      <div className="bg-cream rounded-3xl p-6 sm:p-10 border border-terracotta/10 text-center space-y-3 shadow-sm">
        {/* <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal/80">
          Menyambut Keajaiban Kecil Kami
        </h2> */}
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Setelah perjalanan panjang, keajaiban kecil kami sebentar lagi akan tiba. Kami mengundang
          Bapak/Ibu/Saudara/i untuk hadir dan merayakan momen bahagia ini bersama kami. Kehadiran
          serta doa Anda tentu menjadi pelengkap kebahagiaan kami.
        </p>
        <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Aditya & Poppy
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        <div className="overflow-hidden rounded-2xl border-4 border-white shadow-sm aspect-square bg-peach-light/40 relative">
          {/* <Image
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80"
            alt="Parents-to-be"
            fill
            className="object-cover hover:scale-105 transition duration-300"
          /> */}
        </div>
        <div className="overflow-hidden rounded-2xl border-4 border-white shadow-sm aspect-square bg-peach-light/40 relative">
          {/* <Image
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80"
            alt="Nursery Details"
            fill
            className="object-cover hover:scale-105 transition duration-300"
          /> */}
        </div>
        <div className="col-span-2 md:col-span-1 overflow-hidden rounded-2xl border-4 border-white shadow-sm aspect-square bg-peach-light/40 relative">
          {/* <Image
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
            alt="Baby Shoes"
            fill
            className="object-cover hover:scale-105 transition duration-300"
          /> */}
        </div>
      </div>
    </section>
  )
}
