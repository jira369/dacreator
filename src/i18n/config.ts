export const defaultLocale = 'de' as const;
export const locales = ['de', 'en', 'vi'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  de: 'DE',
  en: 'EN',
  vi: 'VI',
};
