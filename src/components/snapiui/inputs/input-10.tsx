"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mic, MicOff } from "lucide-react"
import { useState } from "react"

const Input10 = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="voice">Voice Input</Label>
      <div className="relative">
        <Input
          id="voice"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Speak or type your message..."
          className="pr-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-2 border-purple-200 focus:border-purple-500"
        />
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-all duration-200 ${
            isRecording
              ? "bg-red-500 text-white animate-pulse"
              : "text-gray-400 hover:text-purple-500 hover:bg-purple-100"
          }`}
        >
          {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
        </button>
      </div>
      {isRecording && (
        <div className="text-xs text-red-500 flex items-center gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          Recording...
        </div>
      )}
    </div>
  )
}

export default Input10
