"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useState } from "react"

const Button05 = () => {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 min-w-[120px]"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Loading...
        </>
      ) : (
        "Submit"
      )}
    </Button>
  )
}

export default Button05
