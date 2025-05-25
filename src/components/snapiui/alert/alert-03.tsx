"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { X, Download } from "lucide-react"
import { useState } from "react"

const Alert03 = () => {
  const [showAlert, setShowAlert] = useState(true)

  if (!showAlert) return null

  return (
    <div className="w-full max-w-md">
      <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
        <Download className="h-4 w-4" />
        <AlertDescription className="flex items-center justify-between">
          <span>New update available! Download now to get the latest features.</span>
          <div className="flex items-center gap-2 ml-4">
            <Button size="sm" variant="outline" className="h-7">
              Download
            </Button>
            <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={() => setShowAlert(false)}>
              <X className="h-3 w-3" />
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default Alert03
