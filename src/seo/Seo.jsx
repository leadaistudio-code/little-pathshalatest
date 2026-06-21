import { Helmet } from 'react-helmet-async'
import { SITE } from './site'

/**
 * Per-page SEO: title, description, canonical, Open Graph, Twitter, and
 * optional JSON-LD structured data.
 *
 * @param {string}   title       Page title (brand name is appended automatically)
 * @param {string}   description Meta description (~150-160 chars)
 * @param {string}   path        Route path, e.g. "/about" (for canonical + og:url)
 * @param {string}   [keywords]  Comma-separated keywords
 * @param {string}   [image]     OG image path (defaults to site OG image)
 * @param {object[]} [schema]    Array of JSON-LD objects to embed
 * @param {boolean}  [noindex]   Set true to keep the page out of search results
 */
export default function Seo({ title, description, path = '/', keywords, image, schema, noindex }) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`
  const desc = description || SITE.description
  // Trailing slash matches how the host serves prerendered directories (/about/).
  const canonicalPath = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`
  const canonical = `${SITE.url}${canonicalPath}`
  const ogImage = `${SITE.url}${image || SITE.ogImage}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {noindex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow, max-image-preview:large" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={SITE.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {schema &&
        schema.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
        ))}
    </Helmet>
  )
}
