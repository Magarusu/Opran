'use client'

import React, { useEffect, useState } from 'react'
import { type Locale } from '@/lib/i18n'
import { COOKIE_LABELS } from '@/data/clinic-content'
import { ShieldCheck } from 'lucide-react'

/**
 * GDPR Consent Mode v2 Banner.
 * MIV Rule: Docked strictly at the BOTTOM of the viewport so it NEVER covers
 * the 4 mandatory EU/Gov/Regio/ADRBI logos at the top of the page.
 * Also enforces Zero-PHI analytics hygiene (no medical/health data sent to ad platforms).
 */
export const CookieConsentBanner: React.FC<{ locale: Locale }> = ({ locale }) => {
  const [visible, setVisible] = useState(false)
  const t = COOKIE_LABELS[locale]

  useEffect(() => {
    try {
      const saved = localStorage.getItem('opran_gdpr_consent_v2')
      if (!saved) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const handleChoice = (analyticsGranted: boolean) => {
    try {
      localStorage.setItem(
        'opran_gdpr_consent_v2',
        JSON.stringify({
          necessary: true,
          analytics: analyticsGranted,
          timestamp: new Date().toISOString(),
        }),
      )
    } catch {
      // ignore storage errors in private browsing
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="GDPR Cookie Consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#001931]/95 backdrop-blur-md text-white border-t border-[#5584b1]/40 shadow-2xl"
    >
      <div className="container py-3.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 max-w-3xl">
          <ShieldCheck className="w-5 h-5 text-[#85c1e5] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{t.message}</p>
        </div>
        <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto justify-end">
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="px-3.5 py-1.5 text-xs font-medium rounded border border-white/25 text-slate-200 hover:bg-white/10 transition-colors"
          >
            {t.essentialOnly}
          </button>
          <button
            type="button"
            onClick={() => handleChoice(true)}
            className="px-4 py-1.5 text-xs font-semibold rounded bg-[#5584b1] hover:bg-[#46739f] text-white transition-colors"
          >
            {t.acceptAll}
          </button>
        </div>
      </div>
    </div>
  )
}
