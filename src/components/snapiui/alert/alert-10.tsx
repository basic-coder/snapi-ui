"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Wifi, WifiOff } from "lucide-react"
import { useState } from "react"

const Alert10 = () => {
  const [isOnline, setIsOnline] = useState(false)

  return (
    <div className="w-full max-w-md space-y-4">
      <Alert
        className={`transition-all duration-300 ${
          isOnline
            ? "border-green-200 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200"
            : "border-red-200 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200"
        }`}
      >
        {isOnline ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
        <AlertTitle>{isOnline ? "Connected" : "Connection Lost"}</AlertTitle>
        <AlertDescription className="flex items-center justify-between">
          <span>
            {isOnline
              ? "You're back online! All features are available."
              : "Check your internet connection and try again."}
          </span>
          <Button size="sm" variant="outline" className="h-7 ml-4" onClick={() => setIsOnline(!isOnline)}>
            {isOnline ? "Disconnect" : "Retry"}
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default Alert10
