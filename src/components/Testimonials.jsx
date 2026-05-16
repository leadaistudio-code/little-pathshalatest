const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Mother of Aarav (4 yrs)',
    initials: 'PS',
    text: '"Little Pathshala has been a blessing for our family! Aarav looks forward to school every single day. The teachers are so caring and the activities are perfectly designed for his age. We\'ve seen tremendous growth in his confidence and social skills."',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Father of Ananya (3 yrs)',
    initials: 'RK',
    text: '"As working parents, we were worried about finding the right preschool. Little Pathshala exceeded all our expectations! The daily updates, safe environment, and nurturing teachers give us complete peace of mind. Ananya is thriving here!"',
  },
  {
    name: 'Meera Patel',
    role: 'Mother of Riya (5 yrs)',
    initials: 'MP',
    text: '"The holistic approach to learning at Little Pathshala is remarkable. Riya has developed not just academically but also emotionally and socially. The school readiness program prepared her beautifully for primary school. Highly recommended!"',
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
