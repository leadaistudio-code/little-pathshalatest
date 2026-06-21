import './styles/components.css'

import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import ProgramDetailPage from './pages/ProgramDetailPage'
import EyfsPage from './pages/EyfsPage'
import PromisesPage from './pages/PromisesPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import FAQsPage from './pages/FAQsPage'
import AdmissionPage from './pages/AdmissionPage'
import NurseryFaridabadPage from './pages/NurseryFaridabadPage'
import CentresPage from './pages/CentresPage'
import BranchLocatorPage from './pages/BranchLocatorPage'
import UpcomingBranchesPage from './pages/UpcomingBranchesPage'
import FranchisePage from './pages/FranchisePage'
import GalleryPage from './pages/GalleryPage'
import AdminPage from './pages/AdminPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:slug" element={<ProgramDetailPage />} />
        <Route path="/eyfs-curriculum" element={<EyfsPage />} />
        <Route path="/promises" element={<PromisesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/admission/nursery-faridabad" element={<NurseryFaridabadPage />} />
        <Route path="/centres" element={<CentresPage />} />
        <Route path="/centres/branch-locator" element={<BranchLocatorPage />} />
        <Route path="/centres/upcoming" element={<UpcomingBranchesPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
