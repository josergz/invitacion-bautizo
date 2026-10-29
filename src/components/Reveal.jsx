import { useState, useEffect, useRef } from 'react'

export function Reveal({ d = 0, v = '', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`rv ${v} ${on ? 'on ' : ''}${className}`}
      style={{ '--d': `${d}s` }}
      {...rest}
    >
      {children}
    </div>
  )
}
