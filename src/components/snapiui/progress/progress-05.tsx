"use client"

import { Progress } from "@/components/ui/progress"

const Progress05 = () => {
  const steps = [
    { name: "Planning", completed: true },
    { name: "Development", completed: true },
    { name: "Testing", completed: false },
    { name: "Deployment", completed: false },
  ]

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step.completed
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
              }`}
            >
              {index + 1}
            </div>
            <div className="flex-1">
              <p
                className={`text-sm ${step.completed ? "text-green-600 font-medium" : "text-gray-600 dark:text-gray-400"}`}
              >
                {step.name}
              </p>
            </div>
            {step.completed && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
          </div>
        ))}
      </div>
      <Progress value={50} className="h-2" />
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">2 of 4 steps completed</p>
    </div>
  )
}

export default Progress05
