"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatar08 = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-12 h-12 hover:scale-110 transition-transform duration-200 cursor-pointer">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 hover:rotate-12 transition-transform duration-200 cursor-pointer">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-200 cursor-pointer">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>MJ</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 hover:brightness-110 transition-all duration-200 cursor-pointer">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>LW</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default Avatar08
