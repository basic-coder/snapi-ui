"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

const Alert06 = () => {
  return (
    <div className="w-full max-w-md">
      <Alert className="border-l-4 border-l-yellow-500 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
        <Zap className="h-4 w-4 text-yellow-600" />
        <AlertTitle className="flex items-center gap-2">
          System Maintenance
          <Badge variant="outline" className="text-xs">
            Scheduled
          </Badge>
        </AlertTitle>
        <AlertDescription>
          Our system will be under maintenance on Sunday, 2:00 AM - 4:00 AM UTC. Some features may be temporarily
          unavailable.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default Alert06
