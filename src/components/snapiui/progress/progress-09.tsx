"use client"

import { Progress } from "@/components/ui/progress"

const Progress09 = () => {
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Small</span>
          <span>30%</span>
        </div>
        <Progress value={30} className="h-1" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Medium</span>
          <span>60%</span>
        </div>
        <Progress value={60} className="h-3" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Large</span>
          <span>80%</span>
        </div>
        <Progress value={80} className="h-5" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Extra Large</span>
          <span>95%</span>
        </div>
        <Progress value={95} className="h-8" />
      </div>
    </div>
  )
}

export default Progress09
