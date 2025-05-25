"use client"

import { Progress } from "@/components/ui/progress"

const Progress08 = () => {
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Beginner</span>
          <span>25%</span>
        </div>
        <Progress value={25} className="h-6 bg-gray-200 dark:bg-gray-700">
          <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-end pr-2">
            <span className="text-xs text-white font-medium">25%</span>
          </div>
        </Progress>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Intermediate</span>
          <span>60%</span>
        </div>
        <Progress value={60} className="h-6 bg-gray-200 dark:bg-gray-700">
          <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-end pr-2">
            <span className="text-xs text-white font-medium">60%</span>
          </div>
        </Progress>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Advanced</span>
          <span>90%</span>
        </div>
        <Progress value={90} className="h-6 bg-gray-200 dark:bg-gray-700">
          <div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-end pr-2">
            <span className="text-xs text-white font-medium">90%</span>
          </div>
        </Progress>
      </div>
    </div>
  )
}

export default Progress08
