import React, { useState, useEffect } from 'react'
import { site } from '../config'
import { useScrollSync } from '../hooks/useScrollSync'

export default function FloatingActionButtons() {
  const { hero } = site
  const scrollPosition = useScrollSync()
  const [transformStyle, setTransformStyle] = useState('')

  useEffect(() => {
    // 根据滚动位置计算transform，实现同步滚动效果
    const scrollOffset = scrollPosition * 0.1 // 减少滚动速度，使效果更自然
    setTransformStyle(`translateY(${scrollOffset}px)`)
  }, [scrollPosition])

  return (
    <div
      className="floating-buttons desktop-only"
      style={{ transform: transformStyle }}
    >
      {hero.buttons.map((button, index) => (
        <a
          key={index}
          className="floating-btn magnetic"
          href={button.href}
          style={{animationDelay: `${0.8 + index * 0.1}s`}}
        >
          <span className="btn-icon">{button.icon}</span>
          <span className="btn-text">{button.label}</span>
        </a>
      ))}
    </div>
  )
}