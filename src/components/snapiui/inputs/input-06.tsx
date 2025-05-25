"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

const Input06 = () => {
  const [value, setValue] = useState([50])

  return (
    <div className="w-full max-w-sm space-y-4">
      <Label htmlFor="range">Price Range: ${value[0]}</Label>
      <div className="space-y-4">
        <Slider id="range" min={0} max={100} step={1} value={value} onValueChange={setValue} className="w-full" />
        <Input
          type="number"
          value={value[0]}
          onChange={(e) => setValue([Number.parseInt(e.target.value) || 0])}
          className="text-center font-semibold text-lg border-2 border-blue-200 focus:border-blue-500"
          min={0}
          max={100}
        />
      </div>
    </div>
  )
}

export default Input06
