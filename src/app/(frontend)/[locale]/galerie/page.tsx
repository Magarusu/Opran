import React from 'react'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { Sparkles } from 'lucide-react'

const COPY: Record<Locale, { eyebrow: string; title: string; subtitle: string; items: string[] }> = {
  ro: {
    eyebrow: 'GALERIE CLINICĂ & CAZURI • DEMO',
    title: 'Galerie Foto & Cazuri Clinice',
    subtitle:
      'Spațiu pregătit pentru fotografiile clinicii moderne, laboratorului dentar și cazurilor înainte/după aprobate GDPR și CMSR.',
    items: [
      'Cabinet stomatologic modern — București',
      'Cabinete de radiologie digitală',
      'Laborator propriu de tehnică dentară',
      'Reabilitare estetică cu fațete ceramice (Demo)',
      'Reabilitare pe implanturi dentare (Demo)',
      'Recepție și zonă pacienți internaționali',
    ],
  },
  en: {
    eyebrow: 'SMILE GALLERY & CLINIC TOUR • DEMO',
    title: 'Smile Gallery & Clinical Cases',
    subtitle:
      'Structured showcase ready for clinic interior photography and GDPR/CMSR-consented before-and-after cases.',
    items: [
      'Modern Dental Suite — Bucharest',
      'Digital Radiology Room',
      'In-House Dental Laboratory',
      'Porcelain Veneers Case Study (Demo)',
      'Implant Restoration Case Study (Demo)',
      'Patient Reception & Lounge',
    ],
  },
  fr: {
    eyebrow: 'GALERIE SOURIRES & CLINIQUE • DÉMO',
    title: 'Galerie Sourires & Cas Cliniques',
    subtitle:
      'Espace prêt pour les photographies de la clinique et les cas avant/après avec consentement RGPD.',
    items: [
      'Salle de soins moderne — Bucarest',
      'Espace de radiologie numérique',
      'Laboratoire de prothèse dentaire intégré',
      'Cas esthétique par facettes céramiques (Démo)',
      'Réhabilitation implantaire (Démo)',
      'Accueil des patients internationaux',
    ],
  },
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const c = COPY[locale as Locale]

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((label) => (
            <div
              key={label}
              className="h-56 rounded-md bg-[#ebeff3] border border-slate-200 flex flex-col items-center justify-center p-6 text-center space-y-3"
            >
              <Sparkles className="w-7 h-7 text-[#5584b1]" />
              <p className="text-sm font-medium text-[#003261]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
