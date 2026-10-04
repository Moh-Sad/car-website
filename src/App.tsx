import { useState } from 'react'
import {
  Car as CarIcon,
  ShieldCheck,
  CheckCircle2,
  Users,
  Star,
  ExternalLink,
  Gauge,
  Fuel,
  Settings2,
  ArrowRight,
  Sliders,
  Truck,
  RotateCcw,
  Flame,
  Compass,
  CircleDot
} from 'lucide-react'
import { Navbar, type TabType } from './components/Navbar'
import { Footer } from './components/Footer'
import { ContactPage } from './components/ContactPage'
import { CarsPage } from './components/CarsPage'
import { CarDetailPage } from './components/CarDetailPage'
import { AboutPage } from './components/AboutPage'
import { FEATURED_CARS, MARQUES } from './data/cars'
import type { Car } from './data/cars'
import { ThemeProvider } from './context/ThemeContext'

export function CarWebsite() {
  const [currentTab, setCurrentTab] = useState<TabType>('home')
  const [selectedCarDetail, setSelectedCarDetail] = useState<Car | null>(null)
  const [activeMarque, setActiveMarque] = useState<string | null>(null)

  const openHeroCar = () => {
    const heroCar = FEATURED_CARS.find((c) => c.id === 'alpine-blue-m-coupe') || FEATURED_CARS[0]
    setSelectedCarDetail(heroCar)
    setCurrentTab('car')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTabChange = (tab: TabType) => {
    setCurrentTab(tab)
    setSelectedCarDetail(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectCar = (car: any) => {
    setSelectedCarDetail(car)
    setCurrentTab('car')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const filteredCars = activeMarque
    ? FEATURED_CARS.filter((c) => {
        if (activeMarque === 'Porsche') return c.title.includes('GT Silver')
        if (activeMarque === 'BMW M') return c.title.includes('Alpine Blue')
        if (activeMarque === 'Audi Sport') return c.title.includes('Estate Wagon')
        return true
      })
    : FEATURED_CARS

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] flex flex-col font-sans transition-colors duration-200">
      {/* Navbar Component with Active Tab State */}
      <Navbar
        currentTab={currentTab}
        onTabChange={handleTabChange}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* TAB 1: HOME */}
        {currentTab === 'home' && (
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 space-y-16 animate-in fade-in duration-300">
            {/* ============================================================== */}
            {/* HERO SECTION                                                  */}
            {/* ============================================================== */}
            <section className="text-center pt-6 sm:pt-10 flex flex-col items-center">
              {/* Exclusivity & Performance Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-color)] text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                <span>Exclusivity & Performance</span>
              </div>

              {/* Main Hero Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-[var(--text-main)] leading-[1.08] max-w-4xl mx-auto">
                Find the Car That Fits <br className="hidden sm:inline" />
                Your Journey
              </h1>

              {/* Subtitle */}
              <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                Explore an elite curated fleet of certified pre-owned and brand-new luxury automobiles,
                performance coupes, and executive cruisers engineered without compromise.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <button
                  onClick={() => handleTabChange('car')}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-lg shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Explore Cars</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleTabChange('about')}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm bg-[var(--surface-secondary)] hover:bg-[var(--border-color)]/50 text-[var(--text-main)] border border-[var(--border-color)] transition-all cursor-pointer"
                >
                  <span>Learn More</span>
                </button>
              </div>

              {/* Hero Image Showcase Card */}
              <div className="mt-12 w-full relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-[var(--border-color)] group bg-black/5 aspect-[16/9] sm:aspect-[21/10] max-h-[580px]">
                <img
                  src="/Performance blue sports coupe cruising scenic cliffside mountain highway at golden hour.png"
                  alt="2024 Alpine Blue M-Coupe on mountain highway"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Top Right Expand Icon Button */}
                <button
                  onClick={openHeroCar}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 w-11 h-11 rounded-2xl bg-[var(--surface)]/85 hover:bg-[var(--surface)] backdrop-blur-md border border-[var(--border-color)] text-[var(--text-main)] flex items-center justify-center shadow-lg transition-all active:scale-95 group/btn cursor-pointer"
                  title="Expand Vehicle Details"
                >
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform text-[var(--text-main)]" />
                </button>

                {/* Bottom Left Floating Pills */}
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 flex flex-wrap items-center gap-2.5 sm:gap-3 z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border-color)] text-xs font-semibold text-[var(--text-main)] shadow-md">
                    <CarIcon className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>Apex Edition • 503 HP • 0-60 in 3.4s</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border-color)] text-xs font-semibold text-[var(--text-main)] shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-ping" />
                    <span className="w-2 h-2 rounded-full bg-[var(--success)] -ml-4" />
                    <span>Ready for Delivery</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ============================================================== */}
            {/* STATS / METRICS BAR                                           */}
            {/* ============================================================== */}
            <section className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                    <CarIcon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight block">
                      500+
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                      CARS AVAILABLE
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight block">
                      30+
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                      GLOBAL BRANDS
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight block">
                      1,000+
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                      HAPPY CUSTOMERS
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 stroke-[2.2] fill-[var(--primary)]/20 text-[var(--primary)]" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight block">
                      99.4%
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                      VERIFIED RATING
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* ============================================================== */}
            {/* CURATED MARQUE PARTNERS                                       */}
            {/* ============================================================== */}
            <section id="marques" className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  CURATED MARQUE PARTNERS
                </span>
                <button
                  onClick={() => handleTabChange('about')}
                  className="text-xs font-semibold text-[var(--primary)] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Tier-1 Factory Certifications
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {MARQUES.map((marque) => {
                  const isSelected = activeMarque === marque.name
                  return (
                    <button
                      key={marque.name}
                      onClick={() => setActiveMarque(isSelected ? null : marque.name)}
                      className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-md'
                          : 'bg-[var(--surface)] text-[var(--text-main)] border-[var(--border-color)] hover:border-[var(--primary)]/50 hover:bg-[var(--surface-secondary)]'
                      }`}
                    >
                      {marque.name === 'Porsche' && <ShieldCheck className="w-4 h-4 opacity-80" />}
                      {marque.name === 'BMW M' && <Gauge className="w-4 h-4 opacity-80" />}
                      {marque.name === 'Mercedes-AMG' && <Star className="w-4 h-4 opacity-80" />}
                      {marque.name === 'Audi Sport' && <CircleDot className="w-4 h-4 opacity-80" />}
                      {marque.name === 'Ferrari' && <Flame className="w-4 h-4 opacity-80" />}
                      {marque.name === 'Aston Martin' && <Compass className="w-4 h-4 opacity-80" />}
                      <span>{marque.name}</span>
                    </button>
                  )
                })}
              </div>
            </section>

            {/* ============================================================== */}
            {/* FEATURED CARS SECTION                                         */}
            {/* ============================================================== */}
            <section id="inventory" className="space-y-6 pt-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                    <span>Ready for Transit</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[var(--text-main)] tracking-tight">
                    Featured Cars
                  </h2>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    Hand-picked performance and luxury vehicles available for nationwide delivery.
                  </p>
                </div>

                <button
                  onClick={() => handleTabChange('car')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors self-start md:self-auto cursor-pointer"
                >
                  <span>View All Inventory (524)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3 Cars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredCars.map((car) => (
                  <div
                    key={car.id}
                    onClick={() => handleSelectCar(car)}
                    className="group bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[var(--primary)]/40 transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                      <img
                        src={car.image}
                        alt={car.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-[var(--surface)]/90 backdrop-blur-md text-[var(--text-main)] border border-[var(--border-color)] shadow-sm">
                          {car.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="font-bold tracking-wider text-[var(--primary)] uppercase">
                            {car.category}
                          </span>
                          <span className="text-[var(--text-secondary)] font-medium">
                            {car.stock}
                          </span>
                        </div>

                        <h3 className="text-xl font-extrabold text-[var(--text-main)] tracking-tight group-hover:text-[var(--primary)] transition-colors">
                          {car.title}
                        </h3>
                        <p className="mt-1 text-xs text-[var(--text-secondary)] font-medium">
                          {car.engine}
                        </p>

                        <div className="flex items-center gap-2 mt-5 text-xs text-[var(--text-secondary)]">
                          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-color)]/60 font-medium">
                            <Gauge className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                            <span>{car.mileage}</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-color)]/60 font-medium">
                            <Fuel className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                            <span>{car.fuel}</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border-color)]/60 font-medium">
                            <Settings2 className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                            <span>{car.transmission}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-5 border-t border-[var(--border-color)] flex items-center justify-between">
                        <div>
                          <span className="text-[11px] font-medium text-[var(--text-secondary)] block">
                            Cash or Finance
                          </span>
                          <span className="text-2xl font-black text-[var(--text-main)] tracking-tight">
                            {car.price}
                          </span>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleSelectCar(car)
                          }}
                          className="px-4 py-2.5 rounded-xl font-bold text-xs bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ============================================================== */}
            {/* THE VELOCE STANDARD SECTION                                   */}
            {/* ============================================================== */}
            <section
              id="standard"
              className="bg-[var(--surface-secondary)] border border-[var(--border-color)] rounded-3xl sm:rounded-[36px] p-8 sm:p-12 shadow-sm"
            >
              <div className="max-w-2xl">
                <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase block mb-2">
                  THE VELOCE STANDARD
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
                  Engineered Confidence in Every Acquisition
                </h2>
                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                  Every vehicle is scrutinized through meticulous protocols before qualifying for customer delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
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

                <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
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

                <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
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
        )}

        {/* TAB 2: CAR (Either Showroom Grid OR Dedicated Car Detail Page) */}
        {currentTab === 'car' && (
          selectedCarDetail ? (
            <CarDetailPage
              car={selectedCarDetail}
              onBack={() => {
                setSelectedCarDetail(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              onContactClick={() => handleTabChange('contact')}
            />
          ) : (
            <CarsPage
              onSelectCar={handleSelectCar}
              onContactClick={() => handleTabChange('contact')}
            />
          )
        )}

        {/* TAB 3: ABOUT US */}
        {currentTab === 'about' && (
          <AboutPage
            onBrowseCars={() => handleTabChange('car')}
            onContactUs={() => handleTabChange('contact')}
          />
        )}

        {/* TAB 4: CONTACT US */}
        {currentTab === 'contact' && <ContactPage />}
      </main>

      {/* Footer Component on All Pages */}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <CarWebsite />
    </ThemeProvider>
  )
}
