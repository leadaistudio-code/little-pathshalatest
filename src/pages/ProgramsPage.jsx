import Seo from '../seo/Seo'
import { breadcrumbSchema } from '../seo/schema'
import Programs from '../components/Programs'

export default function ProgramsPage() {
  return (
    <>
      <Seo
        path="/programs"
        title="Our Programs — Play Group, Nursery, LKG/UKG & Daycare"
        description="Explore Little Pathshala's programs in Faridabad: Play Group, Pre-Nursery, Nursery, LKG, UKG & Daycare. Age-appropriate, EYFS play-based learning."
        keywords="play group Faridabad, nursery admission Faridabad, LKG UKG Faridabad, daycare Sector 91, after school care Faridabad, summer camp 2026 Faridabad"
        schema={[breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Programs', path: '/programs' },
        ])]}
      />
      <Programs />
    </>
  )
}
