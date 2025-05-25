"use client"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import useAutoResizeTextarea from "@/hooks/use-auto-resize-textarea"
import { cn } from "@/lib/utils"
import { Send, Zap, Sparkles, Code, Palette, FileText, Settings, Plus } from "lucide-react"
import { useState } from "react"

const quickActions = [
  { icon: Code, text: "Generate Code", color: "bg-blue-500 hover:bg-blue-600" },
  { icon: Palette, text: "Design UI", color: "bg-purple-500 hover:bg-purple-600" },
  { icon: FileText, text: "Write Docs", color: "bg-green-500 hover:bg-green-600" },
  { icon: Sparkles, text: "Optimize", color: "bg-yellow-500 hover:bg-yellow-600" },
]

const AiInput09 = () => {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 50, maxHeight: 200 })
  const [inputValue, setInputValue] = useState("")
  const [showActions, setShowActions] = useState(false)

  const resetHandler = () => {
    setInputValue("")
    adjustHeight(true)
    setShowActions(false)
  }

  const handleQuickAction = (action: string) => {
    setInputValue(action)
    adjustHeight(false)
    setShowActions(false)
  }

  return (
    <div className="w-full py-4">
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="relative">
          {/* Quick Actions Panel */}
          {showActions && (
            <div className="absolute bottom-full left-0 right-0 mb-2 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={cn(
                      "flex items-center gap-2 p-3 h-auto text-white transition-all duration-200",
                      action.color,
                    )}
                    onClick={() => handleQuickAction(action.text)}
                  >
                    <action.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{action.text}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Main Input */}
          <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-end gap-2 p-4">
              <button
                onClick={() => setShowActions(!showActions)}
                className={cn(
                  "p-3 rounded-2xl transition-all duration-200 transform hover:scale-105",
                  showActions
                    ? "bg-blue-500 text-white rotate-45"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700",
                )}
              >
                <Plus className="w-5 h-5" />
              </button>

              <div className="flex-1">
                <Textarea
                  placeholder="What would you like me to help you with today?"
                  className={cn(
                    "bg-transparent border-0 rounded-none px-4 py-3",
                    "placeholder:text-gray-500 dark:placeholder:text-gray-400",
                    "text-gray-900 dark:text-white text-lg",
                    "overflow-y-auto resize-none",
                    "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
                    "transition-all duration-200 ease-in-out",
                    "leading-[1.4] min-h-[56px] max-h-[200px]",
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

              <div className="flex items-center gap-2">
                <button className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Settings className="w-5 h-5 text-gray-500" />
                </button>

                <button
                  onClick={resetHandler}
                  className={cn(
                    "p-3 rounded-2xl transition-all duration-300 transform",
                    inputValue
                      ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white scale-100 shadow-lg hover:shadow-xl"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-400 scale-90",
                  )}
                >
                  {inputValue ? <Send className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiInput09
