import { useState } from 'react'
import Seo from '../seo/Seo'
import { breadcrumbSchema } from '../seo/schema'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import emailjs from '@emailjs/browser'

const benefits = [
  { icon: '🏆', title: 'Proven Brand', desc: 'Join an award-winning preschool chain trusted by parents since 2013.' },
  { icon: '📚', title: 'EYFS Curriculum', desc: 'A ready-to-run, UK-inspired curriculum with complete teacher training and material.' },
  { icon: '🤝', title: 'End-to-End Support', desc: 'Site selection, setup, marketing, hiring, and operations — we guide every step.' },
  { icon: '📈', title: 'Strong ROI', desc: 'A low-investment, high-demand model with multiple revenue streams.' },
  { icon: '🎨', title: 'Brand & Marketing', desc: 'Brand presence, digital campaigns, and ready-made marketing kits.' },
  { icon: '🛡️', title: 'Trusted Systems', desc: 'Live CCTV, parent app, and child-safety protocols built in from day one.' },
]

const highlights = [
  { num: 'Since 2013', lbl: 'Trusted by Families' },
  { num: 'Multiple', lbl: 'Revenue Streams' },
  { num: 'Low', lbl: 'Investment Model' },
  { num: '360°', lbl: 'Operational Support' },
]

const offerings = [
  'Preschool — Play Group, Pre-Nursery, Nursery, LKG & UKG',
  'Full-Day Daycare & Crèche',
]

const steps = [
  { no: '1', title: 'Connect', desc: 'Share your interest and city. Our team walks you through the opportunity and answers every question.' },
  { no: '2', title: 'Plan & Sign', desc: 'We help you with site selection, the business plan and a transparent, one-time agreement.' },
  { no: '3', title: 'Set Up', desc: 'Branch design, branding, recruitment and teacher training — all guided by our experts.' },
  { no: '4', title: 'Launch & Grow', desc: 'Marketing, admissions support and ongoing operations to help your centre thrive.' },
]

const frFaqs = [
  { q: 'Do I need a background in education?', a: 'Not at all. Many of our partners come from other industries. We provide complete training, curriculum, systems and ongoing guidance so you can run a quality centre with confidence.' },
  { q: 'How much space do I need?', a: 'A typical centre works well in a clean, safe, well-ventilated space with room for classrooms, an activity hall, a play area and parking. Our team helps you assess and shortlist the right property.' },
  { q: 'Can the property be rented?', a: 'Yes. Both owned and rental properties are accepted, and we assist you with property search and evaluation.' },
  { q: 'What support do I get after launch?', a: 'You receive continuous support across marketing, admissions, curriculum, staff training, parent communication and day-to-day operations.' },
]

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // 1. Save to Supabase
      if (isSupabaseConfigured) {
        const { error: dbError } = await supabase.from('franchise_inquiries').insert([formData]);
        if (dbError) throw new Error('Database Error: ' + dbError.message);
      }

      // 2. Send via EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_FRANCHISE_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, formData, publicKey);
      } else {
        console.warn('EmailJS is not configured. Email was not sent.');
      }

      setStatus('success');
      setFormData({ name: '', phone: '', email: '', city: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Failed to submit inquiry. Please try again or email us directly.');
    }
  };

  return (
    <>
      <Seo
        path="/franchise"
        title="Preschool Franchise Opportunity in India"
        description="Own a Little Pathshala preschool & daycare franchise. Proven brand since 2013, EYFS curriculum, end-to-end support, and strong ROI. Request franchise information today."
        keywords="preschool franchise India, daycare franchise, play school franchise, preschool business opportunity, low investment franchise"
        schema={[breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Franchise', path: '/franchise' },
        ])]}
      />
    <section className="section" id="franchise">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span className="section-tag">Own a Franchise</span>
          <h2 className="section-title section-title-deco">
            Build a Business That <span className="hl">Builds Futures</span>
          </h2>
          <p className="section-subtitle">
            Partner with Little Pathshala and bring quality early education to your city —
            with our brand, curriculum, and full support behind you.
          </p>
        </div>

        <div className="fr-highlight-grid" style={{ marginBottom: 40 }}>
          {highlights.map(h => (
            <div className="fr-highlight" key={h.lbl}>
              <div className="num">{h.num}</div>
              <div className="lbl">{h.lbl}</div>
            </div>
          ))}
        </div>

        <div className="promises-grid">
          {benefits.map(b => (
            <div className="promise" key={b.title}>
              <div className="promise-icon">{b.icon}</div>
              <div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Programs you can offer */}
        <div className="text-center" style={{ margin: '64px 0 28px' }}>
          <span className="section-tag">A Complete Model</span>
          <h2 className="section-title section-title-deco">Programs You'll <span className="hl">Offer</span></h2>
        </div>
        <div className="chip-row" style={{ justifyContent: 'center', maxWidth: 820, margin: '0 auto' }}>
          {offerings.map(o => <span className="chip" key={o}>{o}</span>)}
        </div>

        {/* Process */}
        <div className="text-center" style={{ margin: '64px 0 28px' }}>
          <span className="section-tag">How It Works</span>
          <h2 className="section-title section-title-deco">Your Path to <span className="hl">Partnership</span></h2>
        </div>
        <div className="steps-grid">
          {steps.map(s => (
            <div className="step-card" key={s.no}>
              <div className="step-no">{s.no}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="text-center" style={{ margin: '64px 0 28px' }}>
          <span className="section-tag">Questions</span>
          <h2 className="section-title section-title-deco">Franchise <span className="hl">FAQs</span></h2>
        </div>
        <div className="faqs">
          {frFaqs.map(f => (
            <details className="faq" key={f.q}>
              <summary className="faq-q" style={{ cursor: 'pointer', listStyle: 'none' }}>{f.q}</summary>
              <div className="faq-a" style={{ maxHeight: 'none' }}>
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center" style={{ margin: '56px 0 32px' }}>
          <span className="section-tag">Get Started</span>
          <h2 className="section-title section-title-deco">Request Franchise <span className="hl">Information</span></h2>
        </div>

        <div className="lp-form-card">
          {/* info panel */}
          <aside className="lp-form-aside" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="lp-aside-emoji">🚀</div>
            <h3>Build a Business That Builds Futures</h3>
            <p>Partner with a trusted brand and bring quality early education to your city — with our full support behind you.</p>
            <ul className="lp-aside-list">
              <li><span className="tick">✓</span> Proven brand &amp; ready EYFS curriculum</li>
              <li><span className="tick">✓</span> End-to-end setup &amp; training support</li>
              <li><span className="tick">✓</span> Marketing, hiring &amp; operations help</li>
              <li><span className="tick">✓</span> A callback within 24 hours</li>
            </ul>
            <div className="lp-aside-contact">
              <span>📞 <a href="tel:+919718463321">+91 9718463321</a></span>
              <span>✉️ <a href="mailto:hello@littlepathshala.com">hello@littlepathshala.com</a></span>
            </div>
          </aside>

          {/* form */}
          <div className="lp-form-body">
            <div className="lp-head">
              <h3>Franchise Enquiry</h3>
              <p>Tell us a little about you and we'll share the full opportunity.</p>
            </div>

            <form className="lp-grid" onSubmit={handleSubmit} noValidate>
              {status === 'success' && (
                <div className="lp-alert ok"><strong>🎉 Application received!</strong> Our franchise team will contact you within 24 hours.</div>
              )}
              {status === 'error' && (
                <div className="lp-alert err">⚠️ {errorMessage}</div>
              )}

              <div className="lp-field">
                <span className="fi">👤</span>
                <input className="lp-input" id="fr_name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder=" " required disabled={status === 'submitting'} />
                <label className="lp-label" htmlFor="fr_name">Your Name *</label>
              </div>

              <div className="lp-field">
                <span className="fi">📞</span>
                <input className="lp-input" id="fr_phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder=" " required disabled={status === 'submitting'} />
                <label className="lp-label" htmlFor="fr_phone">Phone Number *</label>
              </div>

              <div className="lp-field">
                <span className="fi">✉️</span>
                <input className="lp-input" id="fr_email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " required disabled={status === 'submitting'} />
                <label className="lp-label" htmlFor="fr_email">Email Address *</label>
              </div>

              <div className="lp-field">
                <span className="fi">📍</span>
                <input className="lp-input" id="fr_city" type="text" name="city" value={formData.city} onChange={handleChange} placeholder=" " required disabled={status === 'submitting'} />
                <label className="lp-label" htmlFor="fr_city">Preferred City / Location *</label>
              </div>

              <div className="lp-field full">
                <span className="fi">💬</span>
                <textarea className="lp-textarea" id="fr_message" name="message" value={formData.message} onChange={handleChange} placeholder=" " disabled={status === 'submitting'} />
                <label className="lp-label" htmlFor="fr_message">Tell us about your interest (optional)</label>
              </div>

              <button type="submit" className="btn lp-submit" disabled={status === 'submitting'}>
                {status === 'submitting'
                  ? <><span className="lp-spinner" /> Submitting…</>
                  : <>Request Franchise Info →</>}
              </button>
              <p className="lp-note">🔒 Your details are safe with us and never shared.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
