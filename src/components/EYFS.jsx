const petals = [
  { cls: 'p1', icon: '📖', label: 'Literacy' },
  { cls: 'p2', icon: '🔢', label: 'Mathematics' },
  { cls: 'p3', icon: '🌍', label: 'Understanding the World' },
  { cls: 'p4', icon: '🎨', label: 'Expressive Arts' },
  { cls: 'p5', icon: '💬', label: 'Communication' },
  { cls: 'p6', icon: '😊', label: 'Personal & Social' },
]

export default function EYFS() {
  return (
    <section className="section" id="eyfs">
      <div className="eyfs">
        <div>
          <span className="section-tag">UK-Based Curriculum</span>
          <h2 style={{ fontSize: 38 }}>
            UK based <span style={{ color: 'var(--yellow-600)' }}>EYFS Curriculum</span>
          </h2>
          <p style={{ color: 'var(--gray-700)' }}>
            Little Pathshala accentuates the <strong>UK-based Early Years Foundation Stage (EYFS)</strong> curriculum
            for the holistic and brain development of your child — proven, research-backed, and joyful.
          </p>

          <ul className="eyfs-list">
            <li><span className="check">✓</span><span>Lifetime of learning experiences for every child</span></li>
            <li><span className="check">✓</span><span>Cultivates admiration for creating, learning, discovering, and exploring</span></li>
            <li><span className="check">✓</span><span>Focuses on 7 key areas of child development</span></li>
            <li><span className="check">✓</span><span>Personalized learning plan for every child's unique pace</span></li>
          </ul>

          <a className="btn btn-secondary" href="#programs">Get Details →</a>
        </div>

        <div className="eyfs-diagram" aria-hidden="true">
          {petals.map(p => (
            <div className={`eyfs-petal ${p.cls}`} key={p.cls}>
              <span className="icon">{p.icon}</span>
              {p.label}
            </div>
          ))}
          <div className="eyfs-center">EYFS</div>
        </div>
      </div>
    </section>
  )
}
