import React from 'react'
import Link from 'next/link'
import { type Locale, localizedPath } from '@/lib/i18n'
import { NAV_LABELS, FOOTER_LABELS } from '@/data/clinic-content'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

/**
 * NYSI-inspired structured footer.
 * MIV compliance: ZERO developer/agency attribution ("Website realizat de...") anywhere in footer.
 */
export const ClinicFooter: React.FC<{ locale: Locale }> = ({ locale }) => {
  const nav = NAV_LABELS[locale]
  const ft = FOOTER_LABELS[locale]

  return (
    <footer className="bg-[#001931] text-slate-200 border-t border-[#5584b1]/30">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand & Philosophy */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/brand/opran-logo-white.png"
              alt="Clinica Stomatologică Opran"
              className="h-9 w-9 object-contain"
            />
            <div>
              <p className="font-semibold text-white tracking-wide uppercase text-sm">
                Clinica Stomatologică Opran
              </p>
              <p className="text-xs text-[#85c1e5]">Fondată în 1991 • București</p>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{ft.tagline}</p>
          <div className="pt-2">
            <Link
              href={localizedPath(locale, '/proiect-ue')}
              className="inline-flex items-center gap-2 text-xs text-[#85c1e5] hover:text-white underline underline-offset-4"
            >
              {ft.euProjectLink}
            </Link>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#85c1e5] mb-4">
            {ft.navigationTitle}
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href={localizedPath(locale, '/despre-noi')} className="hover:text-white transition-colors">
                {nav.about}
              </Link>
            </li>
            <li>
              <Link href={localizedPath(locale, '/servicii')} className="hover:text-white transition-colors">
                {nav.services}
              </Link>
            </li>
            <li>
              <Link href={localizedPath(locale, '/echipa')} className="hover:text-white transition-colors">
                {nav.team}
              </Link>
            </li>
            <li>
              <Link href={localizedPath(locale, '/tarife')} className="hover:text-white transition-colors">
                {nav.tariffs}
              </Link>
            </li>
            <li>
              <Link
                href={localizedPath(locale, '/calculator-costuri')}
                className="hover:text-white transition-colors"
              >
                {nav.calculator}
              </Link>
            </li>
            <li>
              <Link href={localizedPath(locale, '/programari')} className="hover:text-white transition-colors">
                {nav.bookCta}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact & Location */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#85c1e5] mb-4">
            {ft.contactTitle}
          </h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#85c1e5] shrink-0 mt-0.5" />
              <span>Str. Știrbei Vodă nr. 94, et. 1, ap. 2, Sector 1, București (lângă Parcul Cișmigiu)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#85c1e5] shrink-0" />
              <a href="tel:+40213134082" className="hover:text-white">
                +40 21 313 40 82
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#85c1e5] shrink-0" />
              <a href="mailto:clinicastomatologicaopran@gmail.com" className="hover:text-white break-all">
                clinicastomatologicaopran@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Schedule & Legal */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#85c1e5] mb-4">
            {ft.hoursTitle}
          </h3>
          <div className="flex items-start gap-2.5 text-sm text-slate-300 mb-5">
            <Clock className="w-4 h-4 text-[#85c1e5] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p>{ft.weekdays}</p>
              <p>{ft.weekend}</p>
            </div>
          </div>
          <div className="text-xs text-slate-400 space-y-1 border-t border-white/10 pt-4">
            <p>CLINICA STOMATOLOGICA OPRAN S.R.L.</p>
            <p>CUI: 12864043 • J2000003182404</p>
            <p>GDPR & Consent Mode v2 Compliant</p>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar (No agency/developer credit per MIV p. 23 & p. 39) */}
      <div className="bg-[#001224] border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} CLINICA STOMATOLOGICA OPRAN S.R.L. {ft.rights}</p>
          <p className="text-slate-400">{ft.euNotice}</p>
        </div>
      </div>
    </footer>
  )
}
