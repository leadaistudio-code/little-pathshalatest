import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import { breadcrumbSchema } from '../seo/schema'

export default function BranchLocatorPage() {
  return (
    <>
      <Seo
        path="/centres/branch-locator"
        title="Branch Locator — Find Little Pathshala in Faridabad"
        description="Locate Little Pathshala preschool & daycare in Sector 91, Faridabad. Get directions, timings and contact details, and book a campus visit."
        keywords="preschool near me Faridabad, Little Pathshala location, daycare Sector 91 directions, branch locator"
        schema={[breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Centres', path: '/centres' },
          { name: 'Branch Locator', path: '/centres/branch-locator' },
        ])]}
      />
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-tag">Branch Locator</span>
            <h2 className="section-title section-title-deco">
              Find Us in <span className="hl">Faridabad</span>
            </h2>
            <p className="section-subtitle">
              Our flagship campus in Sector 91 is open and welcoming little learners. Drop by for a visit — we'd love to show you around.
            </p>
          </div>

          <div className="info-band">
            <div>
              <h3 style={{ color: 'var(--purple-700)', fontSize: 24, marginBottom: 8 }}>🏫 Faridabad — Sector 91</h3>
              <p style={{ color: 'var(--gray-700)', marginBottom: 18 }}>
                H.No 32, Surya Vihar, Sector 91, Faridabad, Haryana 121003
              </p>
              <p style={{ color: 'var(--gray-700)', margin: '6px 0' }}>🕗 Mon–Sat: 8:00 AM – 6:00 PM</p>
              <p style={{ color: 'var(--gray-700)', margin: '6px 0' }}>
                📞 <a href="tel:+919718463321">+91 9718463321</a>
              </p>
              <p style={{ color: 'var(--gray-700)', margin: '6px 0' }}>
                ✉️ <a href="mailto:hello@littlepathshala.com">hello@littlepathshala.com</a>
              </p>
              <div className="hero-actions" style={{ marginTop: 22 }}>
                <a className="btn btn-primary" href="https://www.google.com/maps/search/?api=1&query=Surya+Vihar+Sector+91+Faridabad" target="_blank" rel="noopener noreferrer">Get Directions</a>
                <Link className="btn btn-ghost" to="/admission">Book a Visit</Link>
              </div>
            </div>
            <iframe
              className="map-frame"
              title="Little Pathshala, Sector 91 Faridabad"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Surya%20Vihar%20Sector%2091%20Faridabad&output=embed"
            />
          </div>

          <div className="text-center" style={{ marginTop: 40 }}>
            <Link to="/centres/upcoming" className="btn btn-secondary">See Upcoming Branches →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
