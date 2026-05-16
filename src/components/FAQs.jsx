import { useState } from 'react'

const faqs = [
  {
    q: 'What age is required for my child to enroll in Little Pathshala?',
    a: 'We provide programs for children from 6 months onwards. We believe early childhood education of the highest caliber gives children the finest start in life. At Little Pathshala, we assist children in becoming lifelong learners and empower achievement and confidence in them.',
  },
  {
    q: 'What is the procedure for applying to Little Pathshala?',
    a: 'You can fill out the admission inquiry form on our website, and our admissions team will get in touch within 24 hours. We then schedule a campus visit, a parent-child interaction, and finalize enrollment. The full process typically takes 3–5 working days.',
  },
  {
    q: 'What qualifications do your teachers hold?',
    a: 'All our educators hold a degree in Early Childhood Education or equivalent, plus certified training in Montessori and the EYFS framework. They undergo continuous professional development and child-safety training every quarter.',
  },
  {
    q: 'Will my child be fed while at the preschool?',
    a: 'Yes. We provide four nutritious meals (morning snack, lunch, evening snack, and an optional milk break) — all designed by a certified child nutritionist using regional, seasonal, and freshly prepared ingredients on campus.',
  },
  {
    q: 'Is the campus safe? What safety measures are in place?',
    a: '24/7 CCTV with live parent feed, biometric entry, vaccinated and background-verified staff, child-safe furniture, fire & evacuation drills, on-site nurse, and a 1:8 teacher-student ratio for full attention.',
  },
]

export default function FAQs() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span className="section-tag">FAQs</span>
          <h2 className="section-title section-title-deco">
            Frequently Asked <span className="hl">Questions</span>
          </h2>
        </div>

        <div className="faqs">
          {faqs.map((f, i) => (
            <div className={`faq ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}
                <span className="chev">▼</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
