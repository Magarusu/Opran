import React from 'react'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { TEAM_MEMBERS } from '@/data/clinic-content'

const COPY: Record<Locale, { eyebrow: string; title: string; subtitle: string; langLabel: string }> = {
  ro: {
    eyebrow: 'ECHIPA MEDICALĂ • DEMO DE CONFIRMAT',
    title: 'Medici Specialiști & Echipă Clinică',
    subtitle:
      'Lista de mai jos combină datele confirmate din documentele proiectului și arhiva clinicii (2014), urmând a fi actualizată cu fotografiile și biografiile aprobate.',
    langLabel: 'Limbi vorbite:',
  },
  en: {
    eyebrow: 'MEDICAL TEAM • DEMO ROSTER TBC',
    title: 'Our Doctors & Clinical Team',
    subtitle:
      'Combining verified project leadership with legacy archive profiles pending 2026 portrait photography and confirmed biographies.',
    langLabel: 'Languages:',
  },
  fr: {
    eyebrow: 'ÉQUIPE MÉDICALE • LISTE DÉMO À CONFIRMER',
    title: 'Nos Praticiens & Équipe Clinique',
    subtitle:
      'Profils combinant la direction médicale actuelle et les archives historiques en attente des portraits et biographies 2026 approuvés.',
    langLabel: 'Langues parlées :',
  },
}

export default async function TeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const loc = locale as Locale
  const c = COPY[loc]

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="container max-w-5xl space-y-10">
        <div className="space-y-3 border-b border-slate-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5584b1]">
            {c.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#003261]">{c.title}</h1>
          <p className="text-slate-600 max-w-2xl">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((m) => (
            <div key={m.name} className="border border-slate-200 rounded-md overflow-hidden bg-white">
              <div className="h-52 bg-[#ebeff3] flex flex-col items-center justify-center text-slate-500 p-4">
                <img
                  src="/brand/opran-logo.png"
                  alt={m.name}
                  className="h-14 w-14 object-contain opacity-30 mb-2"
                />
                <span className="text-[11px] uppercase tracking-wider">Portrait Placeholder</span>
              </div>
              <div className="p-5 space-y-2.5">
                <h2 className="text-lg font-semibold text-[#003261]">{m.name}</h2>
                <p className="text-xs font-medium text-[#5584b1]">{m.role[loc]}</p>
                <p className="text-xs text-slate-500">
                  <strong>{c.langLabel}</strong> {m.languages}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{m.bio[loc]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
