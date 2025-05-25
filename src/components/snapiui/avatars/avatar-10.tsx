"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatar10 = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-12 h-12 border-4 border-dashed border-gray-300 dark:border-gray-600">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 border-4 border-double border-blue-500">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 border-4 border-dotted border-green-500">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>MJ</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 border-4 border-solid border-purple-500">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>LW</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default Avatar10
