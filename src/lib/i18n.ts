export type Locale = 'ro' | 'en' | 'fr'

export const LOCALES: readonly Locale[] = ['ro', 'en', 'fr'] as const
export const DEFAULT_LOCALE: Locale = 'ro'

export const LOCALE_LABELS: Record<Locale, string> = {
  ro: 'RO',
  en: 'EN',
  fr: 'FR',
}

export const LOCALE_NAMES: Record<Locale, string> = {
  ro: 'Română',
  en: 'English',
  fr: 'Français',
}

export function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (clean === '/') return `/${locale}`
  return `/${locale}${clean}`
}
