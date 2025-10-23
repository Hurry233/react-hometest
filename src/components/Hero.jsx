import React from 'react'
import { site } from '../config'
import { useTypewriter } from '../hooks/useTypewriter'
import { SplineScene } from './ui/spline'

export default function Hero() {
  const { hero } = site
  const { displayText: titleText, isComplete: titleComplete } = useTypewriter(hero.title, 80, 300)
  const { displayText: subtitleText, isComplete: subtitleComplete } = useTypewriter(hero.subtitle, 60, titleComplete ? 500 : 0)

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-layout">
          {/* 右侧3D场景 */}
          <div className="hero-3d-zone">
            <div className="hero-3d-container">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="spline-scene"
              />
            </div>
          </div>

          {/* 左侧主内容区域 */}
          <div className="hero-content-zone">
            <div className="hero-content">
              <div className="badge reveal" style={{marginBottom: 2}}>
                <span className="dot"/>
                <span>{hero.eyebrow}</span>
              </div>

              <h1 className="hero-title">
                {titleText}
                {!titleComplete && <span className="cursor">|</span>}
              </h1>

              <h2 className="hero-subtitle">
                {titleComplete && (
                  <>
                    {subtitleText}
                    {!subtitleComplete && <span className="cursor">|</span>}
                  </>
                )}
              </h2>

              <p className="hero-desc reveal">{hero.desc}</p>

              <div className="hero-buttons reveal">
                {hero.buttons.map((button, index) => (
                  <a
                    key={index}
                    className="hero-btn magnetic"
                    href={button.href}
                    style={{animationDelay: `${0.8 + index * 0.1}s`}}
                  >
                    <span className="btn-icon">{button.icon}</span>
                    <span className="btn-text">{button.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

