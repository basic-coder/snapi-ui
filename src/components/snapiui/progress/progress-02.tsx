"use client"

import { Progress } from "@/components/ui/progress"

const Progress02 = () => {
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>CPU Usage</span>
          <span>65%</span>
        </div>
        <Progress value={65} className="h-3 bg-red-100 dark:bg-red-900">
          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-300" />
        </Progress>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Memory</span>
          <span>80%</span>
        </div>
        <Progress value={80} className="h-3 bg-yellow-100 dark:bg-yellow-900">
          <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full transition-all duration-300" />
        </Progress>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Storage</span>
          <span>45%</span>
        </div>
        <Progress value={45} className="h-3 bg-green-100 dark:bg-green-900">
          <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-300" />
        </Progress>
      </div>
    </div>
  )
}

export default Progress02
