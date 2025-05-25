"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"

const Input09 = () => {
  const [quantity, setQuantity] = useState(1)

  const increment = () => setQuantity((prev) => prev + 1)
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1))

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="quantity">Quantity</Label>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={decrement}
          className="rounded-none border-r border-gray-300 hover:bg-gray-100"
        >
          <Minus className="w-4 h-4" />
        </Button>
        <Input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
          className="border-0 text-center font-semibold focus-visible:ring-0 rounded-none"
          min={1}
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={increment}
          className="rounded-none border-l border-gray-300 hover:bg-gray-100"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

export default Input09
