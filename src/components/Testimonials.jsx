const reviews = [
  {
    name: 'Gaurav Gaba',
    role: 'Parent',
    initials: 'GG',
    text: '"I enrolled my 6-month-old child after researching several daycares in the area. Little Pathshala was by far the best in terms of cleanliness and staff professionalism. They provide incredible quality and care at a very reasonable price. Hoping to see more branches soon!"',
  },
  {
    name: 'Surbhi Takkar',
    role: 'Parent',
    initials: 'ST',
    text: '"My daughter has been attending Little Pathshala for almost three months now. The teachers are incredibly enthusiastic and truly want to see their students succeed. I’ve noticed a significant improvement in my child’s confidence. I’m so glad I chose them for my kid!"',
  },
  {
    name: 'Priya Sharma',
    role: 'Mother of Aarav (4 yrs)',
    initials: 'PS',
    text: '"The holistic approach to learning here is remarkable. Aarav looks forward to school every single day. The teachers are so caring and the activities are perfectly designed for his age. We\'ve seen tremendous growth in his social skills."',
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span className="section-tag">Parent Voices</span>
          <h2 className="section-title section-title-deco">
            What <span className="hl">Parents Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from our happy parent community.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map(r => (
            <div className="testimonial" key={r.name}>
              <div className="testimonial-head">
                <div className="google-badge">
                  <span className="g">G</span>
                  <span className="o1">o</span>
                  <span className="o2">o</span>
                  <span className="o3">g</span>
                  <span className="g2">l</span>
                  <span className="l">e</span>
                </div>
                <div className="stars">★★★★★</div>
              </div>
              <p className="testimonial-text">{r.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{r.initials}</div>
                <div>
                  <div className="author-name">{r.name}</div>
                  <div className="author-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
