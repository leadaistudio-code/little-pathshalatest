import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'

export default function NotFoundPage() {
  return (
    <>
      <Seo
        path="/404"
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Explore Little Pathshala preschool & daycare in Faridabad."
        noindex
      />
      <section className="section" style={{ textAlign: 'center', minHeight: '50vh' }}>
        <div className="container">
          <span className="section-tag">404</span>
          <h1 className="section-title section-title-deco">
            Oops! Page <span className="hl">Not Found</span>
          </h1>
          <p style={{ maxWidth: 520, margin: '16px auto 32px', color: 'var(--gray-600)' }}>
            The page you were looking for has wandered off to play. Let's get you back home.
          </p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
