import { useState } from 'react'

const features = [
  { icon: '🎯', label: 'Holistic Child Development' },
  { icon: '❤️', label: 'Warm & Loving Atmosphere' },
  { icon: '🛡️', label: 'Safe & Secure Campus' },
  { icon: '🌱', label: 'Play-based Learning' },
]

export default function About() {
  const [active, setActive] = useState(1)

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span className="section-tag">About Us</span>
          <h2 className="section-title section-title-deco">
            Nurturing <span className="hl">Little Minds</span>
          </h2>
        </div>

        <div className="about-grid">
          <div>
            <h3 style={{ fontSize: 28, marginBottom: 18 }}>Our Vision &amp; Mission</h3>
            <p style={{ color: 'var(--gray-700)', fontSize: 16 }}>
              At <strong>Little Pathshala</strong>, we envision a world where every child falls in love with
              learning. Our mission is to provide a <strong style={{ color: 'var(--purple-700)' }}>safe, caring, and joyful environment</strong> that
              encourages holistic development through play, exploration, and creative expression.
            </p>
            <p style={{ color: 'var(--gray-700)', fontSize: 16 }}>
              We believe that the early years are crucial for building character and confidence.
              That's why we focus on not just academic basics, but on nurturing kindness, curiosity,
              and social skills that last a lifetime.
            </p>

            <div className="about-features">
              {features.map((f, i) => (
                <div
                  key={f.label}
                  className={`about-feature ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div className="icon">{f.icon}</div>
                  <div className="label">{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image-grid">
            <div className="about-image yellow">🎨</div>
            <div className="about-image purple tall">📚</div>
            <div className="about-image pink tall">🧸</div>
            <div className="about-image green">⚽</div>
          </div>
        </div>
      </div>
    </section>
  )
}
