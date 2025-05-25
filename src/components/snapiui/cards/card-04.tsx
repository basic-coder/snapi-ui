"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye } from 'lucide-react'

const Card04 = () => {
  return (
    <Card className="w-full max-w-sm group hover:scale-105 transition-transform duration-300 cursor-pointer border-0 shadow-lg">
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="h-48 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        <Badge className="absolute top-3 left-3 bg-white text-black">Featured</Badge>
        <div className="absolute bottom-3 right-3 flex gap-2">
          <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-xs">
            <Eye className="w-3 h-3" />
            <span>1.2k</span>
          </div>
          <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-xs">
            <Clock className="w-3 h-3" />
            <span>5 min</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          Creating Beautiful Gradients
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Learn how to create stunning gradient effects for your web projects.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">2 hours ago</span>
          <span className="text-xs font-medium text-blue-600">Design</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default Card04
