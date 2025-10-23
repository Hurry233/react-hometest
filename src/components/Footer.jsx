import React from 'react'

export function Footer({ brand = 'AICorp', year, navItems = [] }) {
  return (
    <footer className="stack-md">
      <div className="container mx-auto px-4">
        <div className="footer-content">
          <div className="footer-brand">
            <svg width="22" height="22" viewBox="0 0 64 64" aria-hidden="true">
              <defs>
                <linearGradient id="footer-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <rect width="64" height="64" rx="12" fill="url(#footer-gradient)" />
            </svg>
            <strong>{brand}</strong>
          </div>

          <nav className="footer-nav" aria-label="页脚导航">
            {navItems.slice(0, 3).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="small footer-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <p className="small footer-copyright">
            © {year} {brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
