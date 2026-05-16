import { useState, useEffect } from 'react'

export default function FloatingActions() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a className="wa-fab" href="https://wa.me/919718463321" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        💬
      </a>
      <button
        className={`scroll-top ${show ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  )
}
