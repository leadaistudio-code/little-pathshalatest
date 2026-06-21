import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import { breadcrumbSchema, faqSchema } from '../seo/schema'

const reasons = [
  { icon: '🎓', title: 'EYFS & Montessori Curriculum', desc: 'A play-based, internationally inspired curriculum that makes learning joyful and meaningful.' },
  { icon: '📺', title: 'Live CCTV for Parents', desc: 'Watch your child learn and play through secure, real-time camera access.' },
  { icon: '🍎', title: 'Nutritious Meals', desc: 'Fresh, balanced meals planned with a certified child nutritionist.' },
  { icon: '👩‍🏫', title: 'Trained, Caring Teachers', desc: 'Warm, background-checked facilitators with a low child-to-teacher ratio.' },
  { icon: '🛡️', title: 'Safe, Secure Campus', desc: 'Child-proofed spaces, hygiene checks and strict safety protocols.' },
  { icon: '🎨', title: 'Activity-Rich Days', desc: 'Art, music, dance, phonics, STEAM and outdoor play, every single day.' },
]

const faqs = [
  { q: 'What is the right age for nursery admission in Faridabad?', a: 'Children between 3 and 4 years are ideal for our Nursery programme. We also offer Play Group (1.5–2.5 yrs) and Pre-Nursery (2–3 yrs) for younger children.' },
  { q: 'How do I apply for nursery admission at Little Pathshala?', a: 'Simply fill out our online admission enquiry form or call us. Our team will schedule a campus visit and a free trial class within 24 hours.' },
  { q: 'Where is Little Pathshala located in Faridabad?', a: 'Our campus is in Surya Vihar, Sector 91, Faridabad, Haryana 121003 — easily accessible with safe drop-off and pick-up.' },
  { q: 'Are admissions open for 2026-27?', a: 'Yes, admissions for the 2026-27 session are open. Seats are limited per class to maintain our low teacher-to-child ratio, so early enrolment is recommended.' },
]

export default function NurseryFaridabadPage() {
  return (
    <>
      <Seo
        path="/admission/nursery-faridabad"
        title="Nursery School Admission in Faridabad 2026-27"
        description="Nursery admission open at Little Pathshala, Sector 91 Faridabad. Play-based EYFS & Montessori learning, live CCTV, nutritious meals, caring teachers. Book a free trial class."
        keywords="nursery school admission Faridabad, nursery admission Sector 91, best preschool Faridabad, playschool admission Faridabad 2026"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Admission', path: '/admission' },
            { name: 'Nursery Admission Faridabad', path: '/admission/nursery-faridabad' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <section className="program-hero purple">
        <div className="container">
          <nav className="program-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <Link to="/admission">Admission</Link><span>›</span>
            <span className="current">Nursery Admission — Faridabad</span>
          </nav>
          <div className="program-hero-grid">
            <div>
              <span className="section-tag">Admissions Open 2026-27</span>
              <h1 className="program-hero-title">Nursery Admission in Faridabad</h1>
              <p className="program-hero-tag">
                Give your little one a joyful, confident start at Little Pathshala — Sector 91's loved preschool & daycare.
              </p>
              <div className="hero-actions">
                <Link to="/admission" className="btn btn-primary">Apply Now</Link>
                <a href="tel:+919718463321" className="btn btn-ghost">📞 +91 9718463321</a>
              </div>
            </div>
            <div className="program-hero-art" aria-hidden="true">
              <div className="program-hero-blob">🌸</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-tag">Why Parents Choose Us</span>
            <h2 className="section-title section-title-deco">
              The Best Start in <span className="hl">Faridabad</span>
            </h2>
            <p className="section-subtitle">
              Families across Sector 91 and Greater Faridabad trust Little Pathshala for safe, nurturing, play-based early education.
            </p>
          </div>

          <div className="promises-grid">
            {reasons.map(r => (
              <div className="promise" key={r.title}>
                <div className="promise-icon">{r.icon}</div>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <span className="section-tag">Good to Know</span>
            <h2 className="section-title section-title-deco">Nursery Admission <span className="hl">FAQs</span></h2>
          </div>
          <div className="faqs">
            {faqs.map((f) => (
              <details className="faq" key={f.q} style={{ padding: '4px 0' }}>
                <summary className="faq-q" style={{ cursor: 'pointer', listStyle: 'none' }}>{f.q}</summary>
                <div className="faq-a" style={{ maxHeight: 'none' }}>
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 40 }}>
            <Link to="/admission" className="btn btn-primary">Start Your Admission</Link>
          </div>
        </div>
      </section>
    </>
  )
}
