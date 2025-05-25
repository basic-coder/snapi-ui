"use client"

import { Badge } from "@/components/ui/badge"

const Badge10 = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-blue-500 text-white relative overflow-hidden">
        <span className="relative z-10">Shimmer</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
      </Badge>
      <Badge className="bg-purple-500 text-white transform hover:scale-110 transition-transform duration-200">
        Hover Scale
      </Badge>
      <Badge className="bg-green-500 text-white hover:shadow-lg hover:shadow-green-500/50 transition-shadow duration-200">
        Glow Effect
      </Badge>
      <Badge className="bg-red-500 text-white animate-bounce">Bounce</Badge>
    </div>
  )
}

export default Badge10
