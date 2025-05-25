"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const Avatar07 = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/placeholder.svg?height=64&width=64" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Badge className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1">Pro</Badge>
      </div>
      <div className="relative">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/placeholder.svg?height=64&width=64" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <Badge className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs px-1">VIP</Badge>
      </div>
      <div className="relative">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/placeholder.svg?height=64&width=64" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
        <Badge className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1">New</Badge>
      </div>
    </div>
  )
}

export default Avatar07
