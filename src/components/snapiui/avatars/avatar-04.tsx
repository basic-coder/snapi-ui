"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatar04 = () => {
  return (
    <div className="flex items-center">
      <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900">
        <AvatarImage src="/placeholder.svg?height=40&width=40" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900 -ml-2">
        <AvatarImage src="/placeholder.svg?height=40&width=40" />
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>
      <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900 -ml-2">
        <AvatarImage src="/placeholder.svg?height=40&width=40" />
        <AvatarFallback>MJ</AvatarFallback>
      </Avatar>
      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full -ml-2 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-300">
        +5
      </div>
    </div>
  )
}

export default Avatar04
