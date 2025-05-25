"use client"

import { Textarea } from "@/components/ui/textarea"
import useAutoResizeTextarea from "@/hooks/use-auto-resize-textarea"
import { cn } from "@/lib/utils"
import { Command, ArrowRight, Hash, AtSign, Slash } from "lucide-react"
import type React from "react"
import { useState } from "react"

const commands = [
  { prefix: "/", icon: Slash, text: "Commands", description: "Use AI commands" },
  { prefix: "@", icon: AtSign, text: "Mention", description: "Reference files or docs" },
  { prefix: "#", icon: Hash, text: "Tags", description: "Add context tags" },
]

const AiInput06 = () => {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 50, maxHeight: 200 })
  const [inputValue, setInputValue] = useState("")
  const [showCommands, setShowCommands] = useState(false)

  const resetHandler = () => {
    setInputValue("")
    adjustHeight(true)
    setShowCommands(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInputValue(value)
    adjustHeight(false)

    // Show commands if user types a command prefix
    const lastChar = value.slice(-1)
    setShowCommands(["/", "@", "#"].includes(lastChar))
  }

  return (
    <div className="w-full py-4">
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="relative bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
            <Command className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Command Palette</span>
          </div>

          <Textarea
            placeholder="Type / for commands, @ to mention, # for tags..."
            className={cn(
              "bg-transparent border-0 rounded-none px-4 py-4",
              "placeholder:text-gray-500 dark:placeholder:text-gray-400",
              "text-gray-900 dark:text-white font-mono",
              "overflow-y-auto resize-none",
              "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
              "transition-all duration-200 ease-in-out",
              "leading-[1.4] min-h-[60px] max-h-[200px]",
            )}
            ref={textareaRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                resetHandler()
              }
            }}
          />

          {showCommands && (
            <div className="border-t border-gray-300 dark:border-gray-600 p-2 space-y-1">
              {commands.map((command, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  onClick={() => {
                    setInputValue(inputValue + command.prefix)
                    setShowCommands(false)
                  }}
                >
                  <command.icon className="w-4 h-4 text-gray-500" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{command.text}</div>
                    <div className="text-xs text-gray-500">{command.description}</div>
                  </div>
                  <ArrowRight className="w-3 h-3 text-gray-400" />
                </div>
              ))}
            </div>
          )}

          {inputValue && (
            <div className="flex justify-end p-2 border-t border-gray-300 dark:border-gray-600">
              <button
                onClick={resetHandler}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Execute Command
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AiInput06
