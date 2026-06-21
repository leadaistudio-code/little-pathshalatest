import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="animated-logo" style={{ width: 64, height: 64, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.2)', flexShrink: 0 }}>
                <img src="/assets/minion_cropped.png" alt="Little Pathshala Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="brand-text">
                <span className="brand-name">Little Pathshala</span>
                <span className="brand-tag" style={{ color: 'rgba(255,255,255,.6)' }}>INTERNATIONAL PRE SCHOOL AND DAYCARE</span>
              </div>
            </div>
            <p className="footer-about">
              Nurturing little leaders with love, care, and quality education since 2013.
              A magical place where every child falls in love with learning.
            </p>
            <div className="footer-socials">
              <a className="social" href="https://www.facebook.com/profile.php?id=61585748780576" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
              <a className="social" href="https://www.instagram.com/little.pathshala?igsh=MXZqMmN3dmN6YWNjcA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
              <a className="social" href="https://youtube.com/@littlepathshala37" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
              <a className="social" href="#" aria-label="LinkedIn">in</a>
              <a className="social" href="#" aria-label="X">𝕏</a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Our Programs</Link></li>
              <li><Link to="/eyfs-curriculum">EYFS Curriculum</Link></li>
              <li><Link to="/centres">Our Centres</Link></li>
              <li><Link to="/franchise">Franchise</Link></li>
              <li><Link to="/promises">Our Promises</Link></li>
              <li><Link to="/blog">Latest Blog</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/admission">Admission</Link></li>
            </ul>
          </div>

          <div>
            <h4>Programs</h4>
            <ul>
              <li><Link to="/programs/play-group">Play Group</Link></li>
              <li><Link to="/programs/nursery">Nursery</Link></li>
              <li><Link to="/programs/lkg">LKG</Link></li>
              <li><Link to="/programs/ukg">UKG</Link></li>
              <li><Link to="/programs/daycare">Daycare & Crèche</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get In Touch</h4>
            <div className="contact-row">
              <div className="contact-icon">📍</div>
              <div>H.No 32, Surya Vihar, Sector 91,<br/>Faridabad, Haryana 121003</div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">📞</div>
              <div>
                <a href="tel:+919718463321">+91 9718463321</a>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">✉️</div>
              <div>
                <a href="mailto:hello@littlepathshala.com">hello@littlepathshala.com</a>
              </div>
            </div>

            <form className="subscribe" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!') }}>
              <input type="email" placeholder="Your email for parenting tips" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Little Pathshala. All rights reserved.</div>
          <div>
            Made with <span style={{ color: 'var(--yellow-500)' }}>♥</span> for our little learners
          </div>
        </div>
      </div>
    </footer>
  )
}
