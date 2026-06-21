import { Link } from 'react-router-dom'

/**
 * Renders a single program's detail page from a program data object.
 * Visual language matches the rest of Little Pathshala (purple/yellow, soft cards).
 */
export default function ProgramDetail({ program }) {
  const { title, emoji, color, age, ratio, duration, tagline, intro, explores, schedule, outcomes } = program

  return (
    <>
      {/* ── Program hero band ── */}
      <section className={`program-hero ${color}`}>
        <div className="container">
          <nav className="program-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/programs">Our Programs</Link>
            <span>›</span>
            <span className="current">{title}</span>
          </nav>

          <div className="program-hero-grid">
            <div>
              <span className="section-tag">Our Programs</span>
              <h1 className="program-hero-title">{title}</h1>
              <p className="program-hero-tag">{tagline}</p>

              <div className="program-facts">
                <div className="program-fact">
                  <span className="ico">👶</span>
                  <div><strong>{age}</strong><span>Age Group</span></div>
                </div>
                <div className="program-fact">
                  <span className="ico">👩‍🏫</span>
                  <div><strong>{ratio}</strong><span>Teacher Ratio</span></div>
                </div>
                <div className="program-fact">
                  <span className="ico">⏰</span>
                  <div><strong>{duration}</strong><span>Duration</span></div>
                </div>
              </div>

              <div className="hero-actions" style={{ marginTop: 28 }}>
                <Link to="/admission" className="btn btn-primary">Enquire / Enrol Now</Link>
                <a href="tel:+919718463321" className="btn btn-ghost">📞 Call Us</a>
              </div>
            </div>

            <div className="program-hero-art" aria-hidden="true">
              <div className="program-hero-blob">{emoji}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="section">
        <div className="container program-narrow">
          <span className="section-tag">Overview</span>
          <h2 className="section-title">
            Inside the <span className="hl">{title}</span> Experience
          </h2>
          {intro.map((para, i) => (
            <p key={i} className="program-lede">{para}</p>
          ))}

          {explores?.length > 0 && (
            <>
              <h3 className="program-subhead">What Your Child Explores</h3>
              <div className="chip-row">
                {explores.map((e) => (
                  <span className="chip" key={e}>{e}</span>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── A day with us ── */}
      {schedule?.length > 0 && (
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <span className="section-tag">A Day With Us</span>
              <h2 className="section-title section-title-deco">
                How a Day <span className="hl">Unfolds</span>
              </h2>
              <p className="section-subtitle">
                Every day follows a gentle, predictable rhythm that helps children feel safe and ready to learn.
              </p>
            </div>

            <div className="schedule-grid">
              {schedule.map((s, i) => (
                <div className="schedule-card" key={s.title}>
                  <div className="schedule-num">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Learning outcomes ── */}
      {outcomes?.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <span className="section-tag">Milestones</span>
              <h2 className="section-title section-title-deco">
                What Your Child <span className="hl">Takes Home</span>
              </h2>
            </div>

            <div className="outcomes-grid">
              {outcomes.map((o) => (
                <div className="outcome-card" key={o.title}>
                  <h4>{o.title}</h4>
                  <ul className="eyfs-list">
                    {o.items.map((item) => (
                      <li key={item}><span className="check">✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA band ── */}
      <section className="program-cta">
        <div className="container text-center">
          <h2>Give Your Child the Perfect Start</h2>
          <p>Book a free trial class and a campus visit at Little Pathshala, Sector 91, Faridabad.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/admission" className="btn btn-primary">Start Admission</Link>
            <Link to="/programs" className="btn btn-outline">View All Programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
