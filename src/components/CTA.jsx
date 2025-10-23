import React from 'react'

export function CTA({ title, subtitle, buttons }) {
  return (
    <section id="contact" className="stack-xl">
      <div className="container mx-auto px-4">
        <div className="card reveal cta-card" style={{ padding: '48px 40px', display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.1))' }}>
          <div>
            <div className="badge" style={{ marginBottom: 14 }}>
              <span className="dot" />
              <span>立即开始</span>
            </div>
            <h3 style={{ marginTop: 0 }} className="h2">{title}</h3>
            <p className="p" style={{ marginTop: 12, maxWidth: 640 }}>{subtitle}</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
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
