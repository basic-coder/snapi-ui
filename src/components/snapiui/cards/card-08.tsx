"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Target, TrendingUp } from "lucide-react"

const Card08 = () => {
  return (
    <Card className="w-full max-w-sm bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-green-500 rounded-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Monthly Goal</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">March 2024</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">78%</div>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span>+12%</span>
            </div>
          </div>
        </div>
        <Progress value={78} className="mb-4" />
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span>$7,800 of $10,000</span>
          <span>22 days left</span>
        </div>
        <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default Card08
