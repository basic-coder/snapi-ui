"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard } from "lucide-react"

const Input05 = () => {
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="card">Card Number</Label>
      <div className="relative">
        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          id="card"
          placeholder="1234 5678 9012 3456"
          className="pl-10 font-mono tracking-wider bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-gray-200 focus:border-blue-500"
          onChange={(e) => {
            e.target.value = formatCardNumber(e.target.value)
          }}
          maxLength={19}
        />
      </div>
    </div>
  )
}

export default Input05
