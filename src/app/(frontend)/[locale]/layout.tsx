import React from 'react'
import { notFound } from 'next/navigation'
import { isValidLocale, LOCALES, type Locale } from '@/lib/i18n'
import { ClinicHeader } from '@/components/ClinicHeader'
import { ClinicFooter } from '@/components/ClinicFooter'
import { CookieConsentBanner } from '@/components/CookieConsentBanner'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900" data-locale={locale}>
      <ClinicHeader locale={locale as Locale} />
      <main className="flex-1">{children}</main>
      <ClinicFooter locale={locale as Locale} />
      <CookieConsentBanner locale={locale as Locale} />
    </div>
  )
}
