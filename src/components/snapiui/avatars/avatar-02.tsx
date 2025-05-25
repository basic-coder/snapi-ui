"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatar02 = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder.svg?height=48&width=48" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
      </div>
      <div className="relative">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder.svg?height=48&width=48" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
      </div>
      <div className="relative">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder.svg?height=48&width=48" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
      </div>
      <div className="relative">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder.svg?height=48&width=48" />
          <AvatarFallback>LW</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
      </div>
    </div>
  )
}

export default Avatar02
