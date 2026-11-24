import React from 'react'
import Link from 'next/link'
import { isValidLocale, localizedPath, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { ALL_SPECIALTIES } from '@/data/clinic-content'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const COPY: Record<Locale, { eyebrow: string; title: string; subtitle: string; cta: string }> = {
  ro: {
    eyebrow: 'SERVICII STOMATOLOGICE COMPLETE',
    title: 'Specialități Clinice & Laborator Propriu',
    subtitle:
      'Gamă completă de tratamente stomatologice, radiologie digitală și tehnică dentară în aceeași locație.',
    cta: 'Estimează costul sau programează-te',
  },
  en: {
    eyebrow: 'COMPREHENSIVE DENTAL CARE',
    title: 'Clinical Specialties & In-House Dental Lab',
    subtitle:
      'Full-spectrum aesthetic, implant, restorative, and preventive dentistry coordinated under one roof.',
    cta: 'Estimate Cost or Book Consultation',
  },
  fr: {
    eyebrow: 'SOINS DENTAIRES COMPLETS',
    title: 'Spécialités Cliniques & Laboratoire Intégré',
    subtitle:
      'Gamme complète de soins esthétiques, implantaires, prothétiques et préventifs au sein de notre clinique à Bucarest.',
    cta: 'Estimer un coût ou prendre rendez-vous',
  },
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const loc = locale as Locale
  const c = COPY[loc]
  const list = ALL_SPECIALTIES[loc]

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="container max-w-5xl space-y-12">
        <div className="space-y-3 border-b border-slate-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5584b1]">
            {c.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#003261]">{c.title}</h1>
          <p className="text-slate-600 max-w-2xl">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {list.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-md border border-slate-200 bg-[#ebeff3]/40 space-y-2.5"
            >
              <h2 className="text-lg font-semibold text-[#003261] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#5584b1] shrink-0" />
                <span>{item.title}</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed pl-7">{item.summary}</p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Link
            href={localizedPath(loc, '/calculator-costuri')}
            className="inline-flex items-center gap-2 bg-[#003261] hover:bg-[#001931] text-white text-sm font-semibold px-6 py-3 rounded-sm transition-colors"
          >
            <span>{c.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
