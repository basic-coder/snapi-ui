"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Upload } from "lucide-react"

const Alert04 = () => {
  return (
    <div className="w-full max-w-md">
      <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
        <Upload className="h-4 w-4" />
        <AlertTitle>Uploading files...</AlertTitle>
        <AlertDescription className="space-y-2">
          <div>3 of 5 files uploaded successfully</div>
          <Progress value={60} className="h-2" />
          <div className="text-xs text-gray-600 dark:text-gray-400">2 files remaining</div>
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default Alert04
