import Seo from '../seo/Seo'
import PromoBanner from '../components/PromoBanner'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Programs from '../components/Programs'
import SuccessStory from '../components/SuccessStory'
import Promises from '../components/Promises'
import EYFS from '../components/EYFS'
import GoogleReviews from '../components/GoogleReviews'
import FAQs from '../components/FAQs'

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        title="Best Preschool & Daycare in Faridabad"
        description="Little Pathshala — award-winning preschool & daycare in Sector 91, Faridabad. Play-based & EYFS learning, live CCTV, safe campus, trusted by 500+ families since 2013. Book a free trial class."
        keywords="preschool in Faridabad, daycare in Faridabad, playschool Sector 91, best preschool Faridabad, Montessori Faridabad, kindergarten Faridabad, EYFS preschool"
      />
      <PromoBanner />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <SuccessStory />
      <Promises />
      <EYFS />
      <GoogleReviews />
      <FAQs />
    </>
  )
}
