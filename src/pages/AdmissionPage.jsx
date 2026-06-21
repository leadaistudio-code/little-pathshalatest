import { useState } from 'react'
import Seo from '../seo/Seo'
import { breadcrumbSchema } from '../seo/schema'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import emailjs from '@emailjs/browser'

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    parent_name: '',
    child_name: '',
    phone: '',
    email: '',
    program: '',
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
      // 1. Save to Supabase (if configured)
      if (isSupabaseConfigured) {
        const { error: dbError } = await supabase.from('admission_inquiries').insert([formData]);
        if (dbError) throw new Error('Database Error: ' + dbError.message);
      }

      // 2. Send via EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_ADMISSION_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, formData, publicKey);
      } else {
        console.warn('EmailJS is not configured. Email was not sent.');
      }

      setStatus('success');
      setFormData({ parent_name: '', child_name: '', phone: '', email: '', program: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Failed to submit inquiry. Please try again or call us directly.');
    }
  };

  return (
    <>
      <Seo
        path="/admission"
        title="Admissions Open 2026-27 — Enroll in Faridabad"
        description="Admissions are open for 2026-27 at Little Pathshala, Sector 91, Faridabad. Book a free trial class and campus visit. Our team responds within 24 hours."
        keywords="preschool admission Faridabad, nursery admission 2026, daycare enrollment Faridabad, free trial class preschool"
        schema={[breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Admission', path: '/admission' },
        ])]}
      />
      <section className="section" id="admission">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-tag">Admissions Open 2026-27</span>
            <h2 className="section-title section-title-deco">
              Enroll Your <span className="hl">Little One</span>
            </h2>
            <p style={{ maxWidth: 640, margin: '16px auto 0', color: 'var(--gray-600)' }}>
              Fill out the form and our admissions team will reach out within 24 hours
              to schedule a campus visit and a free trial class.
            </p>
          </div>

          <div className="lp-form-card">
            {/* info panel */}
            <aside className="lp-form-aside" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="lp-aside-emoji">🎒</div>
              <h3>A Joyful Start Awaits</h3>
              <p>Join 500+ happy families at Sector 91, Faridabad. Here's what you get when you enquire:</p>
              <ul className="lp-aside-list">
                <li><span className="tick">✓</span> A <strong>free trial class</strong> for your child</li>
                <li><span className="tick">✓</span> A guided <strong>campus visit</strong></li>
                <li><span className="tick">✓</span> A personal <strong>callback within 24 hours</strong></li>
                <li><span className="tick">✓</span> Fee structure &amp; program guidance</li>
              </ul>
              <div className="lp-aside-contact">
                <span>📞 <a href="tel:+919718463321">+91 9718463321</a></span>
                <span>✉️ <a href="mailto:hello@littlepathshala.com">hello@littlepathshala.com</a></span>
              </div>
            </aside>

            {/* form */}
            <div className="lp-form-body">
              <div className="lp-head">
                <h3>Admission Enquiry</h3>
                <p>Takes less than a minute — all fields with * are required.</p>
              </div>

              <form className="lp-grid" onSubmit={handleSubmit} noValidate>
                {status === 'success' && (
                  <div className="lp-alert ok"><strong>🎉 Success!</strong> Your enquiry is in. Our team will contact you within 24 hours.</div>
                )}
                {status === 'error' && (
                  <div className="lp-alert err">⚠️ {errorMessage}</div>
                )}

                <div className="lp-field">
                  <span className="fi">👤</span>
                  <input className="lp-input" id="parent_name" type="text" name="parent_name" value={formData.parent_name} onChange={handleChange} placeholder=" " required disabled={status === 'submitting'} />
                  <label className="lp-label" htmlFor="parent_name">Parent's Name *</label>
                </div>

                <div className="lp-field">
                  <span className="fi">🧒</span>
                  <input className="lp-input" id="child_name" type="text" name="child_name" value={formData.child_name} onChange={handleChange} placeholder=" " required disabled={status === 'submitting'} />
                  <label className="lp-label" htmlFor="child_name">Child's Name *</label>
                </div>

                <div className="lp-field">
                  <span className="fi">📞</span>
                  <input className="lp-input" id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder=" " required disabled={status === 'submitting'} />
                  <label className="lp-label" htmlFor="phone">Phone Number *</label>
                </div>

                <div className="lp-field">
                  <span className="fi">✉️</span>
                  <input className="lp-input" id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " required disabled={status === 'submitting'} />
                  <label className="lp-label" htmlFor="email">Email Address *</label>
                </div>

                <div className="lp-field full">
                  <span className="fi">🎯</span>
                  <select className="lp-select" id="program" name="program" value={formData.program} onChange={handleChange} required disabled={status === 'submitting'}>
                    <option value="" hidden></option>
                    <option value="Play Group">Play Group (1.5 – 2.5 yrs)</option>
                    <option value="Pre-Nursery">Pre-Nursery (2 – 3 yrs)</option>
                    <option value="Nursery">Nursery (3 – 4 yrs)</option>
                    <option value="LKG">LKG (4 – 5 yrs)</option>
                    <option value="UKG">UKG (5 – 6 yrs)</option>
                    <option value="Daycare">Daycare &amp; Crèche</option>
                  </select>
                  <label className="lp-label" htmlFor="program">Choose a Program *</label>
                </div>

                <div className="lp-field full">
                  <span className="fi">💬</span>
                  <textarea className="lp-textarea" id="message" name="message" value={formData.message} onChange={handleChange} placeholder=" " disabled={status === 'submitting'} />
                  <label className="lp-label" htmlFor="message">Any message for us? (optional)</label>
                </div>

                <button type="submit" className="btn lp-submit" disabled={status === 'submitting'}>
                  {status === 'submitting'
                    ? <><span className="lp-spinner" /> Submitting…</>
                    : <>Submit Enquiry →</>}
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
