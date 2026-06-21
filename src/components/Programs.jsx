import { Link } from 'react-router-dom';
import { programs } from '../data/programs';

export default function Programs() {
  return (
    <section className="section" id="programs" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span className="section-tag">Our Offerings</span>
          <h2 className="section-title section-title-deco">
            Programs for <span className="hl">Every Age</span>
          </h2>
          <p className="section-subtitle">
            Age-appropriate, play-based learning designed to help your child grow at every step —
            from first steps to school-ready.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map(p => (
            <div className={`program-card ${p.color}`} key={p.slug}>
              <div>
                <h3>{p.title}</h3>
                <div className="program-meta">
                  <span className="item">👶 {p.age}</span>
                  <span className="item">👩‍🏫 {p.ratio}</span>
                </div>
                <p>{p.tagline}</p>
                <Link to={`/programs/${p.slug}`} className="btn-card" style={{ display: 'inline-block', textDecoration: 'none' }}>Explore →</Link>
              </div>
              <div className="program-emoji" aria-hidden="true">{p.emoji}</div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 40 }}>
          <Link to="/admission" className="btn btn-primary">View Fee Structure</Link>
        </div>
      </div>
    </section>
  )
}
