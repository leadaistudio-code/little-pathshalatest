import { Link } from 'react-router-dom'
import { blogPosts, formatPostDate } from '../data/blogPosts'

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span className="section-tag">From the Blog</span>
          <h2 className="section-title section-title-deco">
            Parenting &amp; <span className="hl">Early Learning</span>
          </h2>
          <p className="section-subtitle">
            Tips, guides and child-development insights for Faridabad parents — from our educators.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((p) => {
            const [day, mon] = formatPostDate(p.date).split(' ')
            return (
              <article className="blog-card" key={p.slug}>
                <Link to={`/blog/${p.slug}`} className={`blog-image ${p.color}`} aria-label={p.title}>
                  <span aria-hidden="true">{p.emoji}</span>
                  <div className="blog-date">
                    <div>{day}</div>
                    <div>{mon}</div>
                  </div>
                </Link>
                <div className="blog-content">
                  <span className="blog-tag">{p.tag}</span>
                  <h3 className="blog-title">
                    <Link to={`/blog/${p.slug}`} style={{ color: 'inherit' }}>{p.title}</Link>
                  </h3>
                  <p>{p.excerpt}</p>
                  <Link to={`/blog/${p.slug}`} style={{ color: 'var(--purple-600)', fontWeight: 600, fontSize: 14 }}>
                    Read more →
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
