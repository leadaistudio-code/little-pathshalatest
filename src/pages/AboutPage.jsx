import Seo from '../seo/Seo'
import { breadcrumbSchema } from '../seo/schema'
import About from '../components/About'

export default function AboutPage() {
  return (
    <>
      <Seo
        path="/about"
        title="About Us — Nurturing Little Minds in Faridabad"
        description="Learn about Little Pathshala, a trusted preschool & daycare in Sector 91, Faridabad since 2013. Our play-based philosophy, caring educators, and safe, joyful campus."
        keywords="about Little Pathshala, preschool philosophy Faridabad, best daycare Faridabad, early childhood education Faridabad"
        schema={[breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ])]}
      />
      <About />
    </>
  )
}
