const posts = [
  {
    color: 'c1',
    emoji: '📸',
    date: '03 Nov 2025',
    tag: 'Parenting',
    title: 'The First 1000 Days: Why Early Brain Development Matters',
    excerpt: 'If you\'ve ever cradled a newborn and wondered about the mysteries of that tiny head, you\'re not alone. The early years are a period when every encounter shapes…',
  },
  {
    color: 'c2',
    emoji: '🎒',
    date: '06 Sep 2025',
    tag: 'Preschool',
    title: 'Is Preschool Necessary for a 2-Year-Old?',
    excerpt: 'By now, your toddler has likely enjoyed their second birthday. They\'re running around, picking up new words every day, and suddenly someone asks, "Are you sending them yet?"',
  },
  {
    color: 'c3',
    emoji: '🚀',
    date: '25 Jun 2025',
    tag: 'Franchise',
    title: 'Opportunities vs. Challenges in the Preschool Industry',
    excerpt: 'In this fast-changing world, the preschool industry is at a very interesting crossroads. With a greater focus on early childhood development and changing parents…',
  },
]

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span className="section-tag">From the Blog</span>
          <h2 className="section-title section-title-deco">
            Latest <span className="hl">Stories</span>
          </h2>
          <p className="section-subtitle">
            Parenting tips, child development insights, and stories from our classrooms.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((p, i) => (
            <article className="blog-card" key={i}>
              <div className={`blog-image ${p.color}`}>
                <span aria-hidden="true">{p.emoji}</span>
                <div className="blog-date">
                  {p.date.split(' ').map((w, idx) => (
                    <div key={idx}>{w}</div>
                  ))}
                </div>
              </div>
              <div className="blog-content">
                <span className="blog-tag">{p.tag}</span>
                <h3 className="blog-title">{p.title}</h3>
                <p>{p.excerpt}</p>
                <a href="#blog" style={{ color: 'var(--purple-600)', fontWeight: 600, fontSize: 14 }}>
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 40 }}>
          <a href="#blog" className="btn btn-secondary">View All Blogs</a>
        </div>
      </div>
    </section>
  )
}
