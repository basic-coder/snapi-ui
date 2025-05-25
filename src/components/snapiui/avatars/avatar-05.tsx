"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatar05 = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-12 h-12 rounded-lg">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 rounded-xl">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 rounded-none">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>MJ</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 rounded-full">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>LW</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default Avatar05
