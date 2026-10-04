import React, { useState } from 'react'
import {
  Gauge,
  Fuel,
  Settings2,
  Search,
  SlidersHorizontal,
  ShieldCheck
} from 'lucide-react'
import { FEATURED_CARS, MARQUES } from '../data/cars'
import type { Car } from '../data/cars'

interface CarsPageProps {
  onSelectCar: (car: Car) => void
}

export const CarsPage: React.FC<CarsPageProps> = ({ onSelectCar }) => {
  const [selectedMarque, setSelectedMarque] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured')

  let filtered = FEATURED_CARS.filter((c) => {
    const matchesMarque = selectedMarque
      ? (selectedMarque === 'Porsche' && c.title.includes('GT Silver')) ||
        (selectedMarque === 'BMW M' && c.title.includes('Alpine Blue')) ||
        (selectedMarque === 'Audi Sport' && c.title.includes('Estate Wagon')) ||
        c.title.toLowerCase().includes(selectedMarque.toLowerCase())
      : true

    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.engine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesMarque && matchesSearch
  })

  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.priceRaw - b.priceRaw)
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.priceRaw - a.priceRaw)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-color)] text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-4 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Curated Fleet Inventory</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--text-main)]">
          Explore Our Vehicles
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Factory-inspected, single-owner, and certified luxury automobiles ready for immediate nationwide enclosed delivery.
        </p>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by model, engine, or category..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/50 text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-secondary)]/60 focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--surface)] transition-all"
          />
        </div>

        {/* Marque Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <button
            onClick={() => setSelectedMarque(null)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedMarque === null
                ? 'bg-[var(--primary)] text-white shadow-sm'
                : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-main)]'
            }`}
          >
            All Marques
          </button>
          {MARQUES.map((m) => (
            <button
              key={m.name}
              onClick={() => setSelectedMarque(m.name)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedMarque === m.name
                  ? 'bg-[var(--primary)] text-white shadow-sm'
                  : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-main)]'
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 self-end md:self-auto text-xs">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)]/60 text-xs font-semibold text-[var(--text-main)] focus:outline-none"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((car) => (
          <div
            key={car.id}
            onClick={() => onSelectCar(car)}
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
                    onSelectCar(car)
                  }}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
