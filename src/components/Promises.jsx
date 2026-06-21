const promises = [
  { icon: '📺', title: 'Live CCTV Feed', desc: 'LIVE CCTV streaming of every classroom so parents can watch their children bloom in real time.' },
  { icon: '📋', title: 'EYFS Curriculum', desc: 'UK-based Early Years Foundation Stage curriculum for holistic growth through experiential learning.' },
  { icon: '🔬', title: 'Research-Based Pedagogy', desc: 'Activities designed to make children engage, enquire, apply, and learn by doing it themselves.' },
  { icon: '🛡️', title: 'Child Safety & Hygiene', desc: 'From vaccinated staff and face recognition to LIVE CCTV — top priority on safety and hygiene.' },
  { icon: '🧠', title: 'Brain Aptitude Test', desc: 'Discover each child\'s unique potential with a multiple-intelligence aptitude test that informs the curriculum.' },
  { icon: '🤝', title: 'Parent Bonding', desc: 'A unique binding exercise that conquers separation anxiety for both parent and child.' },
  { icon: '🥗', title: 'Nutritionist Meal Plans', desc: 'Four regional & seasonal meal plans, all pre-planned by a certified child nutritionist.' },
  { icon: '📱', title: 'Parents App Updates', desc: 'A one-stop app for LIVE feed, meals, naps, performance, and everything a parent needs to know.' },
]

export default function Promises() {
  return (
    <section className="section" id="promises" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title section-title-deco">
            Our <span className="hl">Promises</span>
          </h2>
          <p className="section-subtitle">
            The unwavering commitments we keep to every parent who trusts us with their child.
          </p>
        </div>

        <div className="promises-grid">
          {promises.map(p => (
            <div className="promise" key={p.title}>
              <div className="promise-icon">{p.icon}</div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
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
