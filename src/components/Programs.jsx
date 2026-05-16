const programs = [
  {
    color: 'yellow',
    emoji: '🧸',
    title: 'Play Group',
    age: '1.5 – 2.5 Years',
    ratio: '1 : 8',
    desc: 'A gentle start to social interaction. Focus on sensory play, rhymes, and making new friends in a warm, joyful setting.',
  },
  {
    color: 'purple',
    emoji: '🎨',
    title: 'Nursery',
    age: '2.5 – 3.5 Years',
    ratio: '1 : 10',
    desc: 'Developing curiosity through colors, shapes, hands-on creative activities, and early communication skills.',
  },
  {
    color: 'blue',
    emoji: '📚',
    title: 'LKG / UKG',
    age: '3.5 – 5.5 Years',
    ratio: '1 : 12',
    desc: 'Building strong foundations in reading, writing, numbers, and logical thinking through guided play and exploration.',
  },
  {
    color: 'green',
    emoji: '🌟',
    title: 'Daycare',
    age: '6 Months – 10 Years',
    ratio: '1 : 4',
    desc: 'Empirical, research-based daycare with nutritious meals, naps, learning activities, and 24/7 CCTV monitoring.',
  },
]

export default function Programs() {
  return (
    <section className="section" id="programs" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span className="section-tag">Our Offerings</span>
          <h2 className="section-title section-title-deco">
            We Are <span className="hl">Pioneers In</span>
          </h2>
          <p className="section-subtitle">
            Age-appropriate curriculum designed to help your child grow at every step.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map(p => (
            <div className={`program-card ${p.color}`} key={p.title}>
              <div>
                <h3>{p.title}</h3>
                <div className="program-meta">
                  <span className="item">👶 {p.age}</span>
                  <span className="item">👩‍🏫 Ratio {p.ratio}</span>
                </div>
                <p>{p.desc}</p>
                <button className="btn-card">Get Details →</button>
              </div>
              <div className="program-emoji" aria-hidden="true">{p.emoji}</div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 40 }}>
          <a href="#admission" className="btn btn-primary">View Fee Structure</a>
        </div>
      </div>
    </section>
  )
}
