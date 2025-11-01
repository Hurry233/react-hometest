import React, { useEffect, useRef } from 'react'

export function Marquee({ logos = [] }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let rafId
    const step = () => {
      el.scrollLeft += 0.5
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0
      }
      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  const items = [...logos, ...logos]

  return (
    <section aria-label="客户 Logo" className="stack-md marquee-section">
      <div className="container mx-auto px-4">
        <div ref={ref} className="marquee-container">
          <div className="marquee-track">
            {items.map((name, index) => (
              <div key={`${name}-${index}`} className="logo marquee-item">
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
