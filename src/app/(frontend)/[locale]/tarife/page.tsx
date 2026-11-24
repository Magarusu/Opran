import React from 'react'
import Link from 'next/link'
import { isValidLocale, localizedPath, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { DEMO_TARIFFS } from '@/data/clinic-content'
import { Calculator } from 'lucide-react'

const COPY: Record<
  Locale,
  { eyebrow: string; title: string; subtitle: string; colCat: string; colProc: string; colRon: string; colEur: string; cta: string }
> = {
  ro: {
    eyebrow: 'LISTĂ TARIFE • VALORI DEMO ORIENTATIVE DE CONFIRMAT',
    title: 'Tarife Orientative',
    subtitle:
      'Tabelul de mai jos conține valori demo orientative (în arhiva 2014 prețurile erau marcate cu „xxx Lei”). Valorile finale vor fi confirmate de clinică.',
    colCat: 'Specialitate',
    colProc: 'Procedură',
    colRon: 'Tarif (RON)',
    colEur: 'Echivalent (~EUR)',
    cta: 'Deschide calculatorul interactiv de costuri',
  },
  en: {
    eyebrow: 'FEES • INDICATIVE DEMO FIGURES TBC',
    title: 'Indicative Fee Schedule',
    subtitle:
      'Below are indicative demo figures pending final clinic tariff confirmation. International patients receive a personalized written treatment plan.',
    colCat: 'Specialty',
    colProc: 'Procedure',
    colRon: 'Fee (RON)',
    colEur: 'Approx. (EUR)',
    cta: 'Open Interactive Cost Estimator',
  },
  fr: {
    eyebrow: 'TARIFS • VALEURS DÉMO INDICATIVES À CONFIRMER',
    title: 'Tarifs Indicatifs',
    subtitle:
      'Ces montants de démonstration seront remplacés par la grille officielle validée par la clinique. Un devis détaillé est remis après évaluation.',
    colCat: 'Spécialité',
    colProc: 'Acte dentaire',
    colRon: 'Tarif (RON)',
    colEur: 'Équivalent (~EUR)',
    cta: 'Ouvrir le simulateur de coût',
  },
}

export default async function TariffsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const loc = locale as Locale
  const c = COPY[loc]
  const rows = DEMO_TARIFFS[loc]

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="container max-w-4xl space-y-10">
        <div className="space-y-3 border-b border-slate-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5584b1]">
            {c.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#003261]">{c.title}</h1>
          <p className="text-slate-600">{c.subtitle}</p>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-md">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-[#003261] text-white">
                <th className="p-4 font-semibold">{c.colCat}</th>
                <th className="p-4 font-semibold">{c.colProc}</th>
                <th className="p-4 font-semibold text-right">{c.colRon}</th>
                <th className="p-4 font-semibold text-right">{c.colEur}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-slate-200 hover:bg-[#ebeff3]/40">
                  <td className="p-4 text-xs font-semibold uppercase tracking-wider text-[#5584b1]">
                    {r.category}
                  </td>
                  <td className="p-4 font-medium text-slate-900">{r.name}</td>
                  <td className="p-4 text-right font-semibold text-[#003261]">{r.priceRon} lei</td>
                  <td className="p-4 text-right text-slate-600">~€{r.priceEur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <Link
            href={localizedPath(loc, '/calculator-costuri')}
            className="inline-flex items-center gap-2 bg-[#003261] hover:bg-[#001931] text-white text-sm font-semibold px-6 py-3 rounded-sm transition-colors"
          >
            <Calculator className="w-4 h-4" />
            <span>{c.cta}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
