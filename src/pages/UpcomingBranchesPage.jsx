import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import { breadcrumbSchema } from '../seo/schema'

const upcoming = [
  { icon: '🏙️', name: 'Delhi NCR', note: 'Opening soon — pre-registrations welcome for 2026-27.' },
  { icon: '🌆', name: 'Gurugram', note: 'Coming soon — be among the first families to join.' },
  { icon: '🏬', name: 'Noida', note: 'New campus on the way — express your interest today.' },
  { icon: '🏡', name: 'Greater Faridabad', note: 'Expanding closer to you — register your interest.' },
]

export default function UpcomingBranchesPage() {
  return (
    <>
      <Seo
        path="/centres/upcoming"
        title="Upcoming Branches — Little Pathshala Expansion"
        description="New Little Pathshala preschool & daycare centres are coming to Delhi NCR, Gurugram, Noida and Greater Faridabad. Pre-register your interest for 2026-27."
        keywords="new preschool Delhi NCR, upcoming daycare Gurugram, preschool Noida 2026, Little Pathshala new centre"
        schema={[breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Centres', path: '/centres' },
          { name: 'Upcoming Branches', path: '/centres/upcoming' },
        ])]}
      />
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-tag">Upcoming Branches</span>
            <h2 className="section-title section-title-deco">
              We're <span className="hl">Growing</span> Near You
            </h2>
            <p className="section-subtitle">
              Little Pathshala is expanding across the region. Pre-register your interest and we'll reach out the moment admissions open at a centre near you.
            </p>
          </div>

          <div className="promises-grid">
            {upcoming.map(c => (
              <div className="promise" key={c.name}>
                <div className="promise-icon">{c.icon}</div>
                <div>
                  <h4>{c.name}</h4>
                  <p>{c.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 40 }}>
            <Link to="/admission" className="btn btn-primary">Pre-Register Interest</Link>
          </div>
        </div>
      </section>
    </>
  )
}
