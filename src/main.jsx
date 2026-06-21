import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './contexts/AuthContext.jsx'
import App from './App.jsx'
import './styles/index.css'

const root = document.getElementById('root')

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
)

// Prerendered HTML present (production) → hydrate. Empty shell (dev) → mount.
if (root.childElementCount > 0) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
