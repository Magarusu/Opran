'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { type Locale, localizedPath } from '@/lib/i18n'
import { DEMO_TARIFFS } from '@/data/clinic-content'
import { Calculator, Check, RotateCcw, ArrowRight, Info } from 'lucide-react'

const COPY: Record<
  Locale,
  {
    badge: string
    title: string
    subtitle: string
    selectHint: string
    currencyLabel: string
    estimatedTotal: string
    reset: string
    requestPlan: string
    disclaimer: string
    selectedCount: string
  }
> = {
  ro: {
    badge: 'DEMO INTERACTIV ETAPA II • TARIFE ORIENTATIVE DE CONFIRMAT',
    title: 'Calculator orientativ de costuri',
    subtitle:
      'Selectați procedurile de interes pentru a obține o estimare orientativă transparentă. Nicio selecție nu este transmisă către platforme publicitare.',
    selectHint: 'Selectați procedurile și cantitățile:',
    currencyLabel: 'Monedă afișată:',
    estimatedTotal: 'Estimare orientativă totală',
    reset: 'Resetează',
    requestPlan: 'Solicită evaluare personalizată',
    disclaimer:
      'Notă medicală și financiară: Valorile afișate sunt pur orientative (date demo), nu constituie o ofertă medicală sau financiară angajantă și pot varia în urma consultației clinice și a investigațiilor radiologice.',
    selectedCount: 'proceduri selectate',
  },
  en: {
    badge: 'STAGE II INTERACTIVE DEMO • INDICATIVE FEES TBC',
    title: 'Interactive Treatment Cost Estimator',
    subtitle:
      'Select procedures to view a transparent indicative estimate. Your selections stay strictly in your browser and are never shared with ad platforms.',
    selectHint: 'Select procedures and quantities:',
    currencyLabel: 'Display currency:',
    estimatedTotal: 'Indicative Estimated Total',
    reset: 'Reset',
    requestPlan: 'Request Personalized Treatment Plan',
    disclaimer:
      'Medical & Financial Notice: Displayed figures are indicative demo estimates only, do not constitute a binding medical or financial offer, and are finalized following clinical examination.',
    selectedCount: 'procedures selected',
  },
  fr: {
    badge: 'DÉMO INTERACTIVE ÉTAPE II • TARIFS INDICATIFS À CONFIRMER',
    title: 'Simulateur indicatif de coût',
    subtitle:
      'Sélectionnez les soins souhaités pour obtenir une estimation transparente. Aucune donnée de santé n’est transmise aux plateformes publicitaires.',
    selectHint: 'Sélectionnez les actes et quantités :',
    currencyLabel: 'Devise affichée :',
    estimatedTotal: 'Estimation indicative totale',
    reset: 'Réinitialiser',
    requestPlan: 'Demander un devis personnalisé',
    disclaimer:
      'Mention médicale et financière : Les montants affichés sont purement indicatifs (données de démonstration) et ne constituent pas un devis contractuel avant examen clinique.',
    selectedCount: 'actes sélectionnés',
  },
}

export const CostCalculatorWidget: React.FC<{ locale: Locale }> = ({ locale }) => {
  const c = COPY[locale]
  const items = DEMO_TARIFFS[locale]
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [currency, setCurrency] = useState<'EUR' | 'RON'>(locale === 'ro' ? 'RON' : 'EUR')

  const toggleItem = (id: string) => {
    setQuantities((prev) => {
      const next = { ...prev }
      if (next[id]) delete next[id]
      else next[id] = 1
      return next
    })
  }

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0
      const updated = Math.max(0, Math.min(28, current + delta))
      const next = { ...prev }
      if (updated === 0) delete next[id]
      else next[id] = updated
      return next
    })
  }

  const totalRon = items.reduce((sum, item) => sum + item.priceRon * (quantities[item.id] || 0), 0)
  const totalEur = items.reduce((sum, item) => sum + item.priceEur * (quantities[item.id] || 0), 0)
  const count = Object.values(quantities).reduce((a, b) => a + b, 0)

  return (
    <div className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
      <div className="bg-[#003261] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.18em] bg-[#5584b1]/40 text-[#85c1e5] px-2.5 py-1 rounded">
            {c.badge}
          </span>
          <h2 className="text-2xl font-semibold flex items-center gap-2.5">
            <Calculator className="w-6 h-6 text-[#85c1e5]" />
            <span>{c.title}</span>
          </h2>
          <p className="text-sm text-slate-200 max-w-2xl">{c.subtitle}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0 bg-[#001931] p-1 rounded">
          <button
            type="button"
            onClick={() => setCurrency('RON')}
            className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
              currency === 'RON' ? 'bg-[#5584b1] text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            RON
          </button>
          <button
            type="button"
            onClick={() => setCurrency('EUR')}
            className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
              currency === 'EUR' ? 'bg-[#5584b1] text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            EUR
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            {c.selectHint}
          </p>
          {items.map((item) => {
            const qty = quantities[item.id] || 0
            const active = qty > 0
            return (
              <div
                key={item.id}
                className={`flex items-center justify-between gap-4 p-4 rounded border transition-colors ${
                  active
                    ? 'border-[#003261] bg-[#ebeff3]/60'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="flex items-center gap-3 text-left flex-1"
                >
                  <span
                    className={`w-5 h-5 rounded flex items-center justify-center border shrink-0 ${
                      active
                        ? 'bg-[#003261] border-[#003261] text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {active && <Check className="w-3.5 h-3.5" />}
                  </span>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#5584b1] font-semibold">
                      {item.category}
                    </span>
                    <span className="block text-sm font-medium text-slate-900">{item.name}</span>
                  </div>
                </button>

                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-sm font-semibold text-[#003261]">
                    {currency === 'RON' ? `${item.priceRon} lei` : `~€${item.priceEur}`}
                  </span>
                  {active && (
                    <div className="flex items-center border border-slate-300 rounded bg-white">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        className="px-2.5 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                      >
                        −
                      </button>
                      <span className="px-2.5 text-xs font-semibold">{qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        className="px-2.5 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Box */}
        <div className="bg-[#ebeff3] rounded-md p-6 flex flex-col justify-between gap-6 h-fit border border-slate-200">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#003261]">
              {c.estimatedTotal}
            </p>
            <div className="text-4xl font-bold text-[#003261]">
              {currency === 'RON' ? `${totalRon.toLocaleString()} lei` : `~€${totalEur.toLocaleString()}`}
            </div>
            <p className="text-xs text-slate-600">
              {currency === 'RON'
                ? `(echivalent ~€${totalEur.toLocaleString()})`
                : `(${totalRon.toLocaleString()} lei)`}{' '}
              • {count} {c.selectedCount}
            </p>
          </div>

          <div className="space-y-3">
            <Link
              href={localizedPath(locale, '/programari')}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#003261] hover:bg-[#001931] text-white text-sm font-semibold px-4 py-3 rounded-sm transition-colors"
            >
              <span>{c.requestPlan}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => setQuantities({})}
              className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 py-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{c.reset}</span>
            </button>
          </div>

          <div className="flex items-start gap-2 text-[11px] text-slate-600 border-t border-slate-300 pt-4 leading-relaxed">
            <Info className="w-4 h-4 text-[#5584b1] shrink-0 mt-0.5" />
            <p>{c.disclaimer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
