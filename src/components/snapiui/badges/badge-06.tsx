"use client"

import { Badge } from "@/components/ui/badge"

const Badge06 = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="relative bg-red-500 text-white">
        Urgent
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-ping"></span>
      </Badge>
      <Badge className="relative bg-orange-500 text-white">
        High Priority
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-600 rounded-full animate-pulse"></span>
      </Badge>
      <Badge className="bg-blue-500 text-white">Normal</Badge>
      <Badge className="bg-gray-500 text-white">Low</Badge>
    </div>
  )
}

export default Badge06
