import React from 'react'

export function Features({ features }) {
  return (
    <section id="services" className="stack-xl">
      <div className="container mx-auto px-4">
        <div className="text-center" style={{ marginBottom: 34 }}>
          <h2 className="h2 reveal">我们的服务优势</h2>
          <p className="p reveal" style={{ maxWidth: 680, margin: '10px auto 0' }}>
            以专业技术和优质服务，为客户提供全方位保障。
          </p>
        </div>
        <div className="row">
          {features.map((f, i) => (
            <article key={i} className="card reveal col" style={{ padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span className="dot" />
                <h3 style={{ margin: 0 }}>{f.title}</h3>
              </div>
              <p className="p" style={{ marginTop: 6 }}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
