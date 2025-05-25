"use client"

import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

const Button09 = () => {
  return (
    <Button className="bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group">
      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
      Send Message
    </Button>
  )
}

export default Button09
