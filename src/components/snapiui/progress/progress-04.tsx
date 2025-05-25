"use client"

import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

const Progress04 = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 1
      })
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Animated Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-4">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 animate-pulse" />
        </Progress>
      </div>
    </div>
  )
}

export default Progress04
