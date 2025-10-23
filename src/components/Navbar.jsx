import React from 'react'

export function Navbar({ logo = { text: 'AICorp' }, navItems = [], actions = [], themeToggle }) {
  return (
    <nav className="nav-blur backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between w-full">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-lg font-bold text-white">{logo.text}</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        {actions.length > 0 && (
          <button
            type="button"
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            {actions[0]}
          </button>
        )}
        {actions.length > 1 && (
          <button
            type="button"
            className="px-4 py-2 text-sm bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-lg hover:shadow-lg transition-all"
          >
            {actions[1]}
          </button>
        )}
        {themeToggle}
      </div>
    </nav>
  )
}
