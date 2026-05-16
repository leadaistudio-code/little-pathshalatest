import { useState, useEffect } from 'react'

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
          <a href="#home" className="brand" aria-label="Little Pathshala">
            <div className="brand-logo">LP</div>
            <div className="brand-text">
              <span className="brand-name">Little Pathshala</span>
              <span className="brand-tag">PRESCHOOL & DAYCARE</span>
            </div>
          </a>

          <nav className="nav" aria-label="Primary">
            <a className="nav-item" href="#about">About</a>
            <div className="nav-item">
              Our Programs <span className="nav-caret" />
              <div className="dropdown">
                <a href="#programs">Play Group (1.5-2.5 yrs)</a>
                <a href="#programs">Nursery (2.5-3.5 yrs)</a>
                <a href="#programs">LKG / UKG (3.5-5.5 yrs)</a>
                <a href="#programs">Daycare</a>
                <a href="#programs">After-School Care</a>
              </div>
            </div>
            <div className="nav-item">
              Our Centres <span className="nav-caret" />
              <div className="dropdown">
                <a href="#centres">Faridabad — Sec 91</a>
                <a href="#centres">Delhi NCR</a>
                <a href="#centres">Gurugram</a>
                <a href="#centres">Noida</a>
              </div>
            </div>
            <a className="nav-item" href="#franchise">Franchise</a>
            <a className="nav-item" href="#admission">Admission</a>
            <a className="nav-item" href="#blog">Blog</a>
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
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#programs" onClick={() => setOpen(false)}>Our Programs</a>
          <a href="#centres" onClick={() => setOpen(false)}>Our Centres</a>
          <a href="#franchise" onClick={() => setOpen(false)}>Franchise</a>
          <a href="#admission" onClick={() => setOpen(false)}>Admission</a>
          <a href="#blog" onClick={() => setOpen(false)}>Blog</a>
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
