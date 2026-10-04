import React from 'react'
import {
  Sliders,
  Truck,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

interface AboutPageProps {
  onBrowseCars: () => void
  onContactUs: () => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBrowseCars, onContactUs }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-16 animate-in fade-in duration-300">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-color)] text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-4 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>The Veloce Heritage</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
          Engineered Without Compromise
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
          Founded on the uncompromising pursuit of motorsport performance and concierge-level acquisition. We bridge the gap between factory engineering and private automotive collection.
        </p>
      </div>

      {/* Philosophy Banner with Showroom Image */}
      <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface)] shadow-lg grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
              Curatorial Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
              Only The Top 1% of Vehicles Qualify
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Every supercar, grand tourer, and performance wagon we acquire is vetted for factory pedigree, DME over-rev authenticity, digital paint depth uniformity, and complete ownership provenance.
            </p>
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-semibold text-[var(--text-main)]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Zero structural or cosmetic compromise allowed</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Single-owner or documented connoisseur provenance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Factory warranty preservation & DME validation</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex items-center gap-4">
            <button
              onClick={onBrowseCars}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <span>Explore The Fleet</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onContactUs}
              className="px-5 py-3 rounded-xl font-semibold text-xs border border-[var(--border-color)] bg-[var(--surface-secondary)] text-[var(--text-main)] hover:bg-[var(--surface)] transition-all cursor-pointer"
            >
              Contact Concierge
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto min-h-[300px]">
          <img
            src="/Showroom exterior view.png"
            alt="Veloce Gallery Showroom"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <section className="bg-[var(--surface-secondary)] border border-[var(--border-color)] rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase block mb-1">
            Certified Delivery
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
            The Three Pillars of The Veloce Standard
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)]">
            Every client acquisition is protected by our triple-tier quality and service commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-5">
              <Sliders className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight">
              150-Point Certificate of Purity
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Comprehensive mechanical, diagnostic, chassis structural, and cosmetic inspection verified by factory-trained specialists.
            </p>
          </div>

          <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-5">
              <Truck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight">
              White-Glove Nationwide Delivery
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Enclosed, climate-controlled transport brought directly to your residence with an in-person orientation and title concierge.
            </p>
          </div>

          <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-5">
              <RotateCcw className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight">
              7-Day Money-Back Guarantee
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Drive it on your roads. If it doesn't match your exact driving expectations, return it within 7 days or 300 miles for a prompt full refund.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
