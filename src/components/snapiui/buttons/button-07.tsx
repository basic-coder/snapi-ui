"use client"

import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

const Button07 = () => {
  return (
    <Button className="relative bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      <div className="relative flex items-center">
        <Zap className="w-4 h-4 mr-2" />
        Power Up
      </div>
    </Button>
  )
}

export default Button07
