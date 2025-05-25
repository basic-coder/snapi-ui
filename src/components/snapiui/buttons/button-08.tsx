"use client"

import { Button } from "@/components/ui/button"

const Button08 = () => {
  return (
    <Button
      variant="ghost"
      className="relative px-8 py-3 font-semibold text-gray-700 dark:text-gray-300 before:absolute before:inset-0 before:border-2 before:border-gray-300 before:rounded-lg before:transition-all before:duration-300 hover:before:border-blue-500 hover:before:scale-105 hover:text-blue-600"
    >
      Hover Effect
    </Button>
  )
}

export default Button08
