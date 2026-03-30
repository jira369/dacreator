export const defaultLocale = 'en' as const;
export const locales = ['en', 'de', 'vi'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  de: 'DE',
  vi: 'VI',
};
