export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="brand-logo">LP</div>
              <div className="brand-text">
                <span className="brand-name">Little Pathshala</span>
                <span className="brand-tag" style={{ color: 'rgba(255,255,255,.6)' }}>PRESCHOOL & DAYCARE</span>
              </div>
            </div>
            <p className="footer-about">
              Nurturing little leaders with love, care, and quality education since 2013.
              A magical place where every child falls in love with learning.
            </p>
            <div className="footer-socials">
              <a className="social" href="#" aria-label="Facebook">f</a>
              <a className="social" href="#" aria-label="Instagram">📷</a>
              <a className="social" href="#" aria-label="YouTube">▶</a>
              <a className="social" href="#" aria-label="LinkedIn">in</a>
              <a className="social" href="#" aria-label="X">𝕏</a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Our Programs</a></li>
              <li><a href="#promises">Our Promises</a></li>
              <li><a href="#blog">Latest Blog</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#admission">Admission</a></li>
            </ul>
          </div>

          <div>
            <h4>Programs</h4>
            <ul>
              <li><a href="#programs">Play Group</a></li>
              <li><a href="#programs">Nursery</a></li>
              <li><a href="#programs">LKG / UKG</a></li>
              <li><a href="#programs">Daycare</a></li>
              <li><a href="#programs">After-School Care</a></li>
              <li><a href="#programs">Summer Camp 2026</a></li>
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
