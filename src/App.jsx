import React, { useRef, useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import { Features } from './components/Features'
import { Marquee } from './components/Marquee'
import InteractiveGrid from './components/InteractiveGrid'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { site } from './config'
import { Menu, MenuItem, HoveredLink } from './components/ui/navbar-menu'
import { ThemeToggle } from './components/ui/theme-toggle'

export default function App() {
  const bgRef = useRef(null)
  const [active, setActive] = useState(null)  

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in')
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const onMove = (e) => {
    const el = bgRef.current
    if (!el) return
    const r =

      el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', x + 'px')
    el.style.setProperty('--my', y + 'px')
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false} >
      <div className="min-h-screen bg-background text-foreground">
        {/* Navbar */}
        <div className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Navbar
              logo={{ text: 'AICorp' }}
              navItems={site.nav}
              actions={['登录', '开始使用']}
              themeToggle={<ThemeToggle />}
            />
          </div>
        </div>

        <main className="grid-bg" ref={bgRef} onMouseMove={onMove}>
          {/* Hero Section */}
          <Hero hero={site.hero} />
        {/* Marquee Section */}
        <Marquee logos={site.logos} />

          {/* Products Section */}
          <section id="products" className="stack-xl">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal">
                <span className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                  产品服务
                </span>
              </h2>
              <Products products={site.products} />
            </div>
          </section>

          {/* Features Section */}
          <section className="stack-xl grid-bg">
            <div className="container mx-auto px-4">
              <Features features={site.features} />
            </div>
          </section>

          

          {/* Interactive Grid */}
          <section className="stack-xl">
            <div className="container mx-auto px-4">
              <InteractiveGrid />
            </div>
          </section>

          {/* CTA Section */}
          <CTA
            title="开启您的AI之旅"
            subtitle="立即开始体验我们的人工智能解决方案"
            buttons={[
              { label: '免费试用', href: '#products', icon: '🚀' },
              { label: '预约演示', href: '#contact', icon: '💬' }
            ]}
          />
        </main>

        {/* Footer */}
        <Footer
          brand="AICorp"
          year={new Date().getFullYear()}
          navItems={site.nav}
        />
      </div>
    </ThemeProvider>
  )
}