import React from 'react'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { PROJECT_EU_DATA } from '@/data/clinic-content'
import { ExternalLink, FileText, CheckCircle2 } from 'lucide-react'

const HEADINGS: Record<Locale, { title: string; subtitle: string; tableTitle: string; updatesTitle: string }> = {
  ro: {
    title: 'Proiect cofinanțat de Uniunea Europeană — MySMIS 339392',
    subtitle: 'Informații oficiale privind implementarea proiectului „Modernizare tehnologică Clinica Stomatologică Opran”.',
    tableTitle: 'Date oficiale ale proiectului',
    updatesTitle: 'Anunțuri și stadiul implementării',
  },
  en: {
    title: 'European Union Co-Funded Project — MySMIS 339392',
    subtitle: 'Official public information for “Modernizare tehnologică Clinica Stomatologică Opran”.',
    tableTitle: 'Official Project Summary',
    updatesTitle: 'Implementation Status & Announcements',
  },
  fr: {
    title: 'Projet cofinancé par l’Union Européenne — MySMIS 339392',
    subtitle: 'Informations officielles relatives au projet « Modernizare tehnologică Clinica Stomatologică Opran ».',
    tableTitle: 'Données officielles du projet',
    updatesTitle: 'État d’avancement et communiqués',
  },
}

/**
 * Mandatory Crawlable Dedicated EU Project Page (MIV PR BI 2021-2027, pp. 33-34).
 * All content is rendered as indexable HTML text (never scanned PDF/image).
 */
export default async function ProjectEuPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const h = HEADINGS[locale as Locale]

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container max-w-4xl space-y-10">
        {/* Header Block */}
        <div className="space-y-3 border-b border-slate-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#003399]">
            PR București-Ilfov 2021–2027 • {PROJECT_EU_DATA.mysmis}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#003261]">{h.title}</h1>
          <p className="text-slate-600">{h.subtitle}</p>
        </div>

        {/* Mandatory Project Data Table (OPRAN_Fisa_identitate_vizuala_MEDLINK_16.11.2026.pdf, p. 3) */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#003261]">{h.tableTitle}</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-md">
            <table className="w-full text-sm text-left border-collapse">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-[#ebeff3] p-4 font-semibold text-[#003261] w-1/3">Numele proiectului</th>
                  <td className="p-4 text-slate-800">„{PROJECT_EU_DATA.title}”</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-[#ebeff3] p-4 font-semibold text-[#003261]">Beneficiar</th>
                  <td className="p-4 text-slate-800 font-medium">{PROJECT_EU_DATA.beneficiary}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-[#ebeff3] p-4 font-semibold text-[#003261]">Codul proiectului</th>
                  <td className="p-4 text-slate-800 font-semibold">{PROJECT_EU_DATA.mysmis}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-[#ebeff3] p-4 font-semibold text-[#003261]">Program de finanțare</th>
                  <td className="p-4 text-slate-800">{PROJECT_EU_DATA.program}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-[#ebeff3] p-4 font-semibold text-[#003261]">Locul de implementare</th>
                  <td className="p-4 text-slate-800">{PROJECT_EU_DATA.location}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-[#ebeff3] p-4 font-semibold text-[#003261]">Data începerii și finalizării</th>
                  <td className="p-4 text-slate-800">{PROJECT_EU_DATA.period}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-[#ebeff3] p-4 font-semibold text-[#003261]">Obiectivele proiectului</th>
                  <td className="p-4 text-slate-800 space-y-2">
                    <p>
                      <strong>Obiectivul general:</strong> {PROJECT_EU_DATA.generalObjective}
                    </p>
                    <p>
                      <strong>Obiective specifice:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      {PROJECT_EU_DATA.specificObjectives.map((obj) => (
                        <li key={obj}>{obj}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-[#ebeff3] p-4 font-semibold text-[#003261]">Rezultatele preconizate</th>
                  <td className="p-4 text-slate-800">{PROJECT_EU_DATA.expectedResults}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-[#ebeff3] p-4 font-semibold text-[#003261]">Valoarea totală a proiectului</th>
                  <td className="p-4 text-slate-800 font-semibold">{PROJECT_EU_DATA.totalValue}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-[#ebeff3] p-4 font-semibold text-[#003261]">
                    Cofinanțarea Uniunii Europene
                  </th>
                  <td className="p-4 text-slate-800">{PROJECT_EU_DATA.euContribution}</td>
                </tr>
                <tr>
                  <th className="bg-[#ebeff3] p-4 font-semibold text-[#003261]">Celelalte surse de finanțare</th>
                  <td className="p-4 text-slate-800 space-y-1">
                    <p>{PROJECT_EU_DATA.nationalContribution}</p>
                    <p>{PROJECT_EU_DATA.ownContribution}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Mandatory Exact Institutional Links Paragraph (MIV p. 33 & Fisa pct. 6 lit. b) */}
        <section className="bg-[#ebeff3] border-l-4 border-[#003399] p-6 rounded-r-md space-y-4">
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
            Pentru informații detaliate despre Programul Regional București-Ilfov 2021-2027, vă
            invităm să vizitați{' '}
            <a
              href="https://regiobucuresti-ilfov.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003399] font-semibold underline"
            >
              https://regiobucuresti-ilfov.ro/
            </a>
            , iar despre celelalte programe cofinanțate de Uniunea Europeană, puteți accesa{' '}
            <a
              href="https://mfe.gov.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003399] font-semibold underline"
            >
              https://mfe.gov.ro/
            </a>{' '}
            și{' '}
            <a
              href="https://oportunitati-ue.gov.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003399] font-semibold underline"
            >
              https://oportunitati-ue.gov.ro
            </a>
            .
          </p>

          <div className="pt-2">
            <a
              href={PROJECT_EU_DATA.pressReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#003261] hover:text-[#5584b1] underline underline-offset-4"
            >
              <FileText className="w-4 h-4" />
              <span>Comunicat de presă privind începerea implementării proiectului (10.10.2026)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Implementation Progress Feed */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#003261]">{h.updatesTitle}</h2>
          <div className="border border-slate-200 rounded-md p-5 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-sm">
              <p className="font-semibold text-[#003261]">
                07.10.2026 — Semnarea Contractului de Finanțare & Lansarea Proiectului
              </p>
              <p className="text-slate-600">
                A fost publicat anunțul de începere a implementării proiectului MySMIS 339392 și au
                fost demarate procedurile de modernizare tehnologică și internaționalizare.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
