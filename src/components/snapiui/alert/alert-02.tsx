"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react'

const Alert02 = () => {
  return (
    <div className="w-full max-w-md space-y-4">
      <Alert className="border-green-200 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>
      
      <Alert className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-200">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This action cannot be undone.</AlertDescription>
      </Alert>
      
      <Alert className="border-red-200 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>
      
      <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-200">
        <Info className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>Here's some helpful information for you.</AlertDescription>
      </Alert>
    </div>
  )
}

export default Alert02
