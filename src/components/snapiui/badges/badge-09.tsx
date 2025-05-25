"use client"

import { Badge } from "@/components/ui/badge"

const Badge09 = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">XS</Badge>
      <Badge className="text-sm bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Small</Badge>
      <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Medium</Badge>
      <Badge className="text-lg px-4 py-2 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Large</Badge>
      <Badge className="text-xl px-6 py-3 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">XL</Badge>
    </div>
  )
}

export default Badge09
