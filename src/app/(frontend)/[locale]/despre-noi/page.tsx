import React from 'react'
import Link from 'next/link'
import { isValidLocale, localizedPath, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { Award, ShieldCheck, Clock, ArrowRight } from 'lucide-react'

const COPY: Record<
  Locale,
  {
    eyebrow: string
    title: string
    p1: string
    p2: string
    p3: string
    points: string[]
    cta: string
  }
> = {
  ro: {
    eyebrow: 'DESPRE CLINICA OPRAN • DIN 1991',
    title: 'Misiune, Tradiție și Excelență Stomatologică',
    p1: 'Clinica Stomatologică Opran a fost fondată în anul 1991 de Dr. Specialist Matei Opran. Astăzi, tradiția medicală este dusă mai departe de Dr. Specialist Radu-Eremia Opran și echipa clinicii.',
    p2: 'Țelul nostru este de a oferi tratamente la un înalt standard calitativ, într-un timp optim petrecut de pacient în clinică, prin integrarea cabinetelor clinice, a radiologiei digitale și a laboratorului propriu de tehnică dentară.',
    p3: 'Fiecare pacient este un partener: dezvoltăm relația terapeutică pe comunicare clară, explicarea completă a etapelor și acordul informat al pacientului.',
    points: [
      'Tratamente stomatologice personalizate și documentate clar;',
      'Timpul pacientului contează: flux integrat clinică + radiologie + laborator;',
      'Protocoale clinice moderne și standardizare ISO 9001 în curs de implementare;',
      'Ambiantă reconfortantă în centrul Bucureștiului (Str. Știrbei Vodă 94).',
    ],
    cta: 'Programează o consultație',
  },
  en: {
    eyebrow: 'ABOUT OPRAN DENTAL CLINIC • EST. 1991',
    title: 'Heritage, Precision & Patient-Centered Dentistry',
    p1: 'Opran Dental Clinic was founded in 1991 by Dr. Matei Opran. Today, the family medical tradition is carried forward by Specialist Dental Surgeon Dr. Radu-Eremia Opran and our multidisciplinary team.',
    p2: 'Our goal is to deliver high-precision treatments while minimizing chair time through our 3-in-1 model: clinical suites, digital intraoral imaging, and an on-site dental laboratory.',
    p3: 'Every patient is treated as an informed partner through clear communication, transparent treatment plans, and unhurried clinical care.',
    points: [
      'Personalized treatment plans with clear timelines;',
      'Respect for your schedule: 3-in-1 clinic, imaging & dental lab;',
      'Modern European clinical protocols & ISO 9001 quality management;',
      'Calm central Bucharest setting near Cișmigiu Park.',
    ],
    cta: 'Schedule a Consultation',
  },
  fr: {
    eyebrow: 'À PROPOS DE LA CLINIQUE OPRAN • DEPUIS 1991',
    title: 'Tradition Médicale et Dentisterie de Précision',
    p1: 'La Clinique Dentaire Opran a été fondée en 1991 par le Dr Matei Opran. Aujourd’hui, cette tradition d’excellence est poursuivie par le Dr Radu-Eremia Opran et son équipe.',
    p2: 'Notre objectif est d’offrir des soins de haut niveau tout en optimisant le temps passé au fauteuil grâce à notre modèle intégré 3-en-1 : clinique, imagerie numérique et laboratoire de prothèse.',
    p3: 'Chaque patient est un partenaire : nous privilégions une communication transparente, l’explication détaillée des actes et le consentement éclairé.',
    points: [
      'Plans de traitement personnalisés et devis transparents ;',
      'Gain de temps grâce au laboratoire dentaire intégré sur place ;',
      'Protocoles cliniques européens et démarche qualité ISO 9001 ;',
      'Accueil chaleureux au centre de Bucarest (parc Cișmigiu).',
    ],
    cta: 'Prendre rendez-vous',
  },
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const loc = locale as Locale
  const c = COPY[loc]

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="container max-w-4xl space-y-10">
        <div className="space-y-3 border-b border-slate-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5584b1]">
            {c.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#003261]">{c.title}</h1>
        </div>

        <div className="space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>{c.p1}</p>
          <p>{c.p2}</p>
          <p>{c.p3}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#ebeff3] p-6 sm:p-8 rounded-md border border-slate-200">
          {c.points.map((pt, i) => (
            <div key={pt} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#003261] text-white flex items-center justify-center shrink-0 mt-0.5">
                {i % 3 === 0 && <Award className="w-3.5 h-3.5" />}
                {i % 3 === 1 && <Clock className="w-3.5 h-3.5" />}
                {i % 3 === 2 && <ShieldCheck className="w-3.5 h-3.5" />}
              </div>
              <p className="text-sm text-slate-800 leading-relaxed">{pt}</p>
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
