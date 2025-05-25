"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { TrendingUp } from "lucide-react"

const Alert09 = () => {
  return (
    <div className="w-full max-w-md">
      <Alert className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
        <TrendingUp className="h-4 w-4" />
        <AlertTitle>Congratulations! 🎉</AlertTitle>
        <AlertDescription>You've reached 1,000 subscribers! Your content is making a real impact.</AlertDescription>
      </Alert>
    </div>
  )
}

export default Alert09
