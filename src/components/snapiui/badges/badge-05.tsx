"use client"

import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

const Badge05 = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 pr-1">
        Design
        <button className="ml-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full p-0.5">
          <X className="w-3 h-3" />
        </button>
      </Badge>
      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 pr-1">
        Development
        <button className="ml-1 hover:bg-green-200 dark:hover:bg-green-800 rounded-full p-0.5">
          <X className="w-3 h-3" />
        </button>
      </Badge>
      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 pr-1">
        Marketing
        <button className="ml-1 hover:bg-purple-200 dark:hover:bg-purple-800 rounded-full p-0.5">
          <X className="w-3 h-3" />
        </button>
      </Badge>
    </div>
  )
}

export default Badge05
