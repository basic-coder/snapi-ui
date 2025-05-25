"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Calendar } from 'lucide-react'

const Card03 = () => {
  return (
    <Card className="w-full max-w-sm backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-gray-700/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-lg bg-green-500/20">
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">+12% this month</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold">$24,500</h3>
          <p className="text-gray-600 dark:text-gray-400">Monthly Revenue</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Active Users</span>
            </div>
            <span className="font-medium">1,234</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>This Month</span>
            </div>
            <span className="font-medium">March 2024</span>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default Card03
