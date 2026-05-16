export default function SuccessStory() {
  return (
    <section className="section" id="success">
      <div className="success">
        <div>
          <h2 style={{ fontSize: 36 }}>Success Story</h2>
          <p className="success-sub">Your child's development matters, and at Little Pathshala, we take it seriously.</p>

          <div className="success-quotes">
            <div className="success-quote">
              <span className="bull" />
              <p style={{ margin: 0 }}>
                An incredible <strong>93%</strong> of our parents love to recommend Little Pathshala to their friends and family.
              </p>
            </div>
            <div className="success-quote">
              <span className="bull" />
              <p style={{ margin: 0 }}>
                <strong>78%</strong> of parents witness a remarkable boost in their child's language development and confidence within two months.
              </p>
            </div>
            <div className="success-quote">
              <span className="bull" />
              <p style={{ margin: 0 }}>
                <strong>4.9 / 5</strong> average parent satisfaction rating across Google reviews.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="success-bars">
            <div className="bar b1" data-pct="93%" />
            <div className="bar b2" data-pct="78%" />
          </div>
          <div style={{ textAlign: 'center', marginTop: 14, color: 'var(--gray-600)', fontWeight: 600 }}>
            Year — 2025
          </div>
        </div>
      </div>
    </section>
  )
}
