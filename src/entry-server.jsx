import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// Re-exported so the prerender script can inject sitewide JSON-LD.
export { siteWideSchemaJson } from './seo/schema'

// Called by prerender.js for each route. Returns the app markup plus the
// <head> tags (title, meta, canonical, OG, JSON-LD) collected by react-helmet.
export function render(url) {
  const helmetContext = {}

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext
  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n    ')

  return { appHtml, head }
}
