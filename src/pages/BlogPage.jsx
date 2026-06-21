import Seo from '../seo/Seo'
import { breadcrumbSchema } from '../seo/schema'
import Blog from '../components/Blog'

export default function BlogPage() {
  return (
    <>
      <Seo
        path="/blog"
        title="Parenting & Early Learning Blog"
        description="Tips and insights on early childhood development, parenting, and preschool readiness from the educators at Little Pathshala, Faridabad."
        keywords="parenting blog, early childhood development, preschool tips, child development Faridabad"
        schema={[breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])]}
      />
      <Blog />
    </>
  )
}
