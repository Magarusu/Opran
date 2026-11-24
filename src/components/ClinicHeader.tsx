'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LOCALES, LOCALE_LABELS, type Locale, localizedPath } from '@/lib/i18n'
import { NAV_LABELS } from '@/data/clinic-content'
import { MivHeaderBand } from './MivHeaderBand'
import { Menu, X, Phone, Video, Calculator } from 'lucide-react'

export const ClinicHeader: React.FC<{ locale: Locale }> = ({ locale }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() || `/${locale}`
  const t = NAV_LABELS[locale]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLocaleHref = (target: Locale) => {
    const parts = pathname.split('/')
    if (parts.length > 1 && LOCALES.includes(parts[1] as Locale)) {
      parts[1] = target
      return parts.join('/') || `/${target}`
    }
    return `/${target}`
  }

  const navItems = [
    { label: t.home, href: localizedPath(locale, '/') },
    { label: t.about, href: localizedPath(locale, '/despre-noi') },
    { label: t.services, href: localizedPath(locale, '/servicii') },
    { label: t.team, href: localizedPath(locale, '/echipa') },
    { label: t.gallery, href: localizedPath(locale, '/galerie') },
    { label: t.tariffs, href: localizedPath(locale, '/tarife') },
    { label: t.international, href: localizedPath(locale, '/pacienti-internationali') },
    { label: t.blog, href: localizedPath(locale, '/blog') },
    { label: t.projectEu, href: localizedPath(locale, '/proiect-ue') },
    { label: t.contact, href: localizedPath(locale, '/contact') },
  ]

  return (
    <header className="w-full z-40">
      {/* Mandatory MIV PR BI 2021-2027 Band (scrolls away naturally; always visible at top on load) */}
      <MivHeaderBand locale={locale} />

      {/* NYSI-Inspired Deep Navy Sticky Bar */}
      <div
        className={`w-full transition-shadow duration-300 bg-[#003261] text-white ${
          scrolled ? 'fixed top-0 left-0 right-0 shadow-lg z-50' : 'relative'
        }`}
      >
        {/* Top Utility Strip (NYSI action bar equivalent) */}
        <div className="border-b border-white/10 bg-[#001931]/60">
          <div className="container py-1.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-4 text-slate-200">
              <a
                href="tel:+40213134082"
                className="inline-flex items-center gap-1.5 hover:text-[#85c1e5] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#85c1e5]" />
                <span>+40 21 313 40 82</span>
              </a>
              <span className="hidden md:inline text-white/30">|</span>
              <span className="hidden md:inline text-slate-300">
                Str. Știrbei Vodă 94, Sector 1, București
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={localizedPath(locale, '/calculator-costuri')}
                className="hidden sm:inline-flex items-center gap-1 text-slate-200 hover:text-[#85c1e5] transition-colors"
              >
                <Calculator className="w-3.5 h-3.5 text-[#85c1e5]" />
                <span>{t.calculator}</span>
              </Link>
              <span className="hidden sm:inline text-white/25">|</span>
              {/* Language Switcher RO / EN / FR */}
              <div className="flex items-center gap-1" role="group" aria-label="Language switcher">
                {LOCALES.map((loc) => (
                  <Link
                    key={loc}
                    href={switchLocaleHref(loc)}
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider transition-colors ${
                      loc === locale
                        ? 'bg-[#5584b1] text-white'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {LOCALE_LABELS[loc]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Row */}
        <div className="container py-3 flex items-center justify-between gap-4">
          {/* Clinic Logo — constrained <= EU emblem height per MIV */}
          <Link
            href={localizedPath(locale, '/')}
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <img
              src="/brand/opran-logo-white.png"
              alt="Clinica Stomatologică Opran"
              className="h-8 w-8 object-contain"
            />
            <div className="leading-tight">
              <span className="block text-sm sm:text-base font-semibold tracking-wide text-white uppercase">
                Clinica Opran
              </span>
              <span className="block text-[10px] tracking-[0.18em] text-[#85c1e5] uppercase">
                Est. 1991 • București
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-4 text-[13px] font-medium">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1 transition-colors whitespace-nowrap border-b-2 ${
                    active
                      ? 'text-white border-[#85c1e5]'
                      : 'text-slate-200 border-transparent hover:text-white hover:border-[#5584b1]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Primary CTA + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <Link
              href={localizedPath(locale, '/programari')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#5584b1] hover:bg-[#46739f] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-sm transition-colors shadow-sm whitespace-nowrap"
            >
              <Video className="w-4 h-4" />
              <span>{t.bookCta}</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="xl:hidden p-2 rounded hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="xl:hidden bg-[#001931] border-t border-white/10">
            <div className="container py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 px-3 rounded text-sm text-slate-100 hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-white/10 flex flex-col gap-2">
                <Link
                  href={localizedPath(locale, '/calculator-costuri')}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-4 rounded bg-white/10 text-white text-sm font-medium text-center"
                >
                  {t.calculator}
                </Link>
                <Link
                  href={localizedPath(locale, '/programari')}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-4 rounded bg-[#5584b1] text-white text-sm font-semibold text-center"
                >
                  {t.bookCta}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
