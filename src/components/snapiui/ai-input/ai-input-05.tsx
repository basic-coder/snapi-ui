"use client"

import { Textarea } from "@/components/ui/textarea"
import useAutoResizeTextarea from "@/hooks/use-auto-resize-textarea"
import { cn } from "@/lib/utils"
import { ArrowUp, Sparkles, Mic, ImageIcon, Paperclip } from "lucide-react"
import { useState } from "react"

const AiInput05 = () => {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 50, maxHeight: 200 })
  const [inputValue, setInputValue] = useState("")
  const [isRecording, setIsRecording] = useState(false)

  const resetHandler = () => {
    setInputValue("")
    adjustHeight(true)
  }

  return (
    <div className="w-full py-4">
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-1">
            <div className="flex items-end gap-2 p-3">
              <div className="flex-1">
                <Textarea
                  placeholder="✨ What amazing thing shall we build today?"
                  className={cn(
                    "bg-transparent border-0 rounded-2xl px-4 py-3",
                    "placeholder:text-gray-600 dark:placeholder:text-gray-300",
                    "text-gray-900 dark:text-white",
                    "overflow-y-auto resize-none",
                    "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
                    "transition-all duration-200 ease-in-out",
                    "leading-[1.4] min-h-[48px] max-h-[200px]",
                  )}
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value)
                    adjustHeight(false)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      resetHandler()
                    }
                  }}
                />
              </div>

              <div className="flex items-center gap-1">
                <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Paperclip className="w-4 h-4 text-gray-500" />
                </button>

                <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <ImageIcon className="w-4 h-4 text-gray-500" />
                </button>

                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={cn(
                    "p-2 rounded-xl transition-all duration-200",
                    isRecording
                      ? "bg-red-500 text-white animate-pulse"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500",
                  )}
                >
                  <Mic className="w-4 h-4" />
                </button>

                <button
                  onClick={resetHandler}
                  className={cn(
                    "p-3 rounded-xl transition-all duration-300 transform",
                    inputValue
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white scale-100 shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-400 scale-90",
                  )}
                >
                  {inputValue ? <ArrowUp className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiInput05
