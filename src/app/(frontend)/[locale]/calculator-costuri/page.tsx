import React from 'react'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { CostCalculatorWidget } from '@/components/CostCalculatorWidget'

export default async function CostCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  return (
    <div className="bg-[#ebeff3] py-12 sm:py-16">
      <div className="container max-w-5xl">
        <CostCalculatorWidget locale={locale as Locale} />
      </div>
    </div>
  )
}
