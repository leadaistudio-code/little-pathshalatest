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
              Best Preschool & <br />
              <span className="accent">Daycare for</span> Future Leaders
            </h1>

            <p className="hero-sub">A magical place where learning is an adventure ✨</p>

            <div className="hero-bullets">
              <span className="bullet"><span className="live">LIVE</span> CCTV Streaming</span>
              <span className="bullet">📚 EYFS Curriculum</span>
              <span className="bullet">🛡️ 100% Safe Campus</span>
            </div>

            <div className="hero-meta">
              <span>🕒 8:30 AM – 6:00 PM</span>
              <span className="pipe">|</span>
              <span>👶 6 Months+ Children</span>
              <span className="pipe">|</span>
              <span>👩‍🏫 Trained Educators</span>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#admission">Enroll Now →</a>
              <a className="btn btn-secondary" href="#programs">View Programs</a>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-art-blob">
              <span className="hero-art-emoji" role="img" aria-label="Happy child">🧒</span>
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
