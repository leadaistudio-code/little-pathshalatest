// Central source of truth for all SEO / business data.
// Update these values and everything (meta tags, schema, sitemap) stays in sync.

export const SITE = {
  url: 'https://littlepathshala.com', // production domain (no trailing slash)
  name: 'Little Pathshala',
  legalName: 'Little Pathshala Preschool & Daycare',
  tagline: 'Preschool & Daycare in Faridabad',
  description:
    'Little Pathshala is an award-winning preschool & daycare in Sector 91, Faridabad. Play-based learning, EYFS & Montessori curriculum, live CCTV, safe campus — trusted by 500+ families since 2013.',
  foundingYear: '2013',
  email: 'hello@littlepathshala.com',
  phone: '+91 9718463321',
  phoneE164: '+919718463321',
  priceRange: '₹₹',
  ogImage: '/og-image.jpg', // 1200x630 — add this file to /public for rich social previews
  locale: 'en_IN',

  address: {
    street: 'H.No 32, Surya Vihar, Sector 91',
    locality: 'Faridabad',
    region: 'Haryana',
    postalCode: '121003',
    country: 'IN',
  },

  // Approx geo for Sector 91, Faridabad — refine with exact coordinates from Google Maps.
  geo: { lat: 28.3920, lng: 77.3470 },

  // Areas you serve (drives local relevance).
  areaServed: ['Faridabad', 'Sector 91', 'Surya Vihar', 'Greater Faridabad', 'Delhi NCR'],

  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '18:00' },
  ],
  hoursHuman: 'Mon–Sat: 8:00 AM – 6:00 PM',

  // Social profiles — replace # with your real URLs (used for schema `sameAs` + trust signals).
  socials: {
    facebook: 'https://www.facebook.com/littlepathshala',
    instagram: 'https://www.instagram.com/littlepathshala',
    youtube: 'https://www.youtube.com/@littlepathshala',
    linkedin: 'https://www.linkedin.com/company/littlepathshala',
  },
}

export const sameAs = Object.values(SITE.socials)
