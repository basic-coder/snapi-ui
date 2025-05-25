"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

const Alert07 = () => {
  return (
    <div className="w-full max-w-md">
      <Alert className="bg-gray-900 text-white border-gray-700">
        <Cookie className="h-4 w-4" />
        <AlertDescription className="flex items-center justify-between">
          <span>We use cookies to improve your experience.</span>
          <div className="flex items-center gap-2 ml-4">
            <Button size="sm" variant="outline" className="h-7 text-black">
              Accept
            </Button>
            <Button size="sm" variant="ghost" className="h-7 text-white hover:text-gray-300">
              Decline
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default Alert07
