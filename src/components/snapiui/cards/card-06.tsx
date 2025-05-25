"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageCircle, Heart, Repeat2, Share } from 'lucide-react'

const Card06 = () => {
  return (
    <Card className="w-full max-w-md border-l-4 border-l-blue-500">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold">Sarah Anderson</span>
              <span className="text-sm text-gray-500">@sarah_dev</span>
              <span className="text-sm text-gray-500">·</span>
              <span className="text-sm text-gray-500">2h</span>
            </div>
            <p className="text-sm mb-3">
              Just shipped a new feature! The auto-resize textarea component is now live. 
              Really excited about the smooth animations and accessibility improvements. 🚀
            </p>
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-500">
                <MessageCircle className="w-4 h-4 mr-1" />
                <span className="text-xs">12</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-500">
                <Repeat2 className="w-4 h-4 mr-1" />
                <span className="text-xs">8</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                <Heart className="w-4 h-4 mr-1" />
                <span className="text-xs">24</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-500">
                <Share className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Card06
