"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const Input04 = () => {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)

  return (
    <div className="w-full max-w-sm">
      <div className="relative">
        <Input
          id="floating"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="peer pt-6 pb-2 border-2 border-gray-300 focus:border-blue-500 transition-all duration-200"
        />
        <Label
          htmlFor="floating"
          className={`absolute left-3 transition-all duration-200 pointer-events-none ${
            focused || value ? "top-2 text-xs text-blue-500" : "top-1/2 -translate-y-1/2 text-gray-500"
          }`}
        >
          Email Address
        </Label>
      </div>
    </div>
  )
}

export default Input04
