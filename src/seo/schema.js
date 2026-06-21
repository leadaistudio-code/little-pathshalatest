import { SITE, sameAs } from './site'

const abs = (path = '') => `${SITE.url}${path}`

// Postal address shared across schemas
const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
}

// LocalBusiness (Preschool) — the core local-SEO schema. Lives sitewide.
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Preschool', 'ChildCare', 'LocalBusiness'],
    '@id': abs('/#business'),
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneE164,
    email: SITE.email,
    image: abs(SITE.ogImage),
    logo: abs('/favicon.svg'),
    priceRange: SITE.priceRange,
    foundingDate: SITE.foundingYear,
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
    openingHoursSpecification: SITE.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs,
  }
}

// Organization + WebSite — brand & search-box signals.
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': abs('/#organization'),
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: abs('/favicon.svg'),
    foundingDate: SITE.foundingYear,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phoneE164,
      contactType: 'admissions',
      email: SITE.email,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    sameAs,
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs('/#website'),
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': abs('/#organization') },
  }
}

// Per-page breadcrumb trail.
export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  }
}

// FAQ rich result.
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

// The sitewide block injected into index.html <head> (rendered for every page).
export function siteWideSchemaJson() {
  return JSON.stringify([
    localBusinessSchema(),
    organizationSchema(),
    websiteSchema(),
  ])
}
