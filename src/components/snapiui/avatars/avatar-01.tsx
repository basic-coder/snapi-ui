"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatar01 = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-8 h-8">
        <AvatarImage src="/placeholder.svg?height=32&width=32" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="w-10 h-10">
        <AvatarImage src="/placeholder.svg?height=40&width=40" />
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12">
        <AvatarImage src="/placeholder.svg?height=48&width=48" />
        <AvatarFallback>MJ</AvatarFallback>
      </Avatar>
      <Avatar className="w-16 h-16">
        <AvatarImage src="/placeholder.svg?height=64&width=64" />
        <AvatarFallback>LW</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default Avatar01
