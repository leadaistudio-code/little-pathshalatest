import { Link } from 'react-router-dom'

// Promotional strip shown above the hero. Banner-only program nicknames
// (Seekers/Explorers/Navigators/Voyagers) link to the real program pages.
const cards = [
  { age: '2-3 years', name: 'Seekers', sub: 'Pre-Nursery', color: 'pink', to: '/programs/pre-nursery' },
  { age: '3-4 years', name: 'Explorers', sub: 'Nursery', color: 'purple', to: '/programs/nursery' },
  { age: '4-5 years', name: 'Navigators', sub: 'LKG', color: 'orange', to: '/programs/lkg' },
  { age: '5-6 years', name: 'Voyagers', sub: 'UKG', color: 'blue', to: '/programs/ukg' },
]

export default function PromoBanner() {
  return (
    <section className="promo-banner" aria-label="Admissions open for 2026-27">
      <div className="promo-inner">
        {/* left photo */}
        <div className="promo-photo" aria-hidden="true">
          <img src="/assets/poster2.jpg" alt="" loading="lazy" />
        </div>

        {/* center — programs */}
        <div className="promo-center">
          <h2 className="promo-title">Nurturing Future Leaders</h2>
          <div className="promo-cards">
            {cards.map((c) => (
              <div className={`promo-card ${c.color}`} key={c.name}>
                <span className="age-pill">{c.age}</span>
                <h3>{c.name}</h3>
                <span className="promo-card-sub">({c.sub})</span>
                <Link to={c.to} className="promo-enquire">Enquire Now</Link>
              </div>
            ))}
          </div>
        </div>

        {/* right — brand */}
        <div className="promo-brand">
          <p className="promo-heart">I <span className="hrt">❤️</span> Little Pathshala</p>
          <p className="promo-tag">
            India's No 1 Premium International<br />
            <strong>Preschool in Faridabad</strong>
          </p>

          <div className="promo-brand-row">
            <div className="admissions-badge">
              <span className="ab-top">ADMISSIONS</span>
              <span className="ab-open">OPEN</span>
              <span className="ab-bot">FOR AY 2026-27</span>
            </div>
            <p className="promo-standard">
              Where early education<br />Exceeds <strong>Global Standards.</strong>
            </p>
          </div>

          <a className="promo-phone" href="tel:+919718463321">
            <span className="pp-ico">📞</span> +91 9718463321
          </a>
        </div>
      </div>
      <div className="promo-flowers" aria-hidden="true">🌷🌸🌼🌷🌸🌼🌷🌸🌼🌷🌸🌼</div>
    </section>
  )
}
