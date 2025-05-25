"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const Avatar06 = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600">
        <AvatarFallback className="text-white font-semibold">JD</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600">
        <AvatarFallback className="text-white font-semibold">SA</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600">
        <AvatarFallback className="text-white font-semibold">MJ</AvatarFallback>
      </Avatar>
      <Avatar className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600">
        <AvatarFallback className="text-white font-semibold">LW</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default Avatar06
