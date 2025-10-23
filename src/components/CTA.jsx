import React from 'react'

export function CTA({ title, subtitle, buttons = [] }) {
  return (
    <section id="contact" className="stack-xl">
      <div className="container mx-auto px-4">
        <div className="card reveal cta-card">
          <div className="cta-content">
            <div className="badge cta-badge">
              <span className="dot" />
              <span>立即开始</span>
            </div>
            <h3 className="h2 cta-title">{title}</h3>
            <p className="p cta-subtitle">{subtitle}</p>
          </div>
          <div className="cta-buttons">
            {buttons.map((button, index) => (
              <a
                key={index}
                className={`btn magnetic ${button.icon === '🚀' ? 'btn-primary' : ''}`}
                href={button.href}
              >
                <span>{button.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
