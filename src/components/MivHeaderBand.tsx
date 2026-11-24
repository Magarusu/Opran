'use client'

import Link from 'next/link'
import React from 'react'
import type { Locale } from '@/lib/i18n'

/**
 * Mandatory MIV PR BI 2021-2027 4-logo compliance band.
 * Rules (OPRAN_Fisa_identitate_vizuala_MEDLINK_16.11.2026.pdf):
 * - All 4 color logos on a single horizontal row, exact order:
 *   1. Uniunea Europeană ("Cofinanțat de Uniunea Europeană")
 *   2. Guvernul României (crowned eagle)
 *   3. Regio București-Ilfov 2021-2027
 *   4. ADR București-Ilfov
 * - Identical across RO / EN / FR.
 * - Immediately visible above the fold without scroll or click on desktop, tablet, and portrait mobile.
 * - Clean white background with safe-zone padding; never hidden in burger menus or carousels.
 */
export const MivHeaderBand: React.FC<{ locale: Locale }> = ({ locale }) => {
  return (
    <div
      className="w-full bg-white border-b border-slate-200/90"
      aria-label="Programul Regional București-Ilfov 2021-2027"
    >
      <div className="container py-1.5 sm:py-2 flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-5 md:gap-7 w-full sm:w-auto">
          <Link
            href={`/${locale}/proiect-ue`}
            className="flex items-center gap-2 sm:gap-5 md:gap-7 w-full sm:w-auto justify-between sm:justify-start group"
            title="Proiect MySMIS 339392 — Modernizare tehnologică Clinica Stomatologică Opran"
          >
            {/* 1. Uniunea Europeană — Cofinanțat de Uniunea Europeană (cel puțin la fel de mare ca oricare altă siglă) */}
            <img
              src="/brand/miv/ue-cofinantat-horizontal.png"
              alt="Cofinanțat de Uniunea Europeană"
              className="h-7 sm:h-9 md:h-10 w-auto object-contain shrink-0"
            />
            {/* 2. Guvernul României (nu poate fi mai înaltă decât sigla UE) */}
            <img
              src="/brand/miv/guvern-ro.png"
              alt="Guvernul României"
              className="h-6 sm:h-8 md:h-9 w-auto object-contain shrink-0"
            />
            {/* 3. Regio București-Ilfov 2021-2027 */}
            <img
              src="/brand/miv/regio-bi.png"
              alt="Regio București-Ilfov 2021-2027"
              className="h-5 sm:h-7 md:h-8 w-auto object-contain shrink-0"
            />
            {/* 4. ADR București-Ilfov */}
            <img
              src="/brand/miv/adrbi.png"
              alt="ADR București-Ilfov"
              className="h-6 sm:h-8 md:h-9 w-auto object-contain shrink-0"
            />
          </Link>
        </div>

        <Link
          href={`/${locale}/proiect-ue`}
          className="hidden lg:inline-flex items-center gap-1.5 text-[11px] font-medium text-[#003261] hover:text-[#5584b1] transition-colors whitespace-nowrap border border-[#003261]/20 rounded-full px-3 py-1 bg-[#ebeff3]/60"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#003399]" />
          <span>MySMIS 339392</span>
        </Link>
      </div>
    </div>
  )
}
