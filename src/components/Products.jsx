import React, { useState } from 'react'

export default function Products({ products = [] }) {
  return (
    <section id="products" className="stack-xl">
      <div className="container mx-auto px-4">
        <div className="reveal center products-header">
          <h2 className="h2">我们的核心产品</h2>
          <p className="p-xl products-subtitle">
            为企业和个人提供全方位的AI技术服务，助力数字化转型
          </p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="product-card reveal card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        borderColor: isHovered ? 'rgba(124, 58, 237, 0.5)' : 'var(--line)',
      }}
    >
      <div
        className="product-icon"
        style={{
          filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
        }}
      >
        {product.icon}
      </div>
      <h3 className="product-card-title">{product.title}</h3>
      <p className="product-card-desc">{product.desc}</p>
      <ul className="feature-list">
        {product.features.map((feature, i) => (
          <li key={i} className="feature-item">
            <span className="feature-check">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href={product.link} className="product-link">
        了解更多
        <span
          className="product-link-arrow"
          style={{
            transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
          }}
        >
          →
        </span>
      </a>
    </article>
  )
}
