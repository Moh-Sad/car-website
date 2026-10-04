import React from 'react'
import {
  Clock,
  Truck,
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Headphones,
  Flag,
  Eye,
  ArrowRight,
  Phone,
  Car
} from 'lucide-react'

interface AboutPageProps {
  onBrowseCars: () => void
  onContactUs: () => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBrowseCars, onContactUs }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-16 animate-in fade-in duration-300">
      {/* ============================================================== */}
      {/* 1. HERO SECTION                                                */}
      {/* ============================================================== */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-color)] text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
          <span>Our Story & Philosophy</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight text-[var(--text-main)] leading-[1.1]">
          Driven by Better Journeys
        </h1>

        <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
          Founded on an uncompromising passion for automotive artistry and engineering excellence,
          Veloce Motors reimagines the luxury car acquisition journey into a transparent, tailored
          experience.
        </p>

        {/* Hero Image Banner */}
        <div className="mt-10 relative rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-xl aspect-[16/9] sm:aspect-[21/9] max-h-[500px] bg-black/10">
          <img
            src="/Performance blue sports coupe cruising scenic cliffside mountain highway at golden hour.png"
            alt="Veloce performance coupe at golden hour"
            className="w-full h-full object-cover"
          />

          {/* Bottom Left Badge */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 max-w-sm text-left bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 text-white shadow-lg">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block">
              Curation Benchmark
            </span>
            <p className="text-xs sm:text-sm font-semibold mt-0.5 leading-snug">
              Precision engineering meets pure open-road passion.
            </p>
          </div>

          {/* Bottom Right Badge */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 px-4 py-2 rounded-full bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-main)] text-xs font-bold shadow-lg flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
            <span>100% Certified Provenance</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. THE VELOCE STORY & COMMITMENT / VISION                     */}
      {/* ============================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Heritage & Evolution */}
        <div className="lg:col-span-7 bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase">
              HERITAGE & EVOLUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
              The Veloce Story
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                From our humble garage beginnings in 2012 to becoming the nation's premier bespoke
                dealership and verified performance marketplace, Veloce Motors was built by drivers,
                for drivers.
              </p>
              <p>
                What started as an obsessive weekend pursuit sourcing rare GT sports cars quickly
                revealed a systemic void in luxury automotive retail: archaic showroom negotiations,
                obscured vehicle provenance, and fragmented paperwork.
              </p>
              <p>
                We dismantled that paradigm. Today, our Silicon Valley flagship and national digital
                concierge combine forensic multi-point mechanical inspections with touchless,
                white-glove transport right to your private driveway.
              </p>
            </div>
          </div>

          {/* 3 Metrics Row */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[var(--border-color)] text-left">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[var(--primary)] tracking-tight block">
                2012
              </span>
              <span className="text-[11px] text-[var(--text-secondary)] font-medium">
                Founded in Palo Alto
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[var(--primary)] tracking-tight block">
                50 States
              </span>
              <span className="text-[11px] text-[var(--text-secondary)] font-medium">
                Direct Enclosed Delivery
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[var(--primary)] tracking-tight block">
                Tier-1
              </span>
              <span className="text-[11px] text-[var(--text-secondary)] font-medium">
                Selector Vault Storage
              </span>
            </div>
          </div>
        </div>

        {/* Right: Mission & Vision Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Mission Card */}
          <div className="flex-1 bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-center space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
              <Flag className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider text-[var(--primary)] uppercase block">
                OUR COMMITMENT
              </span>
              <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight mt-0.5">
                Our Mission
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              To connect passionate drivers with pristine, verified vehicles through absolute honesty,
              market transparency, and bespoke care.
            </p>
          </div>

          {/* Vision Card */}
          <div className="flex-1 bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-center space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
              <Eye className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider text-[var(--primary)] uppercase block">
                LOOKING AHEAD
              </span>
              <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight mt-0.5">
                Our Vision
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              To define the future of automotive ownership by fusing cutting-edge digital simplicity
              with world-class concierge service.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. DEMONSTRATED EXCELLENCE / BY THE NUMBERS                   */}
      {/* ============================================================== */}
      <section className="space-y-6 pt-4">
        <div className="text-center">
          <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase block mb-1">
            DEMONSTRATED EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-main)] tracking-tight">
            By the Numbers
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
            Tangible metrics that illustrate over a decade of verified prestige.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Clock,
              tag: '2012–Present',
              val: '12+',
              title: 'Years Experience',
              desc: 'Curating exceptional performance & luxury vehicles.'
            },
            {
              icon: Truck,
              tag: 'North America',
              val: '8,500+',
              title: 'Vehicles Delivered',
              desc: 'Enclosed white-glove handovers nationwide.'
            },
            {
              icon: Users,
              tag: 'Verified Reviews',
              val: '99.4%',
              title: 'Client Satisfaction',
              desc: 'Unrivaled post-sale concierge and support rating.'
            },
            {
              icon: Car,
              tag: 'Global Marques',
              val: '35+',
              title: 'Elite Marques',
              desc: 'Representing bespoke German, Italian, and British powerhouses.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
                  <item.icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-[10px] font-semibold text-[var(--text-secondary)] bg-[var(--surface-secondary)] px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[var(--text-main)] tracking-tight block">
                  {item.val}
                </span>
                <span className="text-sm font-bold text-[var(--text-main)] block mt-1">
                  {item.title}
                </span>
                <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. OUR GUIDING PILLARS / UNCOMPROMISING STANDARDS              */}
      {/* ============================================================== */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase block mb-1">
              OUR GUIDING PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-main)] tracking-tight">
              Uncompromising Standards
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md">
            Every vehicle, interaction, and purchase is held to the highest standard in automotive hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: ShieldCheck,
              title: 'Trust',
              desc: 'Every vehicle undergoes an exhaustive 150-point mechanical and provenance inspection.',
              linkText: 'Rigorous Protocols'
            },
            {
              icon: Award,
              title: 'Quality',
              desc: 'We exclusively curate vehicles in impeccable cosmetic and mechanical condition.',
              linkText: 'Pristine Baseline'
            },
            {
              icon: FileText,
              title: 'Transparency',
              desc: 'Zero hidden dealer fees, straightforward pricing, and real-time market valuations.',
              linkText: 'No Hidden Costs'
            },
            {
              icon: Headphones,
              title: 'Customer First',
              desc: 'From personalized video walk-arounds to white-glove doorstep delivery anywhere in North America.',
              linkText: 'Doorstep Concierge'
            }
          ].map((pillar, i) => (
            <div
              key={i}
              className="bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--border-color)]/60">
                <button
                  type="button"
                  onClick={onContactUs}
                  className="text-xs font-bold text-[var(--primary)] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. MASTER TECHNICIANS / 150-POINT CERTIFICATE OF PURITY        */}
      {/* ============================================================== */}
      <section className="bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase block">
            MASTER TECHNICIANS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
            The 150-Point Certificate of Purity
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            No vehicle joins the Veloce fleet without an exhaustive forensic audit. Our ASE-certified
            performance specialists inspect computerized telemetry, structural paint micrometer depths,
            thermal integrity, and complete drivetrain health.
          </p>

          <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-semibold text-[var(--text-main)]">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span>Bespoke diagnostic sweeps & factory ECU scans</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span>Paint meter analysis guaranteeing factory original panels</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span>Verified CARFAX & AutoCheck provenance dossier included</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-inner">
          <img
            src="/AB6AXuAfuGNuHuWJGjdAdU1LbLFN4PAKq0pAckvUHy-9aF6XQRyqxpMxuIqc6qendSNjiax1CWPaZS08W9a-TpOtO5SMi9EnMJIpfrTx4YMZB3k-l4wGGI8q3TBmsI7gP6JKS67V8CQiEzrNzEdrrnH49S934sL6GROtA9GrKZ3V3xRTwzT4FFYFT_UzKsLxBlvMEV_Z9D-DYHz4uZPi6Z.png"
            alt="Porsche master technician workshop"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. BOTTOM DARK CTA BANNER: READY TO FIND YOUR NEXT CAR?        */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-4">
        <span className="text-xs font-bold tracking-wider uppercase text-blue-400 block">
          TAKE THE DRIVER'S SEAT
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
          Ready to Find Your Next Car?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          Our vehicle advisors are standing by to guide you through your acquisition with tailored
          recommendations, detailed video tours, and private test schedules.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-3">
          <button
            onClick={onBrowseCars}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-lg shadow-blue-500/30 active:scale-95 transition-all cursor-pointer"
          >
            <span>Browse Cars</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onContactUs}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>Speak With an Adviser</span>
          </button>
        </div>
      </section>
    </div>
  )
}
