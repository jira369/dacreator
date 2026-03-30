import { ui } from './ui';
import { defaultLocale, type Locale, locales } from './config';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (locales.includes(lang as Locale)) return lang as Locale;
  return defaultLocale;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)[typeof defaultLocale]): string {
    return (ui[lang] as Record<string, string>)?.[key] ?? ui[defaultLocale][key];
  };
}

export function getLocalizedPath(path: string, lang: Locale): string {
  return `/${lang}${path}`;
}

export function switchLocale(currentUrl: URL, newLocale: Locale): string {
  const [, , ...rest] = currentUrl.pathname.split('/');
  return `/${newLocale}/${rest.join('/')}`;
}
