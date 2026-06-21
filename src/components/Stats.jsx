const stats = [
  { icon: '👨‍👩‍👧', num: '22,000+', label: 'Proud Parents' },
  { icon: '🏫', num: '35+',  label: 'Active Centres' },
  { icon: '🏆', num: '72+', label: 'Prestigious Awards' },
  { icon: '⏳', num: '22+', label: 'Years of Excellence' },
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
