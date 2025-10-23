import React, { Suspense } from 'react'
import Spline from '@splinetool/react-spline'

export function SplineScene({ scene, className }) {
  return (
    <Suspense fallback={
      <div className={`bg-gray-900 animate-pulse ${className}`} style={{ height: '80vh' }} />
    }>
      <Spline
        scene={scene || "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"}
        className={className}
      />
    </Suspense>
  )
}