"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const Button03 = () => {
  return (
    <Button className="relative overflow-hidden bg-black text-white hover:bg-gray-800 px-8 py-3 group">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative flex items-center">
        <Sparkles className="w-4 h-4 mr-2" />
        Magic Button
      </div>
    </Button>
  )
}

export default Button03
