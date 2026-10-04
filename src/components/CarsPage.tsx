import React, { useState } from 'react'
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Gauge,
  Fuel,
  Settings2,
  Bookmark,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  MessageSquare
} from 'lucide-react'

interface CarsPageProps {
  onSelectCar: (car: any) => void
  onContactClick?: () => void
}

export const CarsPage: React.FC<CarsPageProps> = ({ onSelectCar, onContactClick }) => {
  // Filter States
  const [selectedBrands, setSelectedBrands] = useState<string[]>(['Porsche', 'BMW', 'Audi'])
  const [selectedYears, setSelectedYears] = useState<string[]>(['2023', '2024'])
  const [selectedBodyStyle, setSelectedBodyStyle] = useState<string>('Coupe')
  const [selectedTransmission, setSelectedTransmission] = useState<string>('Dual-Clutch PDK')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState('Featured Picks')

  const brandsList = [
    { name: 'Porsche', count: 142 },
    { name: 'BMW', count: 98 },
    { name: 'Audi', count: 85 },
    { name: 'Mercedes-Benz', count: 76 },
    { name: 'Ferrari', count: 34 },
    { name: 'Aston Martin', count: 21 }
  ]

  const vehicles = [
    {
      id: 'porsche-911-gt3',
      brand: 'PORSCHE',
      year: '2023',
      stock: 'Stock #V911-3',
      title: 'Porsche 911 GT3',
      badge: 'Certified Pre-Owned',
      engine: '4.0L Naturally Aspirated Boxer-6 • 502 HP',
      mileage: '4,200 mi',
      transmission: '7-Spd PDK',
      fuel: 'Gasoline',
      price: '$224,900',
      priceRaw: 224900,
      image: '/AB6AXuBMqqf2NsSZTlVRS9Hi1xgtzc7Wkm7HCHnb1SSNSZg0sKGp1qTG2xnKOnLIagJRujowE8WEEUnPkQSlOzvryyeuURnFIatAvydkgXj--hWq-q743KDnetIMRnRCrxJHjCZE5NVURUlIM-MQfM8pHnPLJl72PB79cHPAVvLY5LPk6FjsfKXnOnxUt2t7-cSBtYYFgIUnhAK6kgI2N_.png'
    },
    {
      id: 'bmw-m4-competition',
      brand: 'BMW',
      year: '2024',
      stock: 'Stock #BM4-9',
      title: 'BMW M4 Competition',
      badge: 'New Arrival',
      engine: '3.0L TwinPower Turbo Inline-6 • 503 HP',
      mileage: '1,850 mi',
      transmission: '8-Spd M Auto',
      fuel: 'Gasoline',
      price: '$88,500',
      priceRaw: 88500,
      image: '/Performance blue sports coupe cruising scenic cliffside mountain highway at golden hour.png'
    },
    {
      id: 'audi-rs6-avant',
      brand: 'AUDI',
      year: '2023',
      stock: 'Stock #ARS-6',
      title: 'Audi RS6 Avant',
      badge: 'Verified Performance',
      engine: '4.0L Twin-Turbo V8 MHEV • 591 HP',
      mileage: '9,120 mi',
      transmission: '8-Spd Tiptronic',
      fuel: 'Twin-Turbo',
      price: '$121,800',
      priceRaw: 121800,
      image: '/Architectural facade stance.png'
    },
    {
      id: 'porsche-911-carrera-s',
      brand: 'PORSCHE',
      year: '2022',
      stock: 'Stock #P911-S',
      title: 'Porsche 911 Carrera S',
      badge: 'Great Value',
      engine: '3.0L Twin-Turbo Flat-6 • 443 HP',
      mileage: '11,400 mi',
      transmission: '8-Spd PDK',
      fuel: 'Gasoline',
      price: '$134,000',
      priceRaw: 134000,
      image: '/AB6AXuAfuGNuHuWJGjdAdU1LbLFN4PAKq0pAckvUHy-9aF6XQRyqxpMxuIqc6qendSNjiax1CWPaZS08W9a-TpOtO5SMi9EnMJIpfrTx4YMZB3k-l4wGGI8q3TBmsI7gP6JKS67V8CQiEzrNzEdrrnH49S934sL6GROtA9GrKZ3V3xRTwzT4FFYFT_UzKsLxBlvMEV_Z9D-DYHz4uZPi6Z.png'
    },
    {
      id: 'bmw-m8-gran-coupe',
      brand: 'BMW',
      year: '2023',
      stock: 'Stock #BM8-GC',
      title: 'BMW M8 Gran Coupe',
      badge: 'Executive Spec',
      engine: '4.4L Twin-Turbo V8 • 617 HP',
      mileage: '6,300 mi',
      transmission: '8-Spd M Auto',
      fuel: 'Gasoline',
      price: '$109,200',
      priceRaw: 109200,
      image: '/Performance blue sports coupe cruising scenic cliffside mountain highway at golden hour.png'
    },
    {
      id: 'audi-rs7-sportback',
      brand: 'AUDI',
      year: '2024',
      stock: 'Stock #RS7-24',
      title: 'Audi RS7 Sportback',
      badge: 'Hybrid Spec',
      engine: '4.0L Bi-Turbo V8 Hybrid • 621 HP',
      mileage: '2,100 mi',
      transmission: '8-Spd Tiptronic',
      fuel: 'Hybrid/Gas',
      price: '$128,400',
      priceRaw: 128400,
      image: '/Architectural facade stance.png'
    }
  ]

  const toggleBrand = (brandName: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName) ? prev.filter((b) => b !== brandName) : [...prev, brandName]
    )
  }

  const toggleYear = (yr: string) => {
    setSelectedYears((prev) =>
      prev.includes(yr) ? prev.filter((y) => y !== yr) : [...prev, yr]
    )
  }

  const resetAll = () => {
    setSelectedBrands([])
    setSelectedYears([])
    setSelectedBodyStyle('')
    setSelectedTransmission('')
    setSearchQuery('')
  }

  const filteredVehicles = vehicles.filter((v) => {
    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.some((b) => v.brand.toLowerCase() === b.toLowerCase())
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.engine.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesBrand && matchesSearch
  })

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20 space-y-10 animate-in fade-in duration-300">
      {/* ============================================================== */}
      {/* 1. HEADER                                                      */}
      {/* ============================================================== */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Curated Showroom</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-main)]">
            Find Your Car
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
            Browse 500+ verified luxury, sports, and executive vehicles ready for delivery.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
          <span>Live inventory updated 4m ago</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. SEARCH & SORT BAR                                           */}
      {/* ============================================================== */}
      <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-3 shadow-xs flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by make, model, or keywords..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border-none bg-[var(--surface-secondary)]/60 text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-secondary)]/60 focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition-all"
          />
        </div>

        <div className="relative w-full sm:w-56 shrink-0">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/60 text-xs sm:text-sm font-semibold text-[var(--text-main)] appearance-none pr-9 focus:outline-none cursor-pointer"
          >
            <option value="Featured Picks">Featured Picks</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Mileage: Low to High">Mileage: Low to High</option>
            <option value="Year: Newest First">Year: Newest First</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)] pointer-events-none" />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. MAIN CONTENT: SIDEBAR + CARS GRID                          */}
      {/* ============================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar: Filters */}
        <aside className="lg:col-span-3 bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-5 sm:p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2 font-bold text-sm text-[var(--text-main)]">
              <SlidersHorizontal className="w-4 h-4 text-[var(--primary)]" />
              <span>Filters</span>
            </div>
            <button
              onClick={resetAll}
              className="text-xs font-semibold text-[var(--primary)] hover:underline cursor-pointer"
            >
              Reset All
            </button>
          </div>

          {/* Brand */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] block">
              Brand
            </span>
            <div className="space-y-2">
              {brandsList.map((b) => {
                const isChecked = selectedBrands.includes(b.name)
                return (
                  <label
                    key={b.name}
                    className="flex items-center justify-between text-xs text-[var(--text-main)] cursor-pointer hover:text-[var(--primary)] group"
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleBrand(b.name)}
                        className="w-4 h-4 rounded border-[var(--border-color)] text-[var(--primary)] focus:ring-[var(--primary)]"
                      />
                      <span className="font-medium group-hover:text-[var(--primary)] transition-colors">
                        {b.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-[var(--text-secondary)] bg-[var(--surface-secondary)] px-2 py-0.5 rounded-full font-semibold">
                      {b.count}
                    </span>
                  </label>
                )
              })}
            </div>
          </div>

          {/* Model Family */}
          <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] block">
              Model Family
            </span>
            <div className="relative">
              <select className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-xs text-[var(--text-main)] appearance-none pr-8 focus:outline-none cursor-pointer">
                <option>All Models</option>
                <option>911 Series</option>
                <option>M Power</option>
                <option>RS Sport</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--text-secondary)] pointer-events-none" />
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-3 pt-2 border-t border-[var(--border-color)]">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold uppercase tracking-wider text-[var(--text-main)]">
                Price Range
              </span>
              <span className="text-[var(--primary)] font-bold">$40,000 - $350,000+</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-[var(--surface-secondary)]/60 border border-[var(--border-color)] text-center">
                <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] block font-semibold">
                  MIN
                </span>
                <span className="text-xs font-bold text-[var(--text-main)]">$40,000</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--surface-secondary)]/60 border border-[var(--border-color)] text-center">
                <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] block font-semibold">
                  MAX
                </span>
                <span className="text-xs font-bold text-[var(--text-main)]">$350,000+</span>
              </div>
            </div>
          </div>

          {/* Model Year */}
          <div className="space-y-3 pt-2 border-t border-[var(--border-color)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] block">
              Model Year
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {['2020', '2021', '2022', '2023', '2024', '2025'].map((yr) => {
                const isSelected = selectedYears.includes(yr)
                return (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => toggleYear(yr)}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--primary)] text-white shadow-xs'
                        : 'bg-[var(--surface-secondary)] text-[var(--text-main)] hover:bg-[var(--border-color)]/60'
                    }`}
                  >
                    {yr}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Body Style */}
          <div className="space-y-3 pt-2 border-t border-[var(--border-color)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] block">
              Body Style
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['Coupe', 'Sedan', 'SUV', 'Wagon', 'Convertible'].map((style) => {
                const isSelected = selectedBodyStyle === style
                return (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setSelectedBodyStyle(isSelected ? '' : style)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--primary)] text-white'
                        : 'bg-[var(--surface-secondary)] text-[var(--text-main)] hover:bg-[var(--border-color)]/60'
                    }`}
                  >
                    {style}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Fuel Type */}
          <div className="space-y-2.5 pt-2 border-t border-[var(--border-color)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] block">
              Fuel Type
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {['Gasoline', 'Hybrid', 'Electric', 'Diesel'].map((fuel, i) => (
                <label key={fuel} className="flex items-center gap-2 cursor-pointer text-[var(--text-main)]">
                  <input
                    type="checkbox"
                    defaultChecked={i === 0}
                    className="w-3.5 h-3.5 rounded border-[var(--border-color)] text-[var(--primary)]"
                  />
                  <span className="text-[11px] font-medium">{fuel}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Transmission */}
          <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] block">
              Transmission
            </span>
            <div className="space-y-1.5 text-xs text-[var(--text-main)]">
              {['Automatic', 'Manual', 'Dual-Clutch PDK'].map((t) => (
                <label key={t} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="transmission"
                    checked={selectedTransmission === t}
                    onChange={() => setSelectedTransmission(t)}
                    className="w-3.5 h-3.5 text-[var(--primary)]"
                  />
                  <span className="text-[11px] font-medium">{t}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="pt-2">
            <button
              type="button"
              className="w-full py-3 rounded-xl font-bold text-xs bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Apply Filters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>

        {/* Right Content: Grid & Pagination */}
        <div className="lg:col-span-9 space-y-6">
          {/* Active Filters Bar */}
          <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 font-medium text-[var(--text-secondary)]">
              <span className="font-bold text-[var(--text-main)]">Showing 18</span> of 524 vehicles
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[var(--text-secondary)] text-[11px]">Active:</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-color)] text-[var(--text-main)] font-semibold text-[11px]">
                Coupe
                <X className="w-3 h-3 text-[var(--text-secondary)] hover:text-[var(--primary)] cursor-pointer" />
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-color)] text-[var(--text-main)] font-semibold text-[11px]">
                2023 - 2024
                <X className="w-3 h-3 text-[var(--text-secondary)] hover:text-[var(--primary)] cursor-pointer" />
              </span>
            </div>
          </div>

          {/* 6 Vehicle Cards Grid (2 rows x 3 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredVehicles.map((car) => (
              <div
                key={car.id}
                onClick={() => onSelectCar(car)}
                className="group bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[var(--primary)]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--surface)]/90 backdrop-blur-md text-[var(--text-main)] border border-[var(--border-color)] shadow-xs">
                      {car.badge}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[var(--surface)]/85 backdrop-blur-md border border-[var(--border-color)] flex items-center justify-center shadow-xs"
                  >
                    <Bookmark className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="font-bold tracking-wider text-[var(--text-secondary)]">
                        {car.year} {car.brand}
                      </span>
                      <span className="text-[10px] text-[var(--text-secondary)] font-mono">
                        {car.stock}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[var(--text-main)] tracking-tight group-hover:text-[var(--primary)] transition-colors">
                      {car.title}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--text-secondary)] font-medium line-clamp-1">
                      {car.engine}
                    </p>

                    {/* Spec Pills */}
                    <div className="grid grid-cols-3 gap-1.5 mt-4 text-[11px] text-[var(--text-secondary)]">
                      <div className="p-2 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-color)]/60 text-center font-medium">
                        <Gauge className="w-3.5 h-3.5 mx-auto mb-1 text-[var(--primary)]" />
                        <span>{car.mileage}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-color)]/60 text-center font-medium">
                        <Settings2 className="w-3.5 h-3.5 mx-auto mb-1 text-[var(--primary)]" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-color)]/60 text-center font-medium">
                        <Fuel className="w-3.5 h-3.5 mx-auto mb-1 text-[var(--primary)]" />
                        <span>{car.fuel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block">
                        PRICE
                      </span>
                      <span className="text-xl font-black text-[var(--text-main)] tracking-tight">
                        {car.price}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onSelectCar(car)
                      }}
                      className="px-3.5 py-2 rounded-xl font-bold text-xs bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs">
            <span className="text-[var(--text-secondary)]">
              Showing page <strong className="text-[var(--text-main)]">1</strong> of 29
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="w-8 h-8 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-secondary)] flex items-center justify-center hover:bg-[var(--surface-secondary)] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-xl bg-[var(--primary)] text-white font-bold flex items-center justify-center shadow-xs"
              >
                1
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] font-semibold flex items-center justify-center hover:bg-[var(--surface-secondary)] cursor-pointer"
              >
                2
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] font-semibold flex items-center justify-center hover:bg-[var(--surface-secondary)] cursor-pointer"
              >
                3
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] font-semibold flex items-center justify-center hover:bg-[var(--surface-secondary)] cursor-pointer"
              >
                4
              </button>
              <span className="px-1 text-[var(--text-secondary)]">...</span>
              <button
                type="button"
                className="w-8 h-8 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] font-semibold flex items-center justify-center hover:bg-[var(--surface-secondary)] cursor-pointer"
              >
                29
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-secondary)] flex items-center justify-center hover:bg-[var(--surface-secondary)] cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 4. BOTTOM CONCIERGE SOURCING BANNER                            */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl text-center md:text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block">
            Veloce Concierge Sourcing
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Looking for a tailored build or allocation?
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            Our private acquisition advisors locate unlisted GT allocations, rare air-cooled
            specifications, and custom off-market collections worldwide.
          </p>
        </div>

        <button
          onClick={onContactClick}
          className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm shadow-lg whitespace-nowrap active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-blue-600" />
          <span>Speak with an Advisor</span>
        </button>
      </section>
    </div>
  )
}
