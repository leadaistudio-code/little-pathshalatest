import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className="header" style={scrolled ? { boxShadow: '0 6px 20px rgba(46,16,101,.1)' } : {}}>
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Little Pathshala">
            <div className="animated-logo" style={{ width: 64, height: 64, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '2px solid var(--purple-200)', flexShrink: 0 }}>
              <img src="/assets/minion_cropped.png" alt="Little Pathshala Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="brand-text">
              <span className="brand-name">Little Pathshala</span>
              <span className="brand-tag">INTERNATIONAL PRE SCHOOL AND DAYCARE</span>
            </div>
          </Link>

          <nav className="nav" aria-label="Primary">
            <Link className="nav-item" to="/about">About</Link>
            <div className="nav-item">
              <Link to="/programs">Our Programs</Link> <span className="nav-caret" />
              <div className="dropdown">
                <Link to="/programs/play-group">Play Group (1.5–2.5 yrs)</Link>
                <Link to="/programs/pre-nursery">Pre-Nursery (2–3 yrs)</Link>
                <Link to="/programs/nursery">Nursery (3–4 yrs)</Link>
                <Link to="/programs/lkg">LKG (4–5 yrs)</Link>
                <Link to="/programs/ukg">UKG (5–6 yrs)</Link>
                <Link to="/programs/daycare">Daycare & Crèche</Link>
              </div>
            </div>
            <div className="nav-item">
              <Link to="/centres">Our Centres</Link> <span className="nav-caret" />
              <div className="dropdown">
                <Link to="/centres">All Centres</Link>
                <Link to="/centres/branch-locator">Branch Locator</Link>
                <Link to="/centres/upcoming">Upcoming Branches</Link>
              </div>
            </div>
            <Link className="nav-item" to="/franchise">Franchise</Link>
            <Link className="nav-item" to="/gallery">Gallery</Link>
            <div className="nav-item">
              <Link to="/admission">Admission</Link> <span className="nav-caret" />
              <div className="dropdown">
                <Link to="/admission">Admission Form</Link>
                <Link to="/admission/nursery-faridabad">Nursery Admission — Faridabad</Link>
              </div>
            </div>
            <Link className="nav-item" to="/blog">Blog</Link>
          </nav>

          <a className="cta-phone" href="tel:+919718463321">
            <span className="icon">📞</span>
            <span>+91 9718463321</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
          </button>
        </div>

        <div className={`mobile-nav ${open ? 'open' : ''}`}>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/programs" onClick={() => setOpen(false)}>Our Programs</Link>
          <Link to="/centres" onClick={() => setOpen(false)}>Our Centres</Link>
          <Link to="/franchise" onClick={() => setOpen(false)}>Franchise</Link>
          <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/admission" onClick={() => setOpen(false)}>Admission</Link>
          <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <a href="tel:+919718463321" onClick={() => setOpen(false)}>📞 +91 9718463321</a>
        </div>
      </header>

      <div className="marquee">
        <div className="marquee-track">
          ✨ Admissions Open 2026-27 &nbsp;•&nbsp; 🎉 Summer Camp 2026 — Register Now &nbsp;•&nbsp; 🏆 Awarded "Best Preschool Chain" &nbsp;•&nbsp; 📺 Live CCTV Feed for Parents &nbsp;•&nbsp; 🎨 Free Trial Class Available &nbsp;•&nbsp;
        </div>
      </div>
    </>
  )
}
