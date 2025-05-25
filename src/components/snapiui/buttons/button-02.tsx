"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const Button02 = () => {
  return (
    <Button
      variant="outline"
      className="group border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 px-6 py-3"
    >
      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
      Download
    </Button>
  )
}

export default Button02
