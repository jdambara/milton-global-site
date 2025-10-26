export function SeoOfferCatalog() {
  const json = { 
    '@context':'https://schema.org', 
    '@type':'OfferCatalog',
    name:'Brokerage infrastructure services', 
    url:'https://miltonglobal.com/services',
    itemListElement:[ 
      'Connectivity & Hosting',
      'Liquidity & Bridge Integration',
      'Onboarding & Compliance (KYC/AML)',
      'Risk Management & Reporting',
      'PAMM Infrastructure',
      'White-Label Solutions'
    ].map(s => ({ 
      '@type':'Offer', 
      itemOffered:{
        '@type':'Service', 
        serviceType:s, 
        areaServed:'Worldwide', 
        availableLanguage:['en','es','ja'], 
        provider:{
          '@type':'Organization', 
          name:'Milton Global Ltd (SD040)' 
        }
      }
    })) 
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
