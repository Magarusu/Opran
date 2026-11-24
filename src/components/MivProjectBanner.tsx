import React from 'react'
import Link from 'next/link'
import { type Locale, localizedPath } from '@/lib/i18n'
import { ArrowRight } from 'lucide-react'

const BANNER_COPY: Record<
  Locale,
  {
    eyebrow: string
    title: string
    subtitle: string
    cta: string
  }
> = {
  ro: {
    eyebrow: 'Programul Regional București-Ilfov 2021–2027 • MySMIS 339392',
    title: 'Modernizare tehnologică Clinica Stomatologică Opran',
    subtitle:
      'Proiect cofinanțat de Uniunea Europeană pentru dotare cu 26 de echipamente stomatologice moderne, certificare ISO 9001 și servicii digitale internaționale.',
    cta: 'Detalii despre proiect',
  },
  en: {
    eyebrow: 'Bucharest-Ilfov Regional Programme 2021–2027 • MySMIS 339392',
    title: 'Technological Modernization — Opran Dental Clinic',
    subtitle:
      'Project co-funded by the European Union supporting 26 modern dental technologies, ISO 9001 quality certification, and international patient services.',
    cta: 'View EU Project Details',
  },
  fr: {
    eyebrow: 'Programme Régional Bucarest-Ilfov 2021–2027 • MySMIS 339392',
    title: 'Modernisation technologique — Clinique Dentaire Opran',
    subtitle:
      'Projet cofinancé par l’Union Européenne pour l’acquisition de 26 équipements dentaires modernes, la certification ISO 9001 et l’accueil des patients internationaux.',
    cta: 'Découvrir le projet UE',
  },
}

/**
 * MIV p. 36 "Exemplu de banner online":
 * - Top white strip with all 4 mandatory logos
 * - Visual area in the center
 * - Beneficiary logo bottom-left (<= EU emblem) and www.opran.ro bottom-right
 * - Clickable to the dedicated project subpage.
 */
export const MivProjectBanner: React.FC<{ locale: Locale }> = ({ locale }) => {
  const c = BANNER_COPY[locale]

  return (
    <section className="py-12 bg-[#ebeff3]" aria-label={c.title}>
      <div className="container">
        <Link
          href={localizedPath(locale, '/proiect-ue')}
          className="block rounded-md overflow-hidden border border-slate-300 bg-white shadow-md hover:shadow-xl transition-shadow group"
        >
          {/* Top White Band with 4 Official Logos */}
          <div className="bg-white px-4 sm:px-8 py-3 border-b border-slate-200 flex items-center justify-between gap-3 sm:gap-6">
            <img
              src="/brand/miv/ue-cofinantat-horizontal.png"
              alt="Cofinanțat de Uniunea Europeană"
              className="h-7 sm:h-10 w-auto object-contain"
            />
            <img
              src="/brand/miv/guvern-ro.png"
              alt="Guvernul României"
              className="h-6 sm:h-9 w-auto object-contain"
            />
            <img
              src="/brand/miv/regio-bi.png"
              alt="Regio București-Ilfov 2021-2027"
              className="h-5 sm:h-8 w-auto object-contain"
            />
            <img
              src="/brand/miv/adrbi.png"
              alt="ADR București-Ilfov"
              className="h-6 sm:h-9 w-auto object-contain"
            />
          </div>

          {/* Center Visual Area */}
          <div className="bg-gradient-to-r from-[#003261] via-[#0d457a] to-[#113931] text-white px-6 sm:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#85c1e5] font-semibold">
                {c.eyebrow}
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{c.title}</h3>
              <p className="text-sm text-slate-200 leading-relaxed">{c.subtitle}</p>
            </div>
            <span className="inline-flex items-center gap-2 bg-white text-[#003261] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-sm group-hover:bg-[#85c1e5] group-hover:text-[#001931] transition-colors shrink-0">
              <span>{c.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>

          {/* Bottom Strip: Clinic Logo Left + Web Address Right (per MIV p. 36) */}
          <div className="bg-white px-4 sm:px-8 py-2.5 flex items-center justify-between border-t border-slate-200">
            <div className="flex items-center gap-2">
              <img
                src="/brand/opran-logo.png"
                alt="Clinica Stomatologică Opran"
                className="h-6 w-6 object-contain"
              />
              <span className="text-xs font-semibold text-[#113931] uppercase tracking-wider">
                Clinica Stomatologică Opran
              </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#003261]">www.opran.ro</span>
          </div>
        </Link>
      </div>
    </section>
  )
}
