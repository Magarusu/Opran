import React from 'react'
import Link from 'next/link'
import { isValidLocale, localizedPath, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import {
  FEATURED_PROCEDURES,
  TEAM_MEMBERS,
  DEMO_TESTIMONIALS,
} from '@/data/clinic-content'
import { MivProjectBanner } from '@/components/MivProjectBanner'
import {
  ArrowRight,
  Video,
  Calculator,
  Sparkles,
  Clock,
  ShieldCheck,
  Star,
  MapPin,
  Phone,
} from 'lucide-react'

const HOME_COPY: Record<
  Locale,
  {
    heroEyebrow: string
    heroTitle: string
    heroSubtitle: string
    heroCtaPrimary: string
    heroCtaSecondary: string
    introTitle: string
    introBody: string
    pillars: { title: string; text: string }[]
    proceduresTitle: string
    proceduresSub: string
    learnMore: string
    teamTitle: string
    teamSub: string
    teamCta: string
    founderEyebrow: string
    founderTitle: string
    founderBody: string
    galleryTitle: string
    gallerySub: string
    galleryCta: string
    reviewsTitle: string
    contactTitle: string
    contactSub: string
  }
> = {
  ro: {
    heroEyebrow: 'CLINICA STOMATOLOGICĂ OPRAN • BUCUREȘTI • EST. 1991',
    heroTitle: 'Stomatologie de Precizie & Estetică Dentară Personalizată',
    heroSubtitle:
      'Clinică stomatologică, radiologie digitală și laborator propriu de tehnică dentară — într-un singur loc, în centrul Bucureștiului, pentru pacienți locali și internaționali.',
    heroCtaPrimary: 'Programează o consultație video',
    heroCtaSecondary: 'Calculator orientativ costuri',
    introTitle: 'Conceptul 3 în 1: Timpul și confortul dvs. sunt prioritare',
    introBody:
      'Fondată în 1991 de Dr. Matei Opran și condusă astăzi de Dr. Radu-Eremia Opran, clinica noastră îmbină tradiția medicală cu fluxul digital complet: diagnostic clinic, radiologie și laborator propriu sub același acoperiș.',
    pillars: [
      {
        title: 'Vizită 3 în 1',
        text: 'Clinică stomatologică, radiologie digitală și laborator propriu de tehnică dentară.',
      },
      {
        title: 'Tratamente personalizate',
        text: 'Comunicare transparentă și plan terapeutic explicat clar înainte de fiecare etapă.',
      },
      {
        title: 'Locație centrală',
        text: 'Str. Știrbei Vodă 94, lângă Parcul Cișmigiu — acces rapid din orice zonă și de la aeroport.',
      },
    ],
    proceduresTitle: 'Proceduri Principale',
    proceduresSub: 'Abordare multidisciplinară pentru sănătatea și estetica zâmbetului dvs.',
    learnMore: 'Află mai multe',
    teamTitle: 'Echipa Medicală',
    teamSub: 'Medici dedicați excelenței clinice și comunicării clare în RO, EN și FR.',
    teamCta: 'Vezi întreaga echipă',
    founderEyebrow: 'TRADIȚIE DIN 1991',
    founderTitle: 'Experiența Opran — Peste 35 de ani de practică medicală',
    founderBody:
      'Fiecare pacient este un partener. Echipa noastră lucrează după protocoale aliniate standardelor europene, cu respect pentru timpul pacientului și siguranța fiecărei intervenții.',
    galleryTitle: 'Galerie & Cazuri Clinice',
    gallerySub: 'Spațiu pregătit pentru fotografii clinice și cazuri aprobate GDPR/CMSR.',
    galleryCta: 'Explorează galeria',
    reviewsTitle: 'Experiența Pacienților',
    contactTitle: 'Ne găsiți în centrul Bucureștiului',
    contactSub: 'Str. Știrbei Vodă nr. 94, et. 1, Sector 1, București (lângă Parcul Cișmigiu)',
  },
  en: {
    heroEyebrow: 'OPRAN DENTAL CLINIC • BUCHAREST • EST. 1991',
    heroTitle: 'Cosmetic, Implant & Restorative Dentistry in Central Bucharest',
    heroSubtitle:
      'Clinical dentistry, digital radiology, and an in-house dental laboratory under one roof — designed for local patients and international dental travelers.',
    heroCtaPrimary: 'Schedule a Virtual Consultation',
    heroCtaSecondary: 'Interactive Cost Estimator',
    introTitle: '3-in-1 Integrated Care: Respecting Your Time & Comfort',
    introBody:
      'Founded in 1991 by Dr. Matei Opran and led today by Dr. Radu-Eremia Opran, our clinic pairs three decades of medical heritage with a streamlined digital workflow.',
    pillars: [
      {
        title: '3-in-1 Visit',
        text: 'Dental clinic, digital intraoral radiology, and in-house dental laboratory in one location.',
      },
      {
        title: 'Personalized Care',
        text: 'Clear communication, written treatment plans, and transparent timelines before every visit.',
      },
      {
        title: 'Central Location',
        text: 'Str. Știrbei Vodă 94, steps from Cișmigiu Park — 25 minutes from Bucharest Airport.',
      },
    ],
    proceduresTitle: 'Featured Procedures',
    proceduresSub: 'Multidisciplinary dental care tailored to long-term function and natural aesthetics.',
    learnMore: 'Learn More',
    teamTitle: 'Meet Our Team',
    teamSub: 'Experienced clinicians committed to gentle care in English, French, and Romanian.',
    teamCta: 'Meet All Doctors',
    founderEyebrow: 'HERITAGE SINCE 1991',
    founderTitle: 'The Opran Standard — Over 35 Years of Clinical Continuity',
    founderBody:
      'We treat every patient as an informed partner, combining Western European clinical protocols with fast, coordinated prosthetic turnaround through our on-site lab.',
    galleryTitle: 'Smile Gallery',
    gallerySub: 'Dedicated showcase ready for GDPR & CMSR-consented clinical case photography.',
    galleryCta: 'Visit Smile Gallery',
    reviewsTitle: 'Patient Testimonials',
    contactTitle: 'Visit Our Bucharest Clinic',
    contactSub: 'Str. Știrbei Vodă 94, 1st Floor, Sector 1, Bucharest (Cișmigiu Park area)',
  },
  fr: {
    heroEyebrow: 'CLINIQUE DENTAIRE OPRAN • BUCAREST • EST. 1991',
    heroTitle: 'Dentisterie Esthétique, Implantologie & Prothèse sur Mesure',
    heroSubtitle:
      'Clinique dentaire, radiologie numérique et laboratoire de prothèse intégré au cœur de Bucarest — un parcours optimisé pour nos patients de France et d’Europe.',
    heroCtaPrimary: 'Planifier une Téléconsultation',
    heroCtaSecondary: 'Simulateur de Coût',
    introTitle: 'Parcours 3-en-1 : Votre temps et votre sérénité au cœur de nos soins',
    introBody:
      'Fondée en 1991 par le Dr Matei Opran et dirigée par le Dr Radu-Eremia Opran, la clinique réunit soins dentaires, imagerie et laboratoire interne sous un même toit.',
    pillars: [
      {
        title: 'Clinique 3-en-1',
        text: 'Soins cliniques, radiologie numérique et laboratoire de prothèse intégré sur place.',
      },
      {
        title: 'Transparence totale',
        text: 'Devis détaillé, explication claire des étapes et accompagnement administratif.',
      },
      {
        title: 'Au cœur de Bucarest',
        text: 'Str. Știrbei Vodă 94, près du Parc Cișmigiu — à 25 minutes de l’aéroport Henri Coandă.',
      },
    ],
    proceduresTitle: 'Soins & Spécialités',
    proceduresSub: 'Une approche pluridisciplinaire alliant fonction, confort et esthétique naturelle.',
    learnMore: 'En savoir plus',
    teamTitle: 'Notre Équipe Médicale',
    teamSub: 'Des praticiens attentifs à votre écoute en français, anglais et roumain.',
    teamCta: 'Découvrir l’équipe',
    founderEyebrow: 'TRADITION DEPUIS 1991',
    founderTitle: 'L’Exigence Opran — Plus de 35 ans d’expertise clinique',
    founderBody:
      'Chaque patient est un partenaire. Nous appliquons des protocoles cliniques européens rigoureux afin de réduire les délais tout en garantissant sécurité et précision.',
    galleryTitle: 'Galerie Sourires',
    gallerySub: 'Espace dédié aux cas cliniques approuvés (RGPD & déontologie médicale).',
    galleryCta: 'Voir la galerie',
    reviewsTitle: 'Témoignages de Patients',
    contactTitle: 'Nous trouver à Bucarest',
    contactSub: 'Str. Știrbei Vodă 94, 1er étage, Secteur 1, Bucarest (Parc Cișmigiu)',
  },
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const loc = locale as Locale
  const c = HOME_COPY[loc]
  const procedures = FEATURED_PROCEDURES[loc]

  return (
    <div>
      {/* 1. NYSI-Inspired Full-Width Hero with Angled Bottom Divider */}
      <section className="relative bg-gradient-to-br from-[#001931] via-[#003261] to-[#113931] text-white nysi-triangle-bottom pb-24 pt-16 sm:pt-24">
        <div className="container relative z-10 max-w-4xl text-center space-y-6">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#85c1e5]">
            {c.heroEyebrow}
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12]">
            {c.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {c.heroSubtitle}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href={localizedPath(loc, '/programari')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5584b1] hover:bg-[#46739f] text-white font-semibold text-sm px-6 py-3.5 rounded-sm transition-colors shadow-lg"
            >
              <Video className="w-4 h-4" />
              <span>{c.heroCtaPrimary}</span>
            </Link>
            <Link
              href={localizedPath(loc, '/calculator-costuri')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-sm px-6 py-3.5 rounded-sm transition-colors"
            >
              <Calculator className="w-4 h-4" />
              <span>{c.heroCtaSecondary}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Editorial Intro + 3-in-1 Value Pillars */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#003261]">{c.introTitle}</h2>
            <p className="text-slate-600 leading-relaxed">{c.introBody}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.pillars.map((p, idx) => (
              <div
                key={p.title}
                className="p-6 rounded-md bg-[#ebeff3] border border-slate-200/80 space-y-2.5"
              >
                <div className="w-9 h-9 rounded-full bg-[#003261] text-white flex items-center justify-center">
                  {idx === 0 && <Sparkles className="w-4 h-4" />}
                  {idx === 1 && <ShieldCheck className="w-4 h-4" />}
                  {idx === 2 && <Clock className="w-4 h-4" />}
                </div>
                <h3 className="text-lg font-semibold text-[#003261]">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Procedures Grid (NYSI Parallax Section Equivalent) */}
      <section className="py-16 bg-[#003261] text-white">
        <div className="container space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/15 pb-6">
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-semibold">{c.proceduresTitle}</h2>
              <p className="text-sm text-slate-300">{c.proceduresSub}</p>
            </div>
            <Link
              href={localizedPath(loc, '/servicii')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#85c1e5] hover:text-white"
            >
              <span>{c.learnMore}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedures.map((proc) => (
              <div
                key={proc.slug}
                className="bg-[#001931]/70 border border-white/10 rounded-md p-6 flex flex-col justify-between gap-5 hover:border-[#85c1e5]/60 transition-colors"
              >
                <div className="space-y-2.5">
                  <p className="text-[11px] uppercase tracking-wider text-[#85c1e5] font-semibold">
                    {proc.subtitle}
                  </p>
                  <h3 className="text-lg font-semibold text-white">{proc.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{proc.description}</p>
                </div>
                <Link
                  href={localizedPath(loc, '/servicii')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#85c1e5] hover:text-white uppercase tracking-wider"
                >
                  <span>{c.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet Our Team + Founder Spotlight */}
      <section className="py-16 bg-white">
        <div className="container space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#003261]">{c.teamTitle}</h2>
              <p className="text-sm text-slate-600">{c.teamSub}</p>
            </div>
            <Link
              href={localizedPath(loc, '/echipa')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#003261] hover:text-[#5584b1]"
            >
              <span>{c.teamCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm"
              >
                <div className="h-44 bg-gradient-to-br from-[#ebeff3] to-slate-200 flex flex-col items-center justify-center text-slate-500 p-4 text-center">
                  <img
                    src="/brand/opran-logo.png"
                    alt={member.name}
                    className="h-12 w-12 object-contain opacity-30 mb-2"
                  />
                  <span className="text-[11px] uppercase tracking-wider font-medium">
                    Demo Portrait Placeholder
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-[#003261]">{member.name}</h3>
                  <p className="text-xs font-medium text-[#5584b1]">{member.role[loc]}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{member.bio[loc]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Founder Spotlight (NYSI "Dr. Dean Experience" Equivalent) */}
          <div className="bg-[#ebeff3] rounded-md p-8 sm:p-10 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5584b1]">
                {c.founderEyebrow}
              </p>
              <h3 className="text-2xl font-semibold text-[#003261]">{c.founderTitle}</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {c.founderBody}
              </p>
            </div>
            <Link
              href={localizedPath(loc, '/despre-noi')}
              className="shrink-0 px-6 py-3 bg-[#003261] hover:bg-[#001931] text-white text-sm font-semibold rounded-sm transition-colors"
            >
              {c.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Smile Gallery Section with NYSI Angled Top Divider */}
      <section className="bg-[#001931] text-white nysi-triangle-top pt-20 pb-16">
        <div className="container space-y-8 text-center">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold">{c.galleryTitle}</h2>
            <p className="text-sm text-slate-300">{c.gallerySub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((slot) => (
              <div
                key={slot}
                className="h-48 rounded-md bg-white/5 border border-white/15 flex flex-col items-center justify-center p-6 text-slate-300 text-xs"
              >
                <Sparkles className="w-6 h-6 text-[#85c1e5] mb-2" />
                <span>Smile Gallery Case #{slot} (Demo Placeholder)</span>
              </div>
            ))}
          </div>
          <Link
            href={localizedPath(loc, '/galerie')}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#85c1e5] text-[#85c1e5] hover:bg-[#85c1e5] hover:text-[#001931] text-sm font-semibold rounded-sm transition-colors"
          >
            <span>{c.galleryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. Mandatory MIV Online Banner (p. 36) */}
      <MivProjectBanner locale={loc} />

      {/* 7. Patient Reviews + Cișmigiu Map */}
      <section className="py-16 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#003261]">{c.reviewsTitle}</h2>
            <div className="space-y-4">
              {DEMO_TESTIMONIALS.map((t) => (
                <div
                  key={t.author}
                  className="p-6 rounded-md bg-[#ebeff3] border border-slate-200 space-y-3"
                >
                  <div className="flex items-center gap-1 text-amber-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed">“{t.quote}”</p>
                  <p className="text-xs font-semibold text-[#003261]">{t.author}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#003261]">{c.contactTitle}</h2>
            <p className="text-sm text-slate-600 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#5584b1] shrink-0" />
              <span>{c.contactSub}</span>
            </p>
            <p className="text-sm text-slate-600 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#5584b1] shrink-0" />
              <a href="tel:+40213134082" className="font-semibold text-[#003261] hover:underline">
                +40 21 313 40 82
              </a>
            </p>
            <div className="rounded-md overflow-hidden border border-slate-200 shadow-sm h-72 bg-slate-100">
              <iframe
                title="Clinica Stomatologică Opran — Str. Știrbei Vodă 94, București"
                src="https://www.google.com/maps?q=Strada+Stirbei+Voda+94+Bucuresti&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
