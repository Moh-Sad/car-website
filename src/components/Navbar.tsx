import React, { useState } from 'react'
import {
  Car,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export type TabType = 'home' | 'car' | 'about' | 'contact'

interface NavbarProps {
  currentTab: TabType
  onTabChange: (tab: TabType) => void
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange
}) => {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'car', label: 'Car' },
    { id: 'about', label: 'About us' },
    { id: 'contact', label: 'Contact us' }
  ]

  const handleNavClick = (tab: TabType) => {
    onTabChange(tab)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--surface)]/90 backdrop-blur-md shadow-sm border-b border-[var(--border-color)]'
          : 'bg-[var(--bg-page)]/95 backdrop-blur-sm border-b border-[var(--border-color)]/60'
      }`}
    >
      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer bg-transparent border-none p-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <Car className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-[var(--text-main)]">
                  VELOCE
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded tracking-wider bg-[var(--primary)]/10 text-[var(--primary)] uppercase">
                  APEX
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[var(--text-secondary)] -mt-1">
                Curated Automobiles
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Active Tab Highlight */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'text-[var(--primary)] bg-[var(--surface-secondary)] border border-[var(--border-color)] font-bold shadow-xs'
                      : 'text-[var(--text-main)] hover:text-[var(--primary)] hover:bg-[var(--surface-secondary)]/50 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--surface-secondary)] hover:cursor-pointer transition-all border border-transparent"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[var(--text-main)] stroke-[2.2]" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--text-main)] stroke-[2.2]" />
              )}
            </button>

            {/* Browse Cars Button (Switches to 'car' tab) */}
            <button
              onClick={() => handleNavClick('car')}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                currentTab === 'car'
                  ? 'bg-[var(--primary-hover)] text-white shadow-lg ring-2 ring-[var(--primary)]/30'
                  : 'bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md shadow-blue-500/20 active:scale-[0.98]'
              }`}
            >
              <span>Browse Cars</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:bg-[var(--surface-secondary)] transition-all cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--surface)] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'text-[var(--primary)] bg-[var(--surface-secondary)] font-bold border border-[var(--border-color)]'
                      : 'text-[var(--text-main)] hover:bg-[var(--surface-secondary)]'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}

            <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
              <button
                onClick={() => handleNavClick('car')}
                className="w-full py-3 rounded-xl font-semibold text-center bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-md transition-all flex items-center justify-center cursor-pointer"
              >
                <span>Browse Cars</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
