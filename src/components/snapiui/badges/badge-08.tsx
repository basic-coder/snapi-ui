"use client"

import { Badge } from "@/components/ui/badge"

const Badge08 = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="border-2 border-blue-500 text-blue-500 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950">
        Outlined
      </Badge>
      <Badge className="border-2 border-green-500 text-green-500 bg-transparent hover:bg-green-50 dark:hover:bg-green-950">
        Success
      </Badge>
      <Badge className="border-2 border-red-500 text-red-500 bg-transparent hover:bg-red-50 dark:hover:bg-red-950">
        Error
      </Badge>
      <Badge className="border-2 border-yellow-500 text-yellow-500 bg-transparent hover:bg-yellow-50 dark:hover:bg-yellow-950">
        Warning
      </Badge>
    </div>
  )
}

export default Badge08
