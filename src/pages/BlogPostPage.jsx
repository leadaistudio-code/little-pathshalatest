import { useParams, Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import { breadcrumbSchema, articleSchema } from '../seo/schema'
import { postBySlug, formatPostDate } from '../data/blogPosts'
import NotFoundPage from './NotFoundPage'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = postBySlug[slug]

  if (!post) return <NotFoundPage />

  return (
    <>
      <Seo
        path={`/blog/${post.slug}`}
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema(post),
        ]}
      />

      <section className={`program-hero ${post.color === 'c2' ? 'purple' : post.color === 'c3' ? 'pink' : 'yellow'}`}>
        <div className="container">
          <nav className="program-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <Link to="/blog">Blog</Link><span>›</span>
            <span className="current">{post.tag}</span>
          </nav>
          <div className="program-narrow">
            <span className="section-tag">{post.tag}</span>
            <h1 className="program-hero-title" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>{post.title}</h1>
            <p className="program-hero-tag" style={{ marginBottom: 0 }}>
              {formatPostDate(post.date)} · {post.readTime}
            </p>
          </div>
        </div>
      </section>

      <article className="section">
        <div className="container program-narrow">
          {post.content.map((block, i) => {
            if (block.h) return <h2 key={i} className="program-subhead">{block.h}</h2>
            if (block.list)
              return (
                <ul key={i} className="eyfs-list">
                  {block.list.map((item) => (
                    <li key={item}><span className="check">✓</span>{item}</li>
                  ))}
                </ul>
              )
            return <p key={i} className="program-lede">{block.p}</p>
          })}

          <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/admission" className="btn btn-primary">Book a Free Trial Class</Link>
            <Link to="/blog" className="btn btn-ghost">← All Articles</Link>
          </div>
        </div>
      </article>
    </>
  )
}
