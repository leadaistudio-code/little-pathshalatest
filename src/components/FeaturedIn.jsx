const press = [
  'The Hindustan Times',
  'The Indian Express',
  'Forbes India',
  'The Pioneer',
  'Education World',
]

export default function FeaturedIn() {
  return (
    <section className="section featured" id="featured">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 36 }}>
          <span className="section-tag">As Seen In</span>
          <h2 className="section-title section-title-deco">
            We've Been <span className="hl">Featured In</span>
          </h2>
        </div>

        <div className="featured-grid">
          {press.map(name => (
            <div className="featured-card" key={name}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
