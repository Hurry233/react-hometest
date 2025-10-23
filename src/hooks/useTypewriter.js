import { useState, useEffect } from 'react'

export function useTypewriter(text, speed = 100, startDelay = 500) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!text) return

    // 初始延迟
    const initialTimer = setTimeout(() => {
      setCurrentIndex(0)
      setDisplayText('')
      setIsComplete(false)
    }, startDelay)

    return () => clearTimeout(initialTimer)
  }, [text, startDelay])

  useEffect(() => {
    if (currentIndex === 0 && displayText === '') {
      // 开始打字
      const timer = setTimeout(() => {
        setDisplayText(text[0] || '')
        setCurrentIndex(1)
      }, startDelay)
      return () => clearTimeout(timer)
    }

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed, startDelay, displayText, isComplete])

  return { displayText, isComplete }
}
