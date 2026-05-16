import './styles/components.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Programs from './components/Programs'
import SuccessStory from './components/SuccessStory'
import Promises from './components/Promises'
import EYFS from './components/EYFS'
import Testimonials from './components/Testimonials'
import FAQs from './components/FAQs'
import Blog from './components/Blog'
import FeaturedIn from './components/FeaturedIn'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <SuccessStory />
        <Promises />
        <EYFS />
        <Testimonials />
        <FAQs />
        <Blog />
        <FeaturedIn />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
