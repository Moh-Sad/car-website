import React, { useState } from 'react'
import {
  X,
  ShieldCheck,
  Gauge,
  Calendar,
  CheckCircle,
  Truck,
  RotateCcw,
  Sparkles,
  Phone,
  ArrowRight
} from 'lucide-react'
import type { Car } from '../data/cars'

interface CarModalProps {
  car: Car | null
  onClose: () => void
}

export const CarModal: React.FC<CarModalProps> = ({ car, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [booked, setBooked] = useState(false)

  if (!car) return null

  const currentImg = selectedImage || car.image
  const monthlyEst = Math.round((car.priceRaw * 0.8) / 60)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[var(--surface)]/80 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--surface-secondary)] flex items-center justify-center transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-7 bg-[var(--surface-secondary)]/50 p-6 flex flex-col justify-between">
            <div>
              {/* Main Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[var(--border-color)] bg-black/10">
                <img
                  src={currentImg}
                  alt={car.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-[var(--surface)]/90 text-[var(--text-main)] backdrop-blur-md border border-[var(--border-color)] shadow-sm">
                  {car.tag}
                </span>
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md">
                  {car.stock}
                </span>
              </div>

              {/* Thumbnails */}
              {car.gallery && car.gallery.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
                  {car.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        currentImg === img
                          ? 'border-[var(--primary)] shadow-md scale-105'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Guaranteed Badges */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[var(--border-color)] text-center text-xs">
              <div className="p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
                <ShieldCheck className="w-4 h-4 text-[var(--primary)] mx-auto mb-1" />
                <span className="font-semibold text-[var(--text-main)] block">150-Point</span>
                <span className="text-[var(--text-secondary)] text-[10px]">Pure Certified</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
                <Truck className="w-4 h-4 text-[var(--primary)] mx-auto mb-1" />
                <span className="font-semibold text-[var(--text-main)] block">Enclosed</span>
                <span className="text-[var(--text-secondary)] text-[10px]">Nationwide Transit</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
                <RotateCcw className="w-4 h-4 text-[var(--success)] mx-auto mb-1" />
                <span className="font-semibold text-[var(--text-main)] block">7-Day Return</span>
                <span className="text-[var(--text-secondary)] text-[10px]">Full Money Back</span>
              </div>
            </div>
          </div>

          {/* Right Column: Vehicle Specs & Purchase */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase">
                  {car.category}
                </span>
                <span className="text-xs text-[var(--text-secondary)]">VIN: {car.vin}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
                {car.title}
              </h2>
              <p className="text-xs text-[var(--text-secondary)] -mt-2 font-medium">
                {car.engine}
              </p>

              {/* Price Row */}
              <div className="p-4 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border-color)]">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-[var(--text-secondary)] block font-medium">
                      Cash Acquisition
                    </span>
                    <span className="text-3xl font-black text-[var(--text-main)] tracking-tight">
                      {car.price}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[var(--text-secondary)] block font-medium">
                      Est. Lease / Finance
                    </span>
                    <span className="text-base font-bold text-[var(--primary)]">
                      ${monthlyEst.toLocaleString()}/mo
                    </span>
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
                  <Gauge className="w-3.5 h-3.5 text-[var(--text-secondary)] mx-auto mb-1" />
                  <span className="font-bold text-[var(--text-main)] block">{car.mileage}</span>
                  <span className="text-[10px] text-[var(--text-secondary)]">Odometer</span>
                </div>
                <div className="p-2 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--text-secondary)] mx-auto mb-1" />
                  <span className="font-bold text-[var(--text-main)] block">{car.hp}</span>
                  <span className="text-[10px] text-[var(--text-secondary)]">Output</span>
                </div>
                <div className="p-2 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
                  <Calendar className="w-3.5 h-3.5 text-[var(--text-secondary)] mx-auto mb-1" />
                  <span className="font-bold text-[var(--text-main)] block">{car.acceleration}</span>
                  <span className="text-[10px] text-[var(--text-secondary)]">Acceleration</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-2">
                  Factory Packages & Spec
                </h4>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {car.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[var(--border-color)] space-y-2.5">
              {booked ? (
                <div className="p-3 rounded-xl bg-[var(--success)]/10 border border-[var(--success)]/30 text-[var(--success)] text-xs font-semibold text-center flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Viewing request sent! Our concierge will call within 15 minutes.</span>
                </div>
              ) : (
                <button
                  onClick={() => setBooked(true)}
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Private Viewing & Test Drive</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <a
                href="tel:+18005558356"
                className="w-full py-2.5 rounded-xl font-semibold text-xs border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--surface-secondary)] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                <span>Direct Hotline: (800) 555-VELO</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
