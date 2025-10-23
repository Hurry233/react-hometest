import React, { useState } from 'react'
import { site } from '../config'

export default function Products() {
  return (
    <section id="products" className="stack-xl" >
      <div className="container">
        <div className="reveal center" style={{ marginBottom: 60 }}>
          <h2 className="h2">我们的核心产品</h2>
          <p className="p-xl" style={{ marginTop: 16, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
            为企业和个人提供全方位的AI技术服务，助力数字化转型
          </p>
        </div>
        <div className="products-grid">
          {site.products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="product-card reveal card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: 32,
        transition: 'all 400ms cubic-bezier(.2,.8,.2,1)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(124,58,237,0.5)' : 'var(--line)',
      }}
    >
      <div className="product-icon" style={{
        fontSize: 48,
        marginBottom: 20,
        display: 'inline-block',
        filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
        transition: 'all 300ms ease'
      }}>
        {product.icon}
      </div>
      <h3 className="h2" style={{ fontSize: 24, marginBottom: 12 }}>
        {product.title}
      </h3>
      <p className="p" style={{ marginBottom: 24, lineHeight: 1.7 }}>
        {product.desc}
      </p>
      <ul className="feature-list" style={{ marginBottom: 24 }}>
        {product.features.map((feature, i) => (
          <li key={i} className="feature-item">
            <span className="feature-check">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={product.link}
        className="product-link"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          color: 'var(--accent)',
          fontWeight: 500,
          transition: 'all 200ms ease'
        }}
      >
        了解更多
        <span style={{
          display: 'inline-block',
          transition: 'transform 200ms ease',
          transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
        }}>→</span>
      </a>
    </article>
  )
}
