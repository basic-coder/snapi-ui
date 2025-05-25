"use client"

import { Progress } from "@/components/ui/progress"

const Progress06 = () => {
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>HTML</span>
          <span>90%</span>
        </div>
        <Progress value={90} className="h-2 bg-orange-100 dark:bg-orange-900">
          <div className="h-full bg-orange-500 rounded-full transition-all duration-300" />
        </Progress>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>CSS</span>
          <span>85%</span>
        </div>
        <Progress value={85} className="h-2 bg-blue-100 dark:bg-blue-900">
          <div className="h-full bg-blue-500 rounded-full transition-all duration-300" />
        </Progress>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>JavaScript</span>
          <span>75%</span>
        </div>
        <Progress value={75} className="h-2 bg-yellow-100 dark:bg-yellow-900">
          <div className="h-full bg-yellow-500 rounded-full transition-all duration-300" />
        </Progress>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>React</span>
          <span>70%</span>
        </div>
        <Progress value={70} className="h-2 bg-cyan-100 dark:bg-cyan-900">
          <div className="h-full bg-cyan-500 rounded-full transition-all duration-300" />
        </Progress>
      </div>
    </div>
  )
}

export default Progress06
