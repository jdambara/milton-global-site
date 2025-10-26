const BASE = 'https://miltonglobal.com';

export function buildAlternates(pathNoSlash: string) {
  const en = pathNoSlash ? `${BASE}/${pathNoSlash}` : BASE;
  const es = `${BASE}/es${pathNoSlash ? `/${pathNoSlash}` : ''}`;
  const ja = `${BASE}/ja${pathNoSlash ? `/${pathNoSlash}` : ''}`;
  
  return {
    canonical: en, // English at root
    languages: {
      'x-default': en,
      en: en,
      es: es,
      ja: ja
    }
  };
}

