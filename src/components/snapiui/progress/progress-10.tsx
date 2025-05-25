"use client"

import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

const Progress10 = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 2
      })
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Rainbow Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-4 bg-gray-200 dark:bg-gray-700">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              background: `linear-gradient(90deg, 
                hsl(${progress * 3.6}, 70%, 50%) 0%, 
                hsl(${(progress * 3.6 + 60) % 360}, 70%, 50%) 50%, 
                hsl(${(progress * 3.6 + 120) % 360}, 70%, 50%) 100%)`,
            }}
          />
        </Progress>
      </div>
    </div>
  )
}

export default Progress10
