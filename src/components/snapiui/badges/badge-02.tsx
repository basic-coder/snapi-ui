"use client"

import { Badge } from "@/components/ui/badge"
import { Star, Zap, Crown, Shield } from "lucide-react"

const Badge02 = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <Star className="w-3 h-3 mr-1" />
        Premium
      </Badge>
      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <Zap className="w-3 h-3 mr-1" />
        Pro
      </Badge>
      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <Crown className="w-3 h-3 mr-1" />
        VIP
      </Badge>
      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <Shield className="w-3 h-3 mr-1" />
        Verified
      </Badge>
    </div>
  )
}

export default Badge02
