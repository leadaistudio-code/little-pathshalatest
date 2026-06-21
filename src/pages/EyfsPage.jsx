import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import { breadcrumbSchema } from '../seo/schema'
import EyfsTree from '../components/EyfsTree'

const aims = [
  'Equal opportunities for every child, whatever their background',
  'Consistent, high-quality learning across every early-years classroom',
  'The right balance of support and gentle challenge for whole-brain development',
  'A strong foundation, with learning tailored for ages birth to five',
  'Warm, trusting partnerships between parents and teachers',
  'Thoughtful help in removing any barriers to a child\'s learning',
]

const primeAreas = [
  {
    icon: '💬',
    title: 'Communication & Language',
    desc: 'We grow conversation and language through listening, attention, understanding and speaking. Pairing words with pictures and plenty of book time helps children find their voice and express themselves with confidence.',
  },
  {
    icon: '🤸',
    title: 'Physical Development',
    desc: 'Daily active play builds both fine and gross motor skills. Healthy movement also sharpens focus, attention and the kind of thinking that fuels strong brain development.',
  },
  {
    icon: '😊',
    title: 'Personal, Social & Emotional',
    desc: 'Children develop a positive sense of self, learn to manage their feelings and form happy friendships — understanding right from wrong and growing into strong, independent little people.',
  },
]

const specificAreas = [
  {
    icon: '📖',
    title: 'Literacy',
    desc: 'Children begin connecting written letters with spoken sounds. Through books and poems they link sounds and letters, getting beautifully ready to read and write.',
  },
  {
    icon: '🔢',
    title: 'Mathematics',
    desc: 'Early number sense grows through counting, simple calculations and exploring shapes and patterns — building spatial awareness and everyday problem-solving.',
  },
  {
    icon: '🌍',
    title: 'Understanding the World',
    desc: 'By exploring people, places, nature and new cultures, children learn to make sense of the physical world — and to notice the little wonders we often take for granted.',
  },
  {
    icon: '🎨',
    title: 'Expressive Arts & Design',
    desc: 'With a rich range of materials, music and art, children create freely and share their thoughts, ideas and feelings — nurturing imagination and self-expression.',
  },
]

function AreaCard({ a }) {
  return (
    <div className="promise">
      <div className="promise-icon">{a.icon}</div>
      <div>
        <h4>{a.title}</h4>
        <p>{a.desc}</p>
      </div>
    </div>
  )
}

export default function EyfsPage() {
  return (
    <>
      <Seo
        path="/eyfs-curriculum"
        title="EYFS Curriculum — Creating Lifelong Learners"
        description="Little Pathshala follows the UK-based EYFS curriculum across 7 areas of learning — for the holistic, play-based development of every child in Sector 91, Faridabad."
        keywords="EYFS curriculum Faridabad, early years foundation stage, play-based learning Faridabad, holistic preschool curriculum, 7 areas of learning"
        schema={[breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'EYFS Curriculum', path: '/eyfs-curriculum' },
        ])]}
      />

      {/* Hero */}
      <section className="program-hero purple">
        <div className="container">
          <nav className="program-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <span className="current">EYFS Curriculum</span>
          </nav>
          <div className="program-hero-grid">
            <div>
              <span className="section-tag">UK-Based Curriculum</span>
              <h1 className="program-hero-title">EYFS Curriculum</h1>
              <p className="program-hero-tag">Creating curious, confident, lifelong learners.</p>
              <div className="hero-actions">
                <Link to="/admission" className="btn btn-primary">Schedule a Visit</Link>
                <a href="tel:+919718463321" className="btn btn-ghost">📞 Call Us</a>
              </div>
            </div>
            <EyfsTree />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container program-narrow">
          <span className="section-tag">The Approach</span>
          <h2 className="section-title">Every Child Is a <span className="hl">Unique Child</span></h2>
          <p className="program-lede">
            At Little Pathshala we believe every child is unique — always learning, and full of the
            potential to be resilient, adaptable, confident and self-assured.
          </p>
          <p className="program-lede">
            The Early Years Foundation Stage (EYFS) is a framework first set by the UK government to
            promote holistic learning, development and safety for children from birth to five. We
            bring that proven, play-based approach to life in every classroom — tailored to each
            child's pace, needs and interests.
          </p>

          <h3 className="program-subhead">What Our EYFS Curriculum Sets Out to Do</h3>
          <ul className="eyfs-list">
            {aims.map((a) => (
              <li key={a}><span className="check">✓</span>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prime areas */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-tag">The Foundation</span>
            <h2 className="section-title section-title-deco">The Three <span className="hl">Prime Areas</span></h2>
            <p className="section-subtitle">
              These come first — the essential building blocks that everything else grows from.
            </p>
          </div>
          <div className="promises-grid">
            {primeAreas.map((a) => <AreaCard a={a} key={a.title} />)}
          </div>
        </div>
      </section>

      {/* Specific areas */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-tag">Building Further</span>
            <h2 className="section-title section-title-deco">The Four <span className="hl">Specific Areas</span></h2>
            <p className="section-subtitle">
              These strengthen and apply the prime areas, opening up the wider world of learning.
            </p>
          </div>
          <div className="promises-grid">
            {specificAreas.map((a) => <AreaCard a={a} key={a.title} />)}
          </div>
        </div>
      </section>

      {/* Customization + CTA */}
      <section className="program-cta">
        <div className="container text-center">
          <h2>Learning, Tailored to Your Child</h2>
          <p>
            Every activity is planned around these seven areas — and shaped by our teachers to fit
            your child's own needs, pace and interests. Come and see it in action.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/admission" className="btn btn-primary">Schedule a Visit</Link>
            <Link to="/programs" className="btn btn-outline">View Our Programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
