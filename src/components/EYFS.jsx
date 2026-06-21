import { Link } from 'react-router-dom'
import EyfsTree from './EyfsTree'

export default function EYFS() {
  return (
    <section className="section" id="eyfs">
      <div className="eyfs">
        <div>
          <span className="section-tag">UK-Based Curriculum</span>
          <h2 style={{ fontSize: 38 }}>
            UK based <span style={{ color: 'var(--yellow-600)' }}>EYFS Curriculum</span>
          </h2>
          <p className="paragraph-text" style={{ fontSize: 16, color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: 24 }}>
            <strong>Little Pathshala champions the UK-based Early Years Foundation Stage (EYFS) Curriculum to ensure the complete holistic and cognitive development of your child.</strong>
          </p>

          <ul className="list-unstyled p-0 eyfs-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{ color: 'var(--purple-600)' }}>✔</span> A lifetime of meaningful learning experiences
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{ color: 'var(--purple-600)' }}>✔</span> Cultivates a lifelong passion for exploring, creating, and discovering
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{ color: 'var(--purple-600)' }}>✔</span> Structured focus on the 7 key areas of early childhood development
            </li>
            <li><span className="check">✓</span><span>Personalized learning plan for every child's unique pace</span></li>
          </ul>

          <Link className="btn btn-secondary" to="/eyfs-curriculum">Get Details →</Link>
        </div>

        <EyfsTree />
      </div>
    </section>
  )
}
