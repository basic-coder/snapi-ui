"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from 'lucide-react'

const Card02 = () => {
  return (
    <Card className="w-full max-w-sm bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-gray-600 dark:text-gray-400">Senior Developer</p>
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3 text-gray-500" />
              <span className="text-sm text-gray-500">San Francisco, CA</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-gray-600">4.9 (127 reviews)</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Node.js</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export default Card02
