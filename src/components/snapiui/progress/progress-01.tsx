"use client"

import { Progress } from "@/components/ui/progress"

const Progress01 = () => {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>75%</span>
        </div>
        <Progress value={75} className="h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Loading</span>
          <span>45%</span>
        </div>
        <Progress value={45} className="h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Complete</span>
          <span>100%</span>
        </div>
        <Progress value={100} className="h-2" />
      </div>
    </div>
  )
}

export default Progress01
