import Seo from '../seo/Seo'
import { breadcrumbSchema } from '../seo/schema'
import Promises from '../components/Promises'

export default function PromisesPage() {
  return (
    <>
      <Seo
        path="/promises"
        title="Our Promises — Live CCTV, Safety & EYFS Curriculum"
        description="Ten promises we keep to every parent at Little Pathshala, Faridabad: live CCTV feed, child safety & hygiene, EYFS curriculum, nutritionist meal plans, and a no-satisfaction-no-fee guarantee."
        keywords="preschool with CCTV Faridabad, safe daycare Faridabad, EYFS curriculum, child safety preschool"
        schema={[breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Promises', path: '/promises' },
        ])]}
      />
      <Promises />
    </>
  )
}
