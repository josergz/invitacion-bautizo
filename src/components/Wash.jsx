export function Wash({ x, y, s, p = 0.15 }) {
  return (
    <div
      className="wash"
      data-p={p}
      style={{ left: x, top: y, width: s, height: s }}
    ></div>
  )
}

export function Sparkles({ n = 16, seed = 1 }) {
  const items = []
  let r = seed * 9301
  const rnd = () => {
    r = (r * 9301 + 49297) % 233280
    return r / 233280
  }
  for (let i = 0; i < n; i++) {
    items.push({
      x: rnd() * 100,
      y: rnd() * 100,
      s: 6 + rnd() * 14,
      p: 0.05 + rnd() * 0.25,
      t: rnd() * 4,
    })
  }
  return items.map((o, i) => (
    <i
      key={i}
      className="sp"
      style={{
        left: `${o.x}%`,
        top: `${o.y}%`,
        '--s': `${o.s}px`,
        animationDelay: `${o.t}s`,
      }}
    ></i>
  ))
}
