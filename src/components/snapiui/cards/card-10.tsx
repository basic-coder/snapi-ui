"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, BookOpen } from "lucide-react"

const Card10 = () => {
  return (
    <Card className="w-full max-w-sm overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <div className="h-40 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        <Button
          size="sm"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Play className="w-5 h-5" />
        </Button>
        <Badge className="absolute top-3 left-3 bg-red-500 text-white">New</Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <Clock className="w-3 h-3" />
          <span>45 min</span>
          <BookOpen className="w-3 h-3 ml-2" />
          <span>12 lessons</span>
        </div>
        <h3 className="font-semibold mb-2">Advanced React Patterns</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Master advanced React patterns and best practices for scalable applications.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">$49</span>
          <Button size="sm">Enroll Now</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Card10
