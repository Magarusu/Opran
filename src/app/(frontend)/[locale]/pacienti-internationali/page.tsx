import React from 'react'
import Link from 'next/link'
import { isValidLocale, localizedPath, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { Plane, Video, FileCheck2, Building2, ArrowRight } from 'lucide-react'

const COPY: Record<
  Locale,
  {
    eyebrow: string
    title: string
    subtitle: string
    steps: { title: string; body: string }[]
    cta: string
  }
> = {
  ro: {
    eyebrow: 'TURISM MEDICAL STOMATOLOGIC • BUCUREȘTI',
    title: 'Ghid pentru Pacienții Internaționali',
    subtitle:
      'Organizăm clar fiecare etapă pentru pacienții care călătoresc din Franța, Europa sau diaspora către Clinica Opran din București.',
    steps: [
      {
        title: '1. Consultație Video Preliminară',
        body: 'Evaluare la distanță în RO / EN / FR și analiza radiografiilor existente înainte de călătorie.',
      },
      {
        title: '2. Plan de Tratament & Calendar',
        body: 'Primiți estimarea transparentă a duratei șederii și a etapelor clinice înainte de rezervarea biletelor.',
      },
      {
        title: '3. Tratament Rapid în București (3-în-1)',
        body: 'Clinică centrală (lângă Cișmigiu, 25 min de Otopeni) cu laborator propriu pentru execuție protetică rapidă.',
      },
      {
        title: '4. Documentație Medicală & Monitorizare',
        body: 'Dosar medical complet, facturi detaliate conforme UE și urmărire video post-intervenție.',
      },
    ],
    cta: 'Programează consultația video',
  },
  en: {
    eyebrow: 'DENTAL TOURISM IN BUCHAREST',
    title: 'International Patient Journey',
    subtitle:
      'A streamlined 4-step clinical pathway for patients traveling from France, the UK, and across Europe to central Bucharest.',
    steps: [
      {
        title: '1. Preliminary Video Consultation',
        body: 'Remote evaluation in English, French, or Romanian and review of existing X-rays before you travel.',
      },
      {
        title: '2. Transparent Plan & Travel Schedule',
        body: 'Clear written treatment plan, indicative fee breakdown, and exact number of clinic days required.',
      },
      {
        title: '3. 3-in-1 Treatment in Central Bucharest',
        body: 'Located near Cișmigiu Park (25 min from OTP Airport) with an on-site dental lab for fast prosthetic turnaround.',
      },
      {
        title: '4. EU Documentation & Remote Follow-Up',
        body: 'Detailed medical dossier and invoices compatible with European insurer claims, plus post-op video check-ups.',
      },
    ],
    cta: 'Book Your Virtual Consultation',
  },
  fr: {
    eyebrow: 'TOURISME DENTAIRE À BUCAREST',
    title: 'Parcours Patients Internationaux (France & Europe)',
    subtitle:
      'Un accompagnement structuré en 4 étapes, pensé pour les patients francophones souhaitant bénéficier de soins de haute précision à Bucarest.',
    steps: [
      {
        title: '1. Téléconsultation Préliminaire',
        body: 'Échange vidéo sécurisé en français et analyse de votre radiographie panoramique avant votre départ.',
      },
      {
        title: '2. Devis Transparent & Calendrier',
        body: 'Plan de traitement détaillé et durée exacte du séjour à Bucarest fixés avant la réservation de votre vol.',
      },
      {
        title: '3. Soins 3-en-1 au Cœur de Bucarest',
        body: 'Clinique centrale (parc Cișmigiu, 25 min de l’aéroport) avec laboratoire de prothèse intégré limitant les délais.',
      },
      {
        title: '4. Dossier Conforme & Suivi à Distance',
        body: 'Remise de factures et comptes-rendus détaillés (normes UE) et suivi post-opératoire par vidéo.',
      },
    ],
    cta: 'Planifier une téléconsultation en français',
  },
}

export default async function InternationalPatientsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const loc = locale as Locale
  const c = COPY[loc]

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
          {c.steps.map((s, idx) => (
            <div
              key={s.title}
              className="p-6 rounded-md bg-[#ebeff3] border border-slate-200 space-y-2.5"
            >
              <div className="w-9 h-9 rounded-full bg-[#003261] text-white flex items-center justify-center">
                {idx === 0 && <Video className="w-4 h-4" />}
                {idx === 1 && <Plane className="w-4 h-4" />}
                {idx === 2 && <Building2 className="w-4 h-4" />}
                {idx === 3 && <FileCheck2 className="w-4 h-4" />}
              </div>
              <h2 className="text-lg font-semibold text-[#003261]">{s.title}</h2>
              <p className="text-sm text-slate-700 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div>
          <Link
            href={localizedPath(loc, '/programari')}
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
