import Seo from '../seo/Seo'
import { breadcrumbSchema, faqSchema } from '../seo/schema'
import FAQs, { faqs } from '../components/FAQs'

export default function FAQsPage() {
  return (
    <>
      <Seo
        path="/faqs"
        title="Frequently Asked Questions"
        description="Answers to common questions about admissions, fees, safety, meals, teachers, and timings at Little Pathshala preschool & daycare in Faridabad."
        keywords="preschool FAQ Faridabad, daycare admission questions, preschool fees Faridabad, preschool timings"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQs', path: '/faqs' },
          ]),
          faqSchema(faqs),
        ]}
      />
      <FAQs />
    </>
  )
}
