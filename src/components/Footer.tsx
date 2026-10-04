import React, { useState } from 'react'
import {
  Car,
  ShieldCheck,
  CheckCircle2,
  Mail,
  ArrowRight,
  Phone,
  MapPin,
  Clock
} from 'lucide-react'

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 5000)
      setEmail('')
    }
  }

  return (
    <footer id="contact" className="bg-[var(--surface)] border-t border-[var(--border-color)] text-[var(--text-secondary)] mt-24">
      {/* Top Advisory / Newsletter Banner */}
      <div className="border-b border-[var(--border-color)] bg-[var(--surface-secondary)]/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold tracking-wider uppercase mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Private Client Advisory
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
              Receive Off-Market & First-Look Allocations
            </h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Direct notifications for rare performance coupes, limited marque editions, and factory-certified arrivals before public listing.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your VIP client email..."
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] placeholder-[var(--text-secondary)]/60 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md shadow-blue-500/20 whitespace-nowrap transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            {subscribed && (
              <p className="mt-2 text-xs text-[var(--success)] font-semibold flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                You are registered for exclusive private client notifications.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Main Multi-Column Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Car className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-[var(--text-main)]">
                  VELOCE
                </span>
                <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold rounded tracking-wider bg-[var(--primary)]/10 text-[var(--primary)] uppercase">
                  APEX
                </span>
                <p className="text-[11px] uppercase tracking-widest text-[var(--text-secondary)] font-semibold">
                  Curated Automotive Fleet
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[var(--text-secondary)] max-w-sm">
              An elite, factory-grade motorhouse dedicated to discerning automotive enthusiasts. We curate, verify, and deliver the world's most sought-after sports coupes and executive performance cruisers.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Private Showroom: 9400 Wilshire Blvd, Beverly Hills, CA 90212</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Client Concierge: +1 (800) 555-VELO (8356)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM PST • Sunday by Appointment</span>
              </div>
            </div>
          </div>

          {/* Column 2: Inventory */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
              Curated Fleet
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inventory" className="hover:text-[var(--primary)] transition-colors">
                  Performance Coupes
                </a>
              </li>
              <li>
                <a href="#inventory" className="hover:text-[var(--primary)] transition-colors">
                  Supercars & GTs
                </a>
              </li>
              <li>
                <a href="#inventory" className="hover:text-[var(--primary)] transition-colors">
                  High-Speed Estate Wagons
                </a>
              </li>
              <li>
                <a href="#inventory" className="hover:text-[var(--primary)] transition-colors">
                  Executive Luxury Sedans
                </a>
              </li>
              <li>
                <a href="#inventory" className="hover:text-[var(--primary)] transition-colors">
                  Bespoke Restomods
                </a>
              </li>
              <li>
                <a href="#inventory" className="hover:text-[var(--primary)] transition-colors">
                  Single-Owner Low-Mileage
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: The Standard */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
              The Standard
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#standard" className="hover:text-[var(--primary)] transition-colors">
                  150-Point Certificate of Purity
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-[var(--primary)] transition-colors">
                  Enclosed Climate Transport
                </a>
              </li>
              <li>
                <a href="#standard" className="hover:text-[var(--primary)] transition-colors">
                  7-Day Money-Back Guarantee
                </a>
              </li>
              <li>
                <a href="#standard" className="hover:text-[var(--primary)] transition-colors">
                  Factory Warranty Verification
                </a>
              </li>
              <li>
                <a href="#standard" className="hover:text-[var(--primary)] transition-colors">
                  Full Paint Meter Diagnostics
                </a>
              </li>
              <li>
                <a href="#standard" className="hover:text-[var(--primary)] transition-colors">
                  CARFAX & DME Over-Rev Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
              Client Advisory
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#contact" className="hover:text-[var(--primary)] transition-colors">
                  Private Showroom Tour
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--primary)] transition-colors">
                  Custom Leasing & Financing
                </a>
              </li>
              <li>
                <a href="#consignment" className="hover:text-[var(--primary)] transition-colors">
                  Sell or Trade Valuation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--primary)] transition-colors">
                  Worldwide Air & Sea Freight
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--primary)] transition-colors">
                  Title & Registration Concierge
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--primary)] transition-colors">
                  Contact Master Technician
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Status Row */}
      <div className="border-t border-[var(--border-color)] bg-[var(--surface-secondary)]/30 py-6 px-4 sm:px-6 lg:px-8 text-xs text-[var(--text-secondary)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} VELOCE APEX MOTORWORKS INC. All rights reserved.</span>
            <a href="#terms" className="hover:text-[var(--primary)] transition-colors">
              Privacy Notice
            </a>
            <a href="#terms" className="hover:text-[var(--primary)] transition-colors">
              Terms of Acquisition
            </a>
            <a href="#terms" className="hover:text-[var(--primary)] transition-colors">
              State Licensing #DLR-88294
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--surface)] border border-[var(--border-color)] text-[var(--text-main)] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--success)]" />
              Verified Tier-1 Dealer
            </span>
            <span className="text-[var(--text-secondary)]">Encrypted 256-Bit SSL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
