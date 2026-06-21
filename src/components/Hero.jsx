import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">
              <span className="dot" />
              Welcome to Little Pathshala
            </span>

            <h1>
              Best Preschool & <span className="accent">Daycare</span><br />
              in Faridabad
            </h1>

            <p className="hero-sub">Play Group, Nursery, LKG &amp; UKG — Sector 91, Faridabad. Trusted since 2013.</p>

            <div className="hero-bullets">
              <span className="bullet"><span className="live">LIVE</span> Real-Time CCTV</span>
              <span className="bullet">📚 UK-Based EYFS</span>
            </div>

            <div className="hero-meta">
              <span>🕒 8:30 AM – 6:00 PM</span>
              <span className="pipe">|</span>
              <span>👶 6 Months & Above</span>
            </div>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/admission">Enroll Now →</Link>
              <Link className="btn btn-secondary" to="/programs">View Programs</Link>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-art-blob" style={{ background: 'none', overflow: 'hidden' }}>
              <img className="hero-real-image" src="/assets/activity.jpg" alt="Children learning through play at Little Pathshala preschool & daycare in Sector 91, Faridabad" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
            </div>
            <div className="hero-floats">
              <div className="float float-1">
                <span className="ico">🎨</span>
                <div>
                  <strong>Creative</strong>
                  <div style={{ fontSize: 11, color: 'var(--gray-500)', fontWeight: 500 }}>Art & Craft</div>
                </div>
              </div>
              <div className="float float-2">
                <span className="ico">⭐</span>
                <div>
                  <strong>4.9 / 5</strong>
                  <div style={{ fontSize: 11, color: 'var(--gray-500)', fontWeight: 500 }}>500+ Parents</div>
                </div>
              </div>
              <div className="float float-3">
                <span className="ico">🏆</span>
                <div>
                  <strong>Award Winning</strong>
                  <div style={{ fontSize: 11, color: 'var(--gray-500)', fontWeight: 500 }}>Since 2013</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
