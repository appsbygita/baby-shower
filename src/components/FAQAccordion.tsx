'use client'

export default function FAQAccordion() {
  return (
    <section className="bg-cream rounded-3xl p-6 sm:p-10 border border-terracotta/10 shadow-sm space-y-6">
      <div className="text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-terracotta">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        <details className="group border border-terracotta/15 rounded-xl bg-cream/30 p-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer font-medium text-sm text-charcoal">
            <span>Are children allowed?</span>
            <span className="transition group-open:rotate-180 text-terracotta">▼</span>
          </summary>
          <p className="mt-2 text-xs text-charcoal/70 leading-relaxed">
            Yes! Little ones are more than welcome. Please include them in your guest count.
          </p>
        </details>

        <details className="group border border-terracotta/15 rounded-xl bg-cream/30 p-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer font-medium text-sm text-charcoal">
            <span>Will food and drinks be served?</span>
            <span className="transition group-open:rotate-180 text-terracotta">▼</span>
          </summary>
          <p className="mt-2 text-xs text-charcoal/70 leading-relaxed">
            Yes! We will have finger foods, mocktails, coffee, and dessert options available.
          </p>
        </details>
      </div>
    </section>
  )
}
