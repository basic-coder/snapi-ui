"use client"

import { Badge } from "@/components/ui/badge"

const Badge03 = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 animate-pulse">Live</Badge>
      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Online</Badge>
      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Away</Badge>
      <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">Offline</Badge>
    </div>
  )
}

export default Badge03
