# Little Pathshala — SEO Guide & Local Ranking Playbook

This document covers (A) what's already implemented in the code, and (B) the
off-page work **you** must do to rank #1 for local searches in Faridabad.
Treat (B) as a checklist — the code gets you in the game; the off-page work wins it.

---

## A. What's implemented (technical / on-page SEO)

| Area | What we did | Where |
|---|---|---|
| **Pre-rendering (SSG)** | Every route is rendered to real static HTML at build time, so Google, Bing, and social/WhatsApp link previews see full content without running JS. | `prerender.js`, `src/entry-server.jsx` |
| **Per-page meta** | Unique, keyword-rich title + meta description + canonical per route. | `src/seo/Seo.jsx`, `src/pages/*` |
| **Open Graph + Twitter** | Rich link previews when shared on WhatsApp, Facebook, X, LinkedIn. | `src/seo/Seo.jsx` |
| **Structured data (JSON-LD)** | `Preschool`/`LocalBusiness` (NAP, geo, hours, area served), `Organization`, `WebSite` sitewide; `BreadcrumbList` per page; `FAQPage` on /faqs. | `src/seo/schema.js` |
| **robots.txt + XML sitemap** | Tells crawlers what to index + lists all URLs. | `public/robots.txt`, `public/sitemap.xml` |
| **Favicon, web manifest, theme-color** | Branding + installable PWA basics. | `public/favicon.svg`, `public/site.webmanifest` |
| **Geo meta tags** | `geo.region`, `geo.position`, ICBM for local relevance. | `index.html` |
| **Clean routes** | `/about`, `/programs`, `/centres`, etc. — readable, keyword-bearing URLs. | `src/App.jsx` |
| **404 page** | Friendly, `noindex` 404 so dead links don't hurt rankings. | `src/pages/NotFoundPage.jsx` |

### One source of truth
All business data (name, address, phone, hours, geo, socials) lives in
**`src/seo/site.js`**. Update it there and every meta tag, schema, and sitemap
entry stays consistent. **Consistent NAP (Name-Address-Phone) is the #1 local
ranking factor** — keep it identical everywhere online.

### Build & deploy
```bash
npm run build     # builds client + server, then prerenders all routes into /dist
npm run preview   # preview the production build locally
```
Deploy the **`dist/`** folder to any static host (Netlify, Vercel, Cloudflare
Pages, Hostinger, etc.). Because routes are prerendered to folders
(`/about/index.html`), they work on refresh with no special server config.

---

## ⚠️ Action items still needed in code/assets

1. **Add `/public/og-image.jpg`** — a 1200×630 branded image (logo + tagline +
   a happy classroom photo). Without it, shared links have no preview image.
2. **Confirm exact GPS coordinates** in `src/seo/site.js` (`geo`) — open Google
   Maps, right-click your exact building, copy the lat/lng. Current values are
   approximate for Sector 91.
3. **Replace social URLs** in `src/seo/site.js` (`socials`) with your real
   profile links, and update the footer social `href="#"` links in
   `src/components/Footer.jsx`.
4. **When you change the domain**, update `SITE.url` in `src/seo/site.js`,
   `public/robots.txt`, and `public/sitemap.xml`.

---

## B. Off-page playbook — how to actually rank #1 locally

Ranking #1 for "preschool in Faridabad" / "daycare near me" is won mostly in
**Google's Local Pack (the map results)**, not classic blue links. Priorities:

### 1. Google Business Profile (GBP) — highest impact, do this first
- Create/claim your profile at [business.google.com](https://business.google.com).
- Category: **Preschool** (primary) + **Day care center** (secondary).
- Fill **everything**: exact NAP (must match the website character-for-character),
  hours (Mon–Sat 8–6), website, services, attributes, and 15–20 real photos
  (classrooms, play area, staff, building exterior with signage).
- Add your service areas (Sector 91, Surya Vihar, Greater Faridabad).
- Post weekly updates (events, admissions open, summer camp) — GBP rewards activity.

### 2. Reviews — the strongest local ranking + conversion lever
- Ask every happy parent for a Google review; aim for a steady drip, not a burst.
- Get a [g.page review short link](https://support.google.com/business/answer/7035772)
  and put it in WhatsApp follow-ups and a QR code at the front desk.
- **Reply to every review** (good and bad) — signals an active, trusted business.
- Target: out-review the current top-3 competitors in count *and* recency.

### 3. Local citations & directories (NAP consistency)
List the business with identical NAP on:
- JustDial, Sulekha, IndiaMART, Yelp, Bing Places, Apple Maps Connect.
- Education directories: SkoolBuddy, UrbanPro, Preschool/play-school listings.
- Local Faridabad business directories & the Faridabad Chamber if applicable.

### 4. On-page content (expand over time)
- **Write real blog posts** (the /blog page is ready) targeting local long-tail
  queries: "best preschool in Sector 91 Faridabad", "play school vs daycare",
  "preschool admission age in Faridabad". 1 post / 2 weeks is plenty.
- Add a **dedicated, indexable page per centre** as you open locations
  (`/centres/faridabad-sector-91`) with unique text, photos, an embedded Google
  Map, and that centre's `LocalBusiness` schema. (Current /centres is one page.)
- Add **parent testimonials with names/photos** and consider `Review`/`AggregateRating`
  schema once you have genuine reviews (only mark up real reviews).

### 5. Backlinks (local authority)
- Get listed by local parenting bloggers, school-comparison sites, and news.
- Sponsor/participate in local events and earn a link from the organizer.
- Partner with nearby pediatricians, kids' brands, and societies for a mention + link.

### 6. Technical hygiene (ongoing)
- Submit the sitemap in **Google Search Console** and **Bing Webmaster Tools**;
  monitor coverage, queries, and Core Web Vitals.
- Validate structured data with the
  [Rich Results Test](https://search.google.com/test/rich-results) after deploy.
- Keep the site fast on mobile (compress images to WebP, lazy-load below-the-fold).
- Ensure HTTPS and a single canonical domain (pick www **or** non-www, redirect the other).

### Realistic timeline
Local SEO compounds. Expect movement in **4–8 weeks** (GBP + reviews), and
top-3 Local Pack positions in **3–6 months** with consistent reviews, content,
and citations — faster if competitors are weak.
```
GBP + reviews  ──►  citations + content  ──►  backlinks  ──►  #1 Local Pack
   weeks 1-4          weeks 2-12             ongoing          month 3-6+
```
