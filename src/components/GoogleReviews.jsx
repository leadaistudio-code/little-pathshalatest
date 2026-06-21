import { SITE } from '../seo/site'

// ⚠️ These mirror real Google reviews. Update with your latest verbatim reviews.
const reviews = [
  { name: 'Gaurav Gaba', role: 'Parent', initials: 'GG', stars: 5, text: 'I enrolled my 6-month-old after researching several daycares in the area. Little Pathshala was by far the best for cleanliness and staff professionalism. Incredible quality and care at a reasonable price!' },
  { name: 'Surbhi Takkar', role: 'Parent', initials: 'ST', stars: 5, text: 'My daughter has been here for three months and the teachers are wonderfully enthusiastic. I\'ve noticed a real improvement in her confidence. So glad I chose them!' },
  { name: 'Priya Sharma', role: 'Mother of Aarav (4 yrs)', initials: 'PS', stars: 5, text: 'The holistic approach is remarkable. Aarav looks forward to school every single day. Caring teachers, age-perfect activities, and great growth in his social skills.' },
  { name: 'Rahul Mehta', role: 'Parent', initials: 'RM', stars: 5, text: 'Safe campus, live CCTV and daily updates give me complete peace of mind as a working dad. Highly recommend their daycare in Sector 91.' },
  { name: 'Neha Verma', role: 'Mother of Kiara', initials: 'NV', stars: 5, text: 'The EYFS curriculum really shows. My daughter is reading and counting confidently, and she\'s genuinely happy. Best preschool decision we made in Faridabad.' },
  { name: 'Amit Khanna', role: 'Parent', initials: 'AK', stars: 5, text: 'Clean, warm and professional. The teachers treat every child like their own. Worth every rupee — we feel lucky to have them nearby.' },
]

function GoogleLogo() {
  return (
    <span className="google-badge" aria-label="Google">
      <span className="g">G</span><span className="o1">o</span><span className="o2">o</span>
      <span className="o3">g</span><span className="g2">l</span><span className="l">e</span>
    </span>
  )
}

export default function GoogleReviews() {
  const { rating, googleReviewsUrl } = SITE
  return (
    <section className="section" id="reviews" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 40 }}>
          <span className="section-tag">Parent Voices</span>
          <h2 className="section-title section-title-deco">
            Loved by <span className="hl">Faridabad Families</span>
          </h2>
        </div>

        {/* summary bar */}
        <div className="greviews-summary">
          <div className="grs-left">
            <GoogleLogo />
            <span className="grs-reviews-word">Reviews</span>
          </div>
          <div className="grs-rating">
            <span className="grs-num">{rating.value}</span>
            <div>
              <div className="stars" aria-hidden="true">★★★★★</div>
              <div className="grs-count">Based on {rating.count}+ reviews</div>
            </div>
          </div>
          <div className="grs-actions">
            <a className="btn btn-primary" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">★ Write a Review</a>
            <a className="btn btn-ghost" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">See all on Google</a>
          </div>
        </div>

        {/* review cards */}
        <div className="testimonials-grid" style={{ marginTop: 32 }}>
          {reviews.map((r) => (
            <div className="testimonial" key={r.name}>
              <div className="testimonial-head">
                <GoogleLogo />
                <div className="stars">{'★'.repeat(r.stars)}</div>
              </div>
              <p className="testimonial-text">“{r.text}”</p>
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
