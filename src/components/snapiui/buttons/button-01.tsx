"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Button01 = () => {
  return (
    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
      Get Started
      <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  )
}

export default Button01
