// Post-build static-site generation.
// Renders every route to real HTML so crawlers and social previews get full
// content (title, meta, JSON-LD, body) without running JavaScript.
//
// Run order (see package.json "build"):
//   1. vite build                          -> client bundle + dist/index.html template
//   2. vite build --ssr entry-server       -> dist-server/entry-server.js
//   3. node prerender.js                   -> writes dist/<route>/index.html

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, 'dist')

// Every route the SPA serves.
const routes = [
  '/',
  '/about',
  '/programs',
  '/programs/play-group',
  '/programs/pre-nursery',
  '/programs/nursery',
  '/programs/lkg',
  '/programs/ukg',
  '/programs/daycare',
  '/eyfs-curriculum',
  '/promises',
  '/blog',
  '/faqs',
  '/admission',
  '/admission/nursery-faridabad',
  '/centres',
  '/centres/branch-locator',
  '/centres/upcoming',
  '/franchise',
]

async function run() {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
  const { render, siteWideSchemaJson } = await import('./dist-server/entry-server.js')

  const sitewide = `<script type="application/ld+json">${siteWideSchemaJson()}</script>`

  for (const url of routes) {
    const { appHtml, head } = render(url)

    const html = template
      // remove the default title/description so helmet's per-page tags are the only ones
      .replace(/\s*<title>[\s\S]*?<\/title>/, '')
      .replace(/\s*<meta name="description"[^>]*>/, '')
      .replace('<!--sitewide-schema-->', sitewide)
      .replace('<!--app-head-->', head)
      .replace('<!--app-html-->', appHtml)

    const outDir = url === '/' ? distDir : path.join(distDir, url)
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, 'index.html'), html)
    console.log(`  ✓ prerendered ${url} -> ${path.relative(__dirname, path.join(outDir, 'index.html'))}`)
  }

  // 404 page (served by Apache ErrorDocument for unknown paths).
  {
    const { appHtml, head } = render('/__not_found__')
    const html = template
      .replace(/\s*<title>[\s\S]*?<\/title>/, '')
      .replace(/\s*<meta name="description"[^>]*>/, '')
      .replace('<!--sitewide-schema-->', sitewide)
      .replace('<!--app-head-->', head)
      .replace('<!--app-html-->', appHtml)
    fs.writeFileSync(path.join(distDir, '404.html'), html)
    console.log('  ✓ prerendered 404 -> dist\\404.html')
  }

  console.log(`\nPrerendered ${routes.length} routes + 404.`)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
