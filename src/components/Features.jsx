import React from 'react'

export function Features({ features = [], className = '' }) {
  const sectionClassName = ['stack-xl', className].filter(Boolean).join(' ')

  return (
    <section id="services" className={sectionClassName}>
      <div className="container mx-auto px-4">
        <div className="text-center features-header">
          <h2 className="h2 reveal">我们的服务优势</h2>
          <p className="p reveal features-subtitle">
            以专业技术和优质服务，为客户提供全方位保障。
          </p>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <article key={index} className="card reveal col feature-card">
              <div className="feature-title-wrapper">
                <span className="dot" />
                <h3 className="feature-title">{feature.title}</h3>
              </div>
              <p className="p feature-desc">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
