"use client"

import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

const Button10 = () => {
  return (
    <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
      <Shield className="w-5 h-5 mr-3" />
      Emergency Stop
    </Button>
  )
}

export default Button10
