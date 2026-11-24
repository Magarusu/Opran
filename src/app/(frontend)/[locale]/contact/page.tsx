import React from 'react'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { MapPin, Phone, Mail, Train, Bus } from 'lucide-react'

const COPY: Record<
  Locale,
  {
    eyebrow: string
    title: string
    subtitle: string
    addressTitle: string
    transportTitle: string
    metro: string
    bus: string
  }
> = {
  ro: {
    eyebrow: 'CONTACT & ACCES',
    title: 'Contactați Clinica Stomatologică Opran',
    subtitle: 'Situată central, în apropierea Parcului Cișmigiu, cu acces facil din tot Bucureștiul.',
    addressTitle: 'Sediu & Date de Contact',
    transportTitle: 'Mijloace de transport',
    metro: 'Metrou: Stația Eroilor (M1, M3) sau Izvor',
    bus: 'Autobuze: Stația Cișmigiu (122, 126, 137, 138, 168, 178, 226, 268, 368)',
  },
  en: {
    eyebrow: 'CONTACT & DIRECTIONS',
    title: 'Contact Opran Dental Clinic',
    subtitle: 'Centrally located near Cișmigiu Park in Bucharest, 25 minutes from Henri Coandă Airport.',
    addressTitle: 'Clinic Address & Phone',
    transportTitle: 'Public Transit',
    metro: 'Metro: Eroilor Station (M1, M3) or Izvor',
    bus: 'Bus: Cișmigiu Stop (122, 126, 137, 138, 168, 178, 226, 268, 368)',
  },
  fr: {
    eyebrow: 'CONTACT & ACCÈS',
    title: 'Contacter la Clinique Dentaire Opran',
    subtitle: 'Située au centre de Bucarest, près du Parc Cișmigiu, à 25 minutes de l’aéroport.',
    addressTitle: 'Adresse & Téléphone',
    transportTitle: 'Transports en commun',
    metro: 'Métro : Station Eroilor (M1, M3) ou Izvor',
    bus: 'Bus : Arrêt Cișmigiu (122, 126, 137, 138, 168, 178, 226, 268, 368)',
  },
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
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
          <p className="text-slate-600">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 bg-[#ebeff3] p-6 sm:p-8 rounded-md border border-slate-200">
            <h2 className="text-lg font-semibold text-[#003261]">{c.addressTitle}</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#5584b1] shrink-0 mt-0.5" />
                <span>Str. Știrbei Vodă nr. 94, et. 1, ap. 2, Sector 1, 010118 București</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#5584b1] shrink-0" />
                <a href="tel:+40213134082" className="font-semibold text-[#003261]">
                  +40 21 313 40 82
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#5584b1] shrink-0" />
                <a href="mailto:clinicastomatologicaopran@gmail.com" className="text-[#003261]">
                  clinicastomatologicaopran@gmail.com
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-300 space-y-2.5">
              <h3 className="text-sm font-semibold text-[#003261]">{c.transportTitle}</h3>
              <p className="text-xs text-slate-600 flex items-center gap-2">
                <Train className="w-4 h-4 text-[#5584b1]" />
                <span>{c.metro}</span>
              </p>
              <p className="text-xs text-slate-600 flex items-center gap-2">
                <Bus className="w-4 h-4 text-[#5584b1]" />
                <span>{c.bus}</span>
              </p>
            </div>
          </div>

          <div className="rounded-md overflow-hidden border border-slate-200 h-80 lg:h-auto min-h-[320px]">
            <iframe
              title="Clinica Stomatologică Opran Map"
              src="https://www.google.com/maps?q=Strada+Stirbei+Voda+94+Bucuresti&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
