import React, { useRef } from 'react'

const items = [
  { title: '技术咨询', desc: '专业的AI技术咨询服务，帮助企业制定AI战略规划。' },
  { title: '系统集成', desc: '提供完整的系统集成方案，快速部署AI能力。' },
  { title: '定制开发', desc: '根据业务需求定制开发AI应用，满足特定场景。' },
  { title: '运维支持', desc: '7×24小时技术支持，确保系统稳定运行。' },
]

export default function InteractiveGrid() {
  return (
    <section id="cases" className="stack-xl">
      <div className="container mx-auto px-4">
        <div className="center grid-header">
          <h2 className="h2 reveal">专业服务，全程护航</h2>
          <p className="p reveal grid-subtitle">
            提供从咨询到部署的全流程服务，助力企业AI转型。
          </p>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <MagneticCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MagneticCard({ title, desc }) {
  const ref = useRef(null)

  const onMove = (event) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
  }

  return (
    <div ref={ref} onMouseMove={onMove} className="card reveal col magnetic magnetic-card">
      <div className="magnetic-glow" />
      <div className="magnetic-content">
        <h3 className="magnetic-title">{title}</h3>
        <p className="p magnetic-desc">{desc}</p>
      </div>
    </div>
  )
}
