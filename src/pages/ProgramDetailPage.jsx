import { useParams } from 'react-router-dom'
import Seo from '../seo/Seo'
import { breadcrumbSchema } from '../seo/schema'
import { programBySlug } from '../data/programs'
import ProgramDetail from '../components/ProgramDetail'
import NotFoundPage from './NotFoundPage'

export default function ProgramDetailPage() {
  const { slug } = useParams()
  const program = programBySlug[slug]

  if (!program) return <NotFoundPage />

  return (
    <>
      <Seo
        path={`/programs/${program.slug}`}
        title={`${program.title} in Faridabad (${program.age})`}
        description={`${program.title} at Little Pathshala, Sector 91 Faridabad — ${program.tagline} Age ${program.age}, teacher ratio ${program.ratio}. Play-based EYFS & Montessori learning.`}
        keywords={`${program.title} Faridabad, ${program.title} admission Sector 91, preschool Faridabad, ${program.title} program`}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Our Programs', path: '/programs' },
            { name: program.title, path: `/programs/${program.slug}` },
          ]),
        ]}
      />
      <ProgramDetail program={program} />
    </>
  )
}
