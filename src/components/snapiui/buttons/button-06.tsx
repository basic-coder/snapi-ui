"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const Button06 = () => {
  return (
    <div className="flex">
      <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-r-none">Actions</Button>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-3 rounded-l-none border-l border-blue-400">
        <ChevronDown className="w-4 h-4" />
      </Button>
    </div>
  )
}

export default Button06
