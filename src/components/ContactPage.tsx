import React, { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Calendar,
  ChevronDown,
  Globe,
  Share2,
  MessageCircle,
  Video,
  Send,
  Compass
} from 'lucide-react'

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Vehicle Inquiry',
    message: '',
    newsletter: true
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'Vehicle Inquiry',
        message: '',
        newsletter: true
      })
    }, 6000)
  }

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  const faqs = [
    {
      q: 'Do you offer nationwide doorstep delivery?',
      a: 'Yes. Every vehicle in our fleet is transported nationwide in a dedicated, enclosed, climate-controlled carrier. Our driver provides an in-person orientation and title concierge right at your driveway or private garage.'
    },
    {
      q: 'Can I trade in or consign my current vehicle?',
      a: 'Absolutely. We provide direct cash buyouts as well as private client consignment for qualifying sports coupes, exotics, and collector models with transparent valuation and global marketing reach.'
    },
    {
      q: 'What does the Veloce 150-point inspection include?',
      a: 'Every vehicle undergoes comprehensive diagnostic scanning, digital paint depth metering, chassis torque verification, DME over-rev analysis, and dynamic road testing by factory-certified specialists before certification.'
    },
    {
      q: 'What financing and leasing options are available?',
      a: 'We work directly with Tier-1 automotive lenders and private wealth institutions to provide flexible balloon financing, bespoke closed-end leasing, and multi-vehicle collector lines of credit.'
    }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-16 animate-in fade-in duration-300">
      {/* ============================================================== */}
      {/* HERO HEADER                                                    */}
      {/* ============================================================== */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-color)] text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
          <span>Direct Concierge Access</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
          Let's Find Your Next Car
        </h1>

        <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
          Have a question about our curated inventory, bespoke vehicle sourcing, or nationwide
          white-glove delivery? Reach out to our dedicated client advisory team.
        </p>
      </div>

      {/* ============================================================== */}
      {/* 2-COLUMN CONTACT GRID                                         */}
      {/* ============================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Beverly Hills Flagship Details */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[var(--text-main)] tracking-tight">
                Beverly Hills Flagship
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
                Experience performance and bespoke luxury in our climate-controlled private gallery.
              </p>
            </div>

            {/* Inquiries / Mail / Location */}
            <div className="space-y-4 pt-1">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-color)] text-[var(--primary)] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block">
                    Client Inquiries
                  </span>
                  <a
                    href="tel:+18005558356"
                    className="text-sm font-bold text-[var(--text-main)] hover:text-[var(--primary)] transition-colors block"
                  >
                    +1 (800) 555-VELOCE
                  </a>
                  <span className="text-xs text-[var(--text-secondary)] font-medium">
                    +1 (310) 555-0199
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-color)] text-[var(--primary)] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block">
                    Direct Mail
                  </span>
                  <a
                    href="mailto:concierge@velocemotors.com"
                    className="text-sm font-bold text-[var(--primary)] hover:underline block break-all"
                  >
                    concierge@velocemotors.com
                  </a>
                  <span className="text-xs text-[var(--text-secondary)] font-medium">
                    Response guaranteed within 2 business hours
                  </span>
                </div>
              </div>

              {/* Showroom Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-color)] text-[var(--primary)] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block">
                    Showroom Location
                  </span>
                  <span className="text-sm font-bold text-[var(--text-main)] block">
                    9840 Wilshire Blvd, Beverly Hills, CA 90212
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] font-medium">
                    Valet reception via Bedford Drive
                  </span>
                </div>
              </div>
            </div>

            {/* Gallery Operating Hours Box */}
            <div className="p-4 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border-color)] text-xs space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-[var(--text-main)]">
                <Clock className="w-4 h-4 text-[var(--primary)]" />
                <span>Gallery Operating Hours</span>
              </div>
              <div className="space-y-1.5 pt-1 text-[var(--text-secondary)]">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-[var(--text-main)]">9:00 AM – 7:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-[var(--text-main)]">10:00 AM – 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold text-[var(--primary)]">Private Appointment Only</span>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-3">
                Connect With Our Specialists
              </span>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: Globe, label: 'Website' },
                  { icon: Share2, label: 'Share' },
                  { icon: MessageCircle, label: 'Chat Concierge' },
                  { icon: Video, label: 'Virtual Walkthrough' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/60 text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)]/40 hover:bg-[var(--surface)] transition-all flex items-center justify-center active:scale-95"
                    title={item.label}
                  >
                    <item.icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 100% Confidential Transactions Card */}
          <div className="bg-[var(--surface-secondary)] border border-[var(--border-color)] rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[var(--text-main)] block">
                100% Confidential Transactions
              </span>
              <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 leading-tight">
                Complete privacy protocols and discreet doorstep deliveries for private collectors.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Send a Dispatch Form */}
        <div className="lg:col-span-7">
          <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-black text-[var(--text-main)] tracking-tight">
              Send a Dispatch
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Fill in the details below. Our client advisor will prepare vehicle dossiers, video
              tours, or finance assessments based on your preferences.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                    Full Name <span className="text-[var(--primary)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Julian Montgomery"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-[var(--text-main)] placeholder-[var(--text-secondary)]/60 text-xs sm:text-sm focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--surface)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                    Email Address <span className="text-[var(--primary)]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="julian@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-[var(--text-main)] placeholder-[var(--text-secondary)]/60 text-xs sm:text-sm focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--surface)] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-[var(--text-main)] placeholder-[var(--text-secondary)]/60 text-xs sm:text-sm focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--surface)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                    Subject Matter <span className="text-[var(--primary)]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-[var(--text-main)] text-xs sm:text-sm appearance-none focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--surface)] transition-all pr-8"
                    >
                      <option value="Vehicle Inquiry">Vehicle Inquiry</option>
                      <option value="Consignment / Sell">Consignment / Sell</option>
                      <option value="Bespoke Sourcing">Bespoke Vehicle Sourcing</option>
                      <option value="Private Showroom Tour">Private Showroom Tour</option>
                      <option value="Financing & Leasing">Financing & Leasing Consultation</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Detailed Message */}
              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                  Detailed Message <span className="text-[var(--primary)]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention specific vehicle VINs, preferred delivery dates, or trade-in specifications..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-[var(--text-main)] placeholder-[var(--text-secondary)]/60 text-xs sm:text-sm focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--surface)] transition-all resize-none"
                />
              </div>

              {/* Row 4: Newsletter Checkbox & Submit */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[var(--text-secondary)]">
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                    className="w-4 h-4 rounded border-[var(--border-color)] text-[var(--primary)] focus:ring-[var(--primary)]"
                  />
                  <span>Keep me updated on newly curated exotic arrivals</span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all self-end sm:self-auto cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 fill-white" />
                </button>
              </div>

              {isSubmitted && (
                <div className="p-3.5 rounded-xl bg-[var(--success)]/10 border border-[var(--success)]/30 text-[var(--success)] text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Your dispatch has been delivered. A Veloce Senior Client Advisor will connect with
                    you shortly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* VISIT THE GALLERY (MAP SECTION)                               */}
      {/* ============================================================== */}
      <section className="bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Prime Destination</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
              Visit the Gallery
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
              9840 Wilshire Blvd, Beverly Hills — Valet parking provided on site.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <a
              href="https://maps.google.com/?q=9840+Wilshire+Blvd+Beverly+Hills+CA"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs border border-[var(--border-color)] bg-[var(--surface-secondary)] text-[var(--text-main)] hover:bg-[var(--surface)] transition-all"
            >
              <Navigation className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>Get Directions</span>
            </a>
            <button
              onClick={() => {
                const form = document.querySelector('form')
                form?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md shadow-blue-500/20 transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Private Visit</span>
            </button>
          </div>
        </div>

        {/* Beverly Hills Map Visualization */}
        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[var(--border-color)] bg-slate-100 dark:bg-slate-900 shadow-inner">
          {/* Stylized vector map canvas with roads and points */}
          <div className="absolute inset-0 bg-[#e5ecf3] dark:bg-[#0c1421] opacity-90">
            <svg
              className="w-full h-full stroke-slate-300 dark:stroke-slate-700/60"
              viewBox="0 0 1000 450"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Mountain & park contours */}
              <path
                d="M 0,0 Q 200,80 400,20 Q 700,90 1000,10 L 1000,0 Z"
                fill="#d2e3d5"
                className="dark:fill-[#12241b] opacity-70"
              />
              <path
                d="M 50,150 Q 250,220 550,180 Q 800,250 1000,190"
                fill="none"
                strokeWidth="12"
                stroke="#cbd5e1"
                className="dark:stroke-slate-800"
              />
              {/* Major Highway (405) */}
              <line
                x1="240"
                y1="0"
                x2="300"
                y2="450"
                strokeWidth="10"
                stroke="#94a3b8"
                className="dark:stroke-slate-700"
              />
              <line
                x1="240"
                y1="0"
                x2="300"
                y2="450"
                strokeWidth="6"
                stroke="#f8fafc"
                className="dark:stroke-slate-600"
                strokeDasharray="10 6"
              />
              {/* Wilshire Boulevard */}
              <line
                x1="0"
                y1="310"
                x2="1000"
                y2="280"
                strokeWidth="12"
                stroke="#2563eb"
                strokeOpacity="0.4"
              />
              <line
                x1="0"
                y1="310"
                x2="1000"
                y2="280"
                strokeWidth="6"
                stroke="#ffffff"
                className="dark:stroke-slate-500"
              />
              {/* Santa Monica Blvd */}
              <line
                x1="120"
                y1="400"
                x2="900"
                y2="130"
                strokeWidth="8"
                stroke="#cbd5e1"
                className="dark:stroke-slate-800"
              />
              {/* Secondary grid lines */}
              <line x1="450" y1="50" x2="480" y2="450" strokeWidth="4" stroke="#e2e8f0" className="dark:stroke-slate-800/80" />
              <line x1="650" y1="50" x2="680" y2="450" strokeWidth="4" stroke="#e2e8f0" className="dark:stroke-slate-800/80" />
              <line x1="850" y1="50" x2="880" y2="450" strokeWidth="4" stroke="#e2e8f0" className="dark:stroke-slate-800/80" />
            </svg>
          </div>

          {/* Map Landmarks as styled tags */}
          <div className="absolute top-8 left-16 px-2 py-1 rounded bg-white/80 dark:bg-slate-900/80 text-[10px] font-bold text-slate-600 dark:text-slate-300 shadow-xs backdrop-blur-xs">
            Mandeville Canyon
          </div>
          <div className="absolute top-16 left-36 px-2 py-1 rounded bg-white/80 dark:bg-slate-900/80 text-[10px] font-bold text-purple-700 dark:text-purple-300 shadow-xs backdrop-blur-xs flex items-center gap-1">
            <span>The Getty</span>
          </div>
          <div className="absolute top-10 left-96 px-2 py-1 rounded bg-white/80 dark:bg-slate-900/80 text-[10px] font-bold text-purple-700 dark:text-purple-300 shadow-xs backdrop-blur-xs">
            Greystone Mansion & Gardens
          </div>
          <div className="absolute top-20 right-52 px-2 py-1 rounded bg-white/80 dark:bg-slate-900/80 text-[10px] font-bold text-slate-700 dark:text-slate-200 shadow-xs backdrop-blur-xs">
            West Hollywood
          </div>
          <div className="absolute top-28 right-72 px-2.5 py-1 rounded-full bg-blue-500 text-white text-[10px] font-bold shadow-md flex items-center gap-1">
            <span>Beverly Center</span>
          </div>
          <div className="absolute top-36 right-44 px-2.5 py-1 rounded-full bg-blue-500 text-white text-[10px] font-bold shadow-md flex items-center gap-1">
            <span>The Grove</span>
          </div>
          <div className="absolute bottom-28 left-96 px-2.5 py-1 rounded-full bg-blue-500 text-white text-[10px] font-bold shadow-md flex items-center gap-1">
            <span>Westfield Century City</span>
          </div>

          {/* Veloce Beverly Hills Flagship Pin (Main Target) */}
          <div className="absolute top-[52%] left-[58%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
            <div className="relative">
              <span className="w-8 h-8 rounded-full bg-[var(--primary)]/30 animate-ping absolute inset-0" />
              <div className="w-9 h-9 rounded-2xl bg-[var(--primary)] text-white shadow-xl flex items-center justify-center border-2 border-white dark:border-slate-900">
                <MapPin className="w-5 h-5 fill-white stroke-[1.5]" />
              </div>
            </div>
            <div className="mt-2 px-3 py-1 rounded-xl bg-[var(--surface)] text-[var(--text-main)] font-black text-xs shadow-lg border border-[var(--border-color)] whitespace-nowrap">
              VELOCE BEVERLY HILLS
            </div>
          </div>

          {/* Complimentary Valet Box (Bottom Left Overlay) */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-xs bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--border-color)] rounded-2xl p-3 sm:p-3.5 shadow-xl flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0">
              P
            </div>
            <div>
              <span className="text-xs font-bold text-[var(--text-main)] block">
                Complimentary Valet
              </span>
              <p className="text-[10px] sm:text-[11px] text-[var(--text-secondary)] mt-0.5 leading-snug">
                Underground secure parking reception reserved exclusively for Veloce clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* FREQUENTLY ASKED QUESTIONS SECTION                             */}
      {/* ============================================================== */}
      <section className="space-y-6 pt-4 max-w-4xl mx-auto">
        <div className="text-center">
          <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase block mb-1">
            Assistance & Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-main)] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)]">
            Everything you need to know about our sourcing standards, nationwide delivery, and
            advisory services.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3 pt-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div
                key={idx}
                className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left font-bold text-sm sm:text-base text-[var(--text-main)] flex items-center justify-between gap-4 hover:bg-[var(--surface-secondary)]/40 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--primary)] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-color)]/50 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
