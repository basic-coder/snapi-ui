"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"

const Alert05 = () => {
  return (
    <div className="w-full max-w-md">
      <Alert className="border-purple-200 bg-purple-50 dark:bg-purple-950">
        <UserPlus className="h-4 w-4" />
        <AlertTitle>New team member</AlertTitle>
        <AlertDescription className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg?height=24&width=24" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <span>Sarah joined your team</span>
          </div>
          <Button size="sm" variant="outline" className="h-7">
            View
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default Alert05
