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
            <h3 style={{ fontSize: 28, marginBottom: 18 }}>About Little Pathshala</h3>
            <p style={{ color: 'var(--gray-700)', fontSize: 16 }}>
              Since 2013, <strong>Little Pathshala</strong> has been a trusted name in early childhood education and daycare in Faridabad. Based in Sector 91, we nurture inquisitive young minds through hands-on, experiential, play-based learning that helps them understand the world around them.
            </p>
            <p style={{ color: 'var(--gray-700)', fontSize: 16 }}>
              Driven by the UK-based EYFS curriculum, our Play Group, Nursery, LKG and UKG programs centre on imagination and creativity to foster the holistic growth of every child — from daycare through kindergarten.
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
            <div className="about-image yellow p-0" style={{overflow: 'hidden'}}><img src="/assets/poster2.jpg" alt="Preschool children at Little Pathshala Faridabad" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
            <div className="about-image purple tall p-0" style={{overflow: 'hidden'}}><img src="/assets/teacher.jpg" alt="Caring preschool teacher with a child in Faridabad" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
            <div className="about-image pink tall p-0" style={{overflow: 'hidden'}}><img src="/assets/poster1.jpg" alt="Kids enjoying play-based learning at Little Pathshala daycare" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
            <div className="about-image green p-0" style={{overflow: 'hidden'}}><img src="/assets/minion.jpg" alt="Fun activities at Little Pathshala preschool, Sector 91 Faridabad" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
          </div>
        </div>

        {/* Vision · Mission · Philosophy */}
        <div className="text-center" style={{ margin: '88px 0 48px' }}>
          <span className="section-tag">What Drives Us</span>
          <h2 className="section-title section-title-deco">
            Our Vision, Mission &amp; <span className="hl">Philosophy</span>
          </h2>
        </div>

        <div className="vmp-grid">
          <article className="vmp-card vision">
            <div className="vmp-icon">🌟</div>
            <h3>Vision</h3>
            <p>
              Our vision is to help every child grow with confidence — in mind, body, and spirit —
              so they become curious, lifelong learners who never stop reaching for more.
            </p>
            <p>
              At Little Pathshala, we want our children to grow into young people who are kind,
              resilient, and genuinely engaged with the world around them. We want them to care as
              much as they achieve — to grow up ready to make a real, positive difference in the
              lives of others.
            </p>
          </article>

          <article className="vmp-card mission">
            <div className="vmp-icon">🎯</div>
            <h3>Mission</h3>
            <p className="vmp-quote">“A Nurturing Environment Shapes the Child.”</p>
            <p>
              We believe every child deserves a space where they can truly thrive — not just
              academically, but as people. At Little Pathshala, our goal is simple: give children
              the opportunities they need to discover their potential, build strong character, and
              develop the core academic skills that set them up for life.
            </p>
            <p>
              We know learning never really stops — there's something new to discover every single
              day. So alongside a classroom that's genuinely built for learning, what matters most
              to us is this: every child who walks through our doors feels welcomed, respected, and
              heard.
            </p>
          </article>

          <article className="vmp-card philosophy">
            <div className="vmp-icon">💜</div>
            <h3>Philosophy</h3>
            <p>
              Every child carries their own unique spark — and their own path to success. At Little
              Pathshala, we've built a learning environment that's structured yet exciting, with the
              resources and approach to educate, encourage, and inspire every child to discover what
              they're truly good at.
            </p>
            <p>
              We also believe learning isn't just about academics. It's about growing up in a space
              filled with culturally rooted values, love, care, respect, and a real sense of safety
              — the kind of environment where a child's mind, body, and spirit can grow healthy and
              strong together.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
