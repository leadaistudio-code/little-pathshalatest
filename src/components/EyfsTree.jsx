// A learning "tree" whose branches reach out to the 6 EYFS areas of learning.
// Pure SVG trunk/canopy/branches + absolutely-positioned HTML nodes on top.

const COLORS = {
  purple: 'var(--purple-700)',
  blue: 'var(--blue-500)',
  green: 'var(--green-500)',
  pink: 'var(--pink-500)',
  yellow: 'var(--yellow-600)',
}

// x / y are the node centre as a % of the square canvas.
const NODES = [
  { icon: '📖', label: 'Literacy', color: 'purple', x: 14, y: 17 },
  { icon: '💬', label: 'Communication', color: 'yellow', x: 9, y: 45 },
  { icon: '😊', label: 'Personal & Social', color: 'pink', x: 15, y: 72 },
  { icon: '🔢', label: 'Mathematics', color: 'blue', x: 86, y: 17 },
  { icon: '🌍', label: 'The World', color: 'green', x: 91, y: 45 },
  { icon: '🎨', label: 'Arts', color: 'pink', x: 85, y: 72 },
]

// Branch start (inside the canopy) in viewBox units (0–500).
const BX = 250
const BY = 300

export default function EyfsTree() {
  return (
    <div className="eyfs-tree" aria-hidden="true">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
        {/* branches first (behind canopy & trunk) */}
        {NODES.map((n) => {
          const ex = n.x * 5
          const ey = n.y * 5
          const cx = (BX + ex) / 2
          const cy = Math.min(ey, 210) - 10
          return (
            <path
              key={n.label}
              className="eyfs-branch"
              d={`M ${BX} ${BY} Q ${cx} ${cy} ${ex} ${ey}`}
              fill="none"
            />
          )
        })}

        {/* trunk */}
        <path
          className="eyfs-trunk"
          d="M236 300 C232 360 226 420 214 472 L286 472 C274 420 268 360 264 300 Z"
        />

        {/* canopy — layered leafy blobs */}
        <g className="eyfs-canopy">
          <circle cx="250" cy="210" r="118" className="leaf-dark" />
          <circle cx="168" cy="200" r="74" className="leaf-mid" />
          <circle cx="332" cy="200" r="74" className="leaf-mid" />
          <circle cx="250" cy="140" r="78" className="leaf-mid" />
          <circle cx="210" cy="170" r="50" className="leaf-light" />
          <circle cx="300" cy="175" r="46" className="leaf-light" />
        </g>
      </svg>

      {/* EYFS core badge sits on the canopy */}
      <div className="eyfs-tree-core">EYFS</div>

      {/* the 6 area nodes */}
      {NODES.map((n) => (
        <div
          key={n.label}
          className="eyfs-node"
          style={{ left: `${n.x}%`, top: `${n.y}%`, color: COLORS[n.color] }}
        >
          <span className="icon">{n.icon}</span>
          {n.label}
        </div>
      ))}
    </div>
  )
}
