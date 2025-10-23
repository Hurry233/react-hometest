import React from 'react'

export function ThemeProvider({ children, attribute = "class", defaultTheme = "system", enableSystem = true, disableTransitionOnChange = false }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {children}
    </div>
  )
}