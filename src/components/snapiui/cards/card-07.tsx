"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from 'lucide-react'

const Card07 = () => {
  return (
    <Card className="w-full max-w-sm bg-black text-white border-gray-800">
      <div className="h-32 bg-gradient-to-r from-purple-600 to-pink-600 relative">
        <Badge className="absolute top-3 right-3 bg-yellow-500 text-black">Live</Badge>
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <Calendar className="w-4 h-4" />
          <span>March 25, 2024</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Design Systems Workshop</h3>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Online</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>124 attending</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 text-sm mb-4">
          Join us for an intensive workshop on building scalable design systems.
        </p>
        <Button className="w-full bg-white text-black hover:bg-gray-200">
          Register Now
        </Button>
      </CardContent>
    </Card>
  )
}

export default Card07
