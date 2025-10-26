export type L = 'en'|'es'|'ja';

export const lp = (locale: L, path = '') =>
  locale === 'en' ? `/${path}`.replace(/\/$/,'') || '/' : `/${locale}/${path}`.replace(/\/$/,'');

