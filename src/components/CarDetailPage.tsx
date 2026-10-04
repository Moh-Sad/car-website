import React, { useState } from 'react'
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Send,
  Phone,
  Clock,
  Sparkles,
  Maximize2,
  Bookmark,
  ChevronRight,
  ArrowRight,
  MapPin,
  Settings,
  Zap,
  Gauge,
  Fuel,
  Sliders,
  Car as CarIcon,
  Check,
  ArrowLeft
} from 'lucide-react'

interface CarDetailPageProps {
  car?: any
  onBack: () => void
  onContactClick?: () => void
}

export const CarDetailPage: React.FC<CarDetailPageProps> = ({
  car: initialCar,
  onBack,
  onContactClick
}) => {
  const images = [
    {
      src: initialCar?.image || '/AB6AXuBMqqf2NsSZTlVRS9Hi1xgtzc7Wkm7HCHnb1SSNSZg0sKGp1qTG2xnKOnLIagJRujowE8WEEUnPkQSlOzvryyeuURnFIatAvydkgXj--hWq-q743KDnetIMRnRCrxJHjCZE5NVURUlIM-MQfM8pHnPLJl72PB79cHPAVvLY5LPk6FjsfKXnOnxUt2t7-cSBtYYFgIUnhAK6kgI2N_.png',
      alt: 'Vehicle Studio View'
    },
    {
      src: '/Performance blue sports coupe cruising scenic cliffside mountain highway at golden hour.png',
      alt: 'Coastal Highway View'
    },
    {
      src: '/Architectural facade stance.png',
      alt: 'Architectural Stance'
    },
    {
      src: '/AB6AXuCwSDQYWLkg_f94OXk78GB8GS1Iwq7vzvaOV3GC70XZMdMqmzqAP3W_nN80YgmLCnoXBw08qvszFpwEAuKj45S5Jdat0d4kL7Afze3SrGtL46t793EhyiutOKZJ7znLqtCA8mSLR0zS3dT1oqGG1jX2tj_9jePzHeTyzIqQV1UIFqZ_iYA7TuRMVmdbKATGYO87kx8Zc4MPvVnr7w.png',
      alt: 'Cockpit View'
    }
  ]

  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const carTitle = initialCar?.title || 'Porsche 911 GT3 (992)'
  const carPrice = initialCar?.price || '$224,900'
  const carEngine = initialCar?.engine || '2023 • 4.0L Naturally Aspirated Flat-6'

  const similarVehicles = [
    {
      id: 'bmw-m4',
      badge: 'Great Deal',
      title: 'BMW M4 Competition xDrive',
      sub: '2024 • 3.0L Twin-Turbo I6',
      price: '$89,400',
      specs: '3,120 mi • AWD • 503 HP',
      image: '/Performance blue sports coupe cruising scenic cliffside mountain highway at golden hour.png'
    },
    {
      id: 'audi-rs6',
      badge: 'Certified',
      title: 'Audi RS6 Avant Performance',
      sub: '2023 • 4.0L Twin-Turbo V8',
      price: '$134,800',
      specs: '9,456 mi • Quattro AWD • 621 HP',
      image: '/Architectural facade stance.png'
    },
    {
      id: 'porsche-gts',
      badge: 'New Arrival',
      title: 'Porsche 911 Carrera GTS',
      sub: '2022 • 3.0L Twin-Turbo Flat-6',
      price: '$168,900',
      specs: '6,180 mi • RWD • 473 HP',
      image: '/Showroom exterior view.png'
    }
  ]

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20 space-y-12 animate-in fade-in duration-300">
      {/* Top Breadcrumb & Back button */}
      <div className="flex items-center justify-between">
        <nav className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-medium">
          <button
            onClick={onBack}
            className="hover:text-[var(--primary)] cursor-pointer inline-flex items-center gap-1 font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Inventory</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="hover:text-[var(--text-main)] cursor-pointer" onClick={onBack}>
            Cars
          </span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="hover:text-[var(--text-main)]">Porsche</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[var(--text-main)] font-bold">{carTitle}</span>
        </nav>
      </div>

      {/* Main Vehicle Showcase & Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Gallery (Main image + Thumbnails) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[var(--border-color)] bg-black/10 shadow-lg group">
            <img
              src={images[activeImageIdx].src}
              alt={images[activeImageIdx].alt}
              className="w-full h-full object-cover transition-all duration-500 ease-out"
            />

            {/* Badges Overlay (Top Left) */}
            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--surface)]/90 backdrop-blur-md text-[var(--text-main)] border border-[var(--border-color)] shadow-xs">
                Certified Pre-Owned
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--surface)]/90 backdrop-blur-md text-[var(--text-main)] border border-[var(--border-color)] shadow-xs">
                1-Owner
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--surface)]/90 backdrop-blur-md text-[var(--text-main)] border border-[var(--border-color)] shadow-xs">
                Clean Carfax
              </span>
            </div>

            {/* Top Right Actions */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="w-9 h-9 rounded-full bg-[var(--surface)]/85 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--surface)] flex items-center justify-center shadow-xs transition-transform active:scale-90"
              >
                <Bookmark
                  className={`w-4 h-4 ${isBookmarked ? 'fill-[var(--primary)] text-[var(--primary)]' : ''}`}
                />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-[var(--surface)]/85 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--surface)] flex items-center justify-center shadow-xs"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Right 4 HD Photos Badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>4 HD Photos</span>
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-4 gap-3">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`relative aspect-[16/10] rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImageIdx === idx
                    ? 'border-[var(--primary)] ring-2 ring-[var(--primary)]/30 scale-102 shadow-md'
                    : 'border-[var(--border-color)] opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                {idx === 3 && (
                  <span className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-bold">
                    Cockpit
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Overview Card */}
        <div className="lg:col-span-5 bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold tracking-wider text-[var(--primary)] uppercase">
              IN STOCK • BEVERLY HILLS
            </span>
            <span className="flex items-center gap-1.5 text-[var(--success)] font-bold">
              <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
              Verified Available
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-main)] tracking-tight">
              {carTitle}
            </h1>
            <p className="mt-1 text-sm font-semibold text-[var(--text-secondary)]">
              {carEngine}
            </p>
          </div>

          {/* Price Box */}
          <div className="p-5 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border-color)] space-y-2">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl sm:text-4xl font-black text-[var(--text-main)] tracking-tight">
                {carPrice}
              </span>
              <div className="text-right">
                <span className="text-sm font-bold text-[var(--primary)]">
                  Est. $2,980<span className="text-xs font-medium text-[var(--text-secondary)]">/mo</span>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)] border-t border-[var(--border-color)]/60 pt-2">
              <span>Based on $45,000 down, 72 months @ 5.4% APR</span>
              <button
                type="button"
                onClick={onContactClick}
                className="text-[var(--primary)] font-bold hover:underline cursor-pointer"
              >
                Customize Terms
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Finished in pristine GT Silver Metallic over Black Leather and Race-Tex interior. Equipped
            with the Front Axle Lift system, Carbon Ceramic Brakes (PCCB), and lightweight sport
            buckets. Maintained exclusively by certified Porsche service specialists.
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[var(--surface-secondary)]/80 border border-[var(--border-color)] flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[var(--primary)] shrink-0" />
              <div>
                <span className="font-bold text-[var(--text-main)] block">150-Pt Inspection</span>
                <span className="text-[10px] text-[var(--text-secondary)]">Factory Certified</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[var(--surface-secondary)]/80 border border-[var(--border-color)] flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-[var(--primary)] shrink-0" />
              <div>
                <span className="font-bold text-[var(--text-main)] block">Enclosed Delivery</span>
                <span className="text-[10px] text-[var(--text-secondary)]">Nationwide Direct</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('inquire-form')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all text-center cursor-pointer"
            >
              Contact Seller
            </button>
            <button
              onClick={onContactClick}
              className="py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm border border-[var(--border-color)] bg-[var(--surface-secondary)] text-[var(--text-main)] hover:bg-[var(--surface)] transition-all text-center cursor-pointer"
            >
              Request Info
            </button>
          </div>

          <div className="text-center text-[11px] text-[var(--text-secondary)] pt-1">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--primary)]" />
              Veloce Certified Center • Beverly Hills Sanctuary
            </span>
          </div>
        </div>
      </div>

      {/* Technical Specifications Grid */}
      <section className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--border-color)] pb-4">
          <div>
            <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase block mb-1">
              ENGINEERING PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
              Technical Specifications
            </h2>
          </div>
          <span className="text-xs text-[var(--text-secondary)] font-mono">
            VIN: WP0AC2A98PS239190 • Stock #V-91102
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: Settings, label: 'Engine', val: '4.0L Boxer 6-Cyl', sub: 'Naturally Aspirated' },
            { icon: Zap, label: 'Horsepower', val: '502 HP', sub: '@ 8,400 RPM (9k Redline)' },
            { icon: Sliders, label: 'Transmission', val: '7-Speed PDK', sub: 'Dual-Clutch Automatic' },
            { icon: Fuel, label: 'Fuel Type', val: '93 Octane', sub: 'Premium Unleaded' },
            { icon: Gauge, label: 'Mileage', val: '4,200 mi', sub: 'Verified Highway Miles' },
            { icon: CarIcon, label: 'Drive Type', val: 'Rear-Wheel Drive', sub: 'Rear-Axle Steering (RAS)' },
            { icon: ShieldCheck, label: 'Body Type', val: '2-Door Coupe', sub: 'Aluminum-Steel Composite' },
            { icon: Sparkles, label: 'Interior Seating', val: '2 Sport Buckets', sub: 'Carbon Fiber Reinforced' }
          ].map((spec, i) => (
            <div
              key={i}
              className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between"
            >
              <div className="w-9 h-9 rounded-xl bg-[var(--surface-secondary)] text-[var(--primary)] flex items-center justify-center mb-3">
                <spec.icon className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block">
                  {spec.label}
                </span>
                <span className="text-sm sm:text-base font-black text-[var(--text-main)] block mt-0.5">
                  {spec.val}
                </span>
                <span className="text-[11px] text-[var(--text-secondary)] block mt-0.5">
                  {spec.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Options & Packages */}
      <section className="bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase block mb-1">
            EQUIPMENT & OPTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
            Curated Options & Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Performance */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-sm text-[var(--text-main)] pb-2 border-b border-[var(--border-color)]">
              <Zap className="w-4 h-4 text-[var(--primary)]" />
              <span>Performance</span>
            </div>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
              {[
                'Sport Chrono Package with Lap Trigger',
                'Porsche Ceramic Composite Brakes (PCCB)',
                'Front Axle Hydraulic Lift System',
                'Switchable Sports Exhaust System',
                'PASM Sport Tuned Suspension'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--text-main)] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Comfort & Tech */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-sm text-[var(--text-main)] pb-2 border-b border-[var(--border-color)]">
              <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              <span>Comfort & Tech</span>
            </div>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
              {[
                'BOSE® Surround Sound System (12 Speakers)',
                'Porsche Communication Mgmt (PCM 6.0)',
                'Wireless Apple CarPlay® & Android Auto™',
                'Dual-Zone Automatic Climate Control',
                'Carbon Fiber Lightweight Bucket Seats'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--text-main)] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Driver Aid */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-sm text-[var(--text-main)] pb-2 border-b border-[var(--border-color)]">
              <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
              <span>Safety & Driver Aid</span>
            </div>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
              {[
                'LED Matrix Design Headlights (PDLS+)',
                'ParkAssist Rear with Reversing Camera',
                'Lane Change Assist & Traffic Sign Recog',
                'Porsche Side Impact Protection (POSIP)',
                'Tire Pressure Monitoring System (TPMS)'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--text-main)] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Showroom & Inquiry Form */}
      <div id="inquire-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
          <div>
            <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase block mb-1">
              AUTHORIZED SHOWROOM
            </span>
            <h3 className="text-2xl font-black text-[var(--text-main)] tracking-tight">
              Veloce Beverly Hills
            </h3>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Visit our flagship sanctuary for a private consultation or test track appointment.
            </p>
          </div>

          <div className="relative h-44 rounded-2xl overflow-hidden border border-[var(--border-color)] bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#e3ecf5] dark:bg-[#0c1421] opacity-90" />
            <div className="relative z-10 px-3.5 py-1.5 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] shadow-md flex items-center gap-2 text-xs font-bold text-[var(--text-main)]">
              <MapPin className="w-4 h-4 text-[var(--primary)]" />
              <span>9840 Wilshire Blvd, Beverly Hills</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 text-xs border-t border-[var(--border-color)]">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] block">Direct Concierge</span>
                <span className="font-bold text-[var(--text-main)]">+1 (310) 555-0194</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] block">Showroom Hours</span>
                <span className="font-bold text-[var(--text-main)]">Mon - Sat: 9am - 7pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
          <div>
            <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase block mb-1">
              INQUIRE ABOUT THIS CAR
            </span>
            <h3 className="text-2xl font-black text-[var(--text-main)] tracking-tight">
              Schedule Viewing or Test Drive
            </h3>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Speak directly with our Porsche certified client advisor.
            </p>
          </div>

          <form onSubmit={handleInquiry} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Julian Vance"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-xs text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--surface)] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-xs text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--surface)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="julian@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-xs text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--surface)] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Inquiry Type</label>
              <input
                type="text"
                defaultValue="Reserve Private Test Drive"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-xs text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--surface)] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Message (Optional)</label>
              <textarea
                rows={2}
                placeholder="I'm interested in viewing the 2023 GT3 this Friday afternoon..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-xs text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--surface)] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md shadow-blue-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send Direct Inquiry</span>
              <Send className="w-3.5 h-3.5 fill-white" />
            </button>

            {formSubmitted && (
              <p className="text-xs text-[var(--success)] font-semibold flex items-center justify-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                Inquiry received. Our specialist will call you directly.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Similar Vehicles You Might Like */}
      <section className="space-y-6 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase block mb-1">
              CURATED ALTERNATIVES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
              Similar Vehicles You Might Like
            </h2>
          </div>
          <button
            onClick={onBack}
            className="text-xs font-bold text-[var(--primary)] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View All Inventory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {similarVehicles.map((similar) => (
            <div
              key={similar.id}
              className="group bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                <img
                  src={similar.image}
                  alt={similar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--surface)]/90 backdrop-blur-md text-[var(--text-main)] border border-[var(--border-color)]">
                    {similar.badge}
                  </span>
                </div>
                <button
                  type="button"
                  className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[var(--surface)]/85 backdrop-blur-md border border-[var(--border-color)] flex items-center justify-center"
                >
                  <Bookmark className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                </button>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <span className="text-[10px] text-[var(--text-secondary)] font-medium">
                    {similar.sub}
                  </span>
                  <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
                    {similar.title}
                  </h4>
                </div>

                <div className="text-[11px] text-[var(--text-secondary)] font-medium">
                  {similar.specs}
                </div>

                <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[var(--text-secondary)] block">Listed Price</span>
                    <span className="text-lg font-black text-[var(--text-main)]">{similar.price}</span>
                  </div>

                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="px-3.5 py-1.5 rounded-xl font-bold text-xs bg-[var(--surface-secondary)] hover:bg-[var(--border-color)]/60 text-[var(--text-main)] border border-[var(--border-color)] transition-all cursor-pointer"
                  >
                    Inspect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
