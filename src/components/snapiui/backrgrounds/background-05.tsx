"use client"

import { useState, useEffect } from "react"

const Background05 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = e.currentTarget as Element
      if (rect) {
        const bounds = rect.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - bounds.left) / bounds.width) * 100,
          y: ((e.clientY - bounds.top) / bounds.height) * 100,
        })
      }
    }

    const element = document.getElementById("interactive-bg")
    element?.addEventListener("mousemove", handleMouseMove as any)

    return () => {
      element?.removeEventListener("mousemove", handleMouseMove as any)
    }
  }, [])

  return (
    <div id="interactive-bg" className="relative w-full h-64 overflow-hidden rounded-lg bg-gray-900 cursor-none">
      <div
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                      rgba(59, 130, 246, 0.5) 0%, 
                      rgba(147, 51, 234, 0.3) 25%, 
                      rgba(236, 72, 153, 0.2) 50%, 
                      transparent 70%)`,
        }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Interactive Spotlight</h3>
          <p className="text-gray-300">Move your mouse to control the light</p>
        </div>
      </div>
    </div>
  )
}

export default Background05
