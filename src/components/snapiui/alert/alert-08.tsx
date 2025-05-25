"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Shield, X } from "lucide-react"
import { useState } from "react"

const Alert08 = () => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="w-full max-w-md">
      <Alert className="border-red-200 bg-red-50 dark:bg-red-950 relative">
        <Shield className="h-4 w-4" />
        <AlertTitle>Security Alert</AlertTitle>
        <AlertDescription className="pr-8">
          We detected a new login from an unrecognized device. If this wasn't you, please secure your account
          immediately.
        </AlertDescription>
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 h-6 w-6 p-0"
          onClick={() => setDismissed(true)}
        >
          <X className="h-3 w-3" />
        </Button>
        <div className="flex gap-2 mt-3">
          <Button size="sm" className="h-7">
            Secure Account
          </Button>
          <Button size="sm" variant="outline" className="h-7">
            It was me
          </Button>
        </div>
      </Alert>
    </div>
  )
}

export default Alert08
