import React, { useRef } from 'react'

const items = [
  { title: '技术咨询', desc: '专业的AI技术咨询服务，帮助企业制定AI战略规划。' },
  { title: '系统集成', desc: '提供完整的系统集成方案，快速部署AI能力。' },
  { title: '定制开发', desc: '根据业务需求定制开发AI应用，满足特定场景。' },
  { title: '运维支持', desc: '7×24小时技术支持，确保系统稳定运行。' },
]

export default function InteractiveGrid(){
  return (
    <section id="cases" className="stack-xl">
      <div className="container">
        <div className="center" style={{marginBottom:34}}>
          <h2 className="h2 reveal">专业服务，全程护航</h2>
          <p className="p reveal" style={{maxWidth:680, margin:'10px auto 0'}}>提供从咨询到部署的全流程服务，助力企业AI转型。</p>
        </div>
        <div className="row">
          {items.map((it, idx)=> (
            <MagneticCard key={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MagneticCard({ title, desc }){
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if(!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', x+'px')
    el.style.setProperty('--my', y+'px')
  }
  return (
    <div ref={ref} onMouseMove={onMove} className="card reveal col magnetic" style={{padding:24, position:'relative', overflow: 'hidden'}}>
      <div style={{position:'absolute', inset:0, borderRadius:16, pointerEvents:'none', background:'radial-gradient(220px 180px at var(--mx,50%) var(--my,50%), rgba(124,58,237,0.18), transparent 60%)', transition: 'opacity 200ms ease', opacity: 0.8}}/>
      <div style={{position:'relative', zIndex:1}}>
        <h3 style={{marginTop:6, fontSize: 20}}>{title}</h3>
        <p className="p" style={{marginTop:10}}>{desc}</p>
      </div>
    </div>
  )
}
