import type { Language } from '@/hooks/useLanguage'

export const SITE_URL = 'https://dragopartner.pl'

export function headingId(text: string): string {
  return text
    .replace(/[łŁ]/g, 'l')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const DATE_LOCALES: Record<Language, string> = {
  pl: 'pl-PL',
  en: 'en-GB',
  ua: 'uk-UA',
  sr: 'sr-Latn-RS',
  gr: 'ka-GE',
}

export function formatDate(iso: string, language: Language): string {
  return new Intl.DateTimeFormat(DATE_LOCALES[language], {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`))
}
