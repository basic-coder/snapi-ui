"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "lucide-react"

const Input08 = () => {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="date">Select Date</Label>
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          id="date"
          type="date"
          className="pl-10 bg-white dark:bg-gray-900 border-2 border-gray-200 focus:border-purple-500 transition-colors duration-200"
        />
      </div>
    </div>
  )
}

export default Input08
