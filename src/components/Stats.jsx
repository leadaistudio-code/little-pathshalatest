const stats = [
  { icon: '👨‍👩‍👧', num: '500+', label: 'Happy Families' },
  { icon: '🏫', num: '5+',  label: 'Centres' },
  { icon: '🏆', num: '25+', label: 'Awards Won' },
  { icon: '⏳', num: '12+', label: 'Years of Trust' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-icon">{s.icon}</div>
              <div>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
