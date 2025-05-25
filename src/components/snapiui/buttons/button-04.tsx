"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useState } from "react"

const Button04 = () => {
  const [liked, setLiked] = useState(false)

  return (
    <Button
      variant="ghost"
      onClick={() => setLiked(!liked)}
      className={`transition-all duration-300 ${liked ? "text-red-500 bg-red-50 dark:bg-red-950" : "hover:text-red-500"}`}
    >
      <Heart className={`w-4 h-4 mr-2 transition-all duration-300 ${liked ? "fill-current scale-110" : ""}`} />
      {liked ? "Liked" : "Like"}
    </Button>
  )
}

export default Button04
