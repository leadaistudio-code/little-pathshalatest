import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Chatbot from './Chatbot'
import FloatingActions from './FloatingActions'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Chatbot />
      <Footer />
      <FloatingActions />
    </>
  )
}
