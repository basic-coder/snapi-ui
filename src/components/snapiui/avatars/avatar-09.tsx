"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatar09 = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder.svg?height=48&width=48" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
          3
        </div>
      </div>
      <div className="relative">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder.svg?height=48&width=48" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
          7
        </div>
      </div>
      <div className="relative">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder.svg?height=48&width=48" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
          1
        </div>
      </div>
    </div>
  )
}

export default Avatar09
