import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import { breadcrumbSchema } from '../seo/schema'

const centres = [
  {
    icon: '🏫',
    name: 'Faridabad — Sector 91',
    address: 'H.No 32, Surya Vihar, Sector 91, Faridabad, Haryana 121003',
    phone: '+91 9718463321',
  },
  {
    icon: '🏙️',
    name: 'Delhi NCR',
    address: 'New centre — admissions open for 2026-27.',
    phone: '+91 9718463321',
  },
  {
    icon: '🌆',
    name: 'Gurugram',
    address: 'New centre — admissions open for 2026-27.',
    phone: '+91 9718463321',
  },
  {
    icon: '🏬',
    name: 'Noida',
    address: 'New centre — admissions open for 2026-27.',
    phone: '+91 9718463321',
  },
]

export default function CentresPage() {
  return (
    <>
      <Seo
        path="/centres"
        title="Our Centres in Faridabad & Delhi NCR"
        description="Find a Little Pathshala preschool & daycare near you — Sector 91 Faridabad, plus new centres across Delhi NCR, Gurugram and Noida. Book a campus visit today."
        keywords="preschool near me Faridabad, daycare Sector 91, preschool Delhi NCR, playschool Gurugram, preschool Noida"
        schema={[breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Centres', path: '/centres' },
        ])]}
      />
    <section className="section" id="centres" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span className="section-tag">Our Centres</span>
          <h2 className="section-title section-title-deco">
            Find a Centre <span className="hl">Near You</span>
          </h2>
          <p className="section-subtitle">
            Safe, joyful campuses across the region — each one a magical place for little learners to grow.
          </p>
        </div>

        <div className="promises-grid">
          {centres.map(c => (
            <div className="promise" key={c.name}>
              <div className="promise-icon">{c.icon}</div>
              <div>
                <h4>{c.name}</h4>
                <p>{c.address}</p>
                <p style={{ marginTop: 8 }}>
                  <a href={`tel:${c.phone.replace(/\s/g, '')}`}>📞 {c.phone}</a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 40, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/centres/branch-locator" className="btn btn-primary">Branch Locator</Link>
          <Link to="/centres/upcoming" className="btn btn-secondary">Upcoming Branches</Link>
          <Link to="/admission" className="btn btn-ghost">Book a Campus Visit</Link>
        </div>
      </div>
    </section>
    </>
  )
}
