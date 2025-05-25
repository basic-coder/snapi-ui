"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatar03 = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-12 h-12 ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 ring-2 ring-green-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 ring-2 ring-purple-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>MJ</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 ring-2 ring-pink-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>LW</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default Avatar03
