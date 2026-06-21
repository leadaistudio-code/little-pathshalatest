import Seo from '../seo/Seo'
import Gallery from '../components/Gallery'

export default function GalleryPage() {
  return (
    <>
      <Seo
        path="/gallery"
        title="Photo Gallery — Life at Little Pathshala"
        description="Take a visual tour of Little Pathshala preschool and daycare in Faridabad. View our safe campus, playful classrooms, and happy children."
      />
      <div style={{ paddingTop: '80px' }}>
        <Gallery />
      </div>
    </>
  )
}
