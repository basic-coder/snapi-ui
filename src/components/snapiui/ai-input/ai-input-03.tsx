'use client'

import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import useAutoResizeTextarea from '@/hooks/use-auto-resize-textarea'
import { cn } from '@/lib/utils'
import { Send, Zap, Code, Palette, FileText } from 'lucide-react'
import React, { useState } from 'react'

const suggestions = [
  { icon: Code, text: "Build a React component", color: "bg-blue-500" },
  { icon: Palette, text: "Design a landing page", color: "bg-purple-500" },
  { icon: FileText, text: "Write documentation", color: "bg-green-500" },
  { icon: Zap, text: "Optimize performance", color: "bg-yellow-500" },
]

const AiInput03 = () => {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 50, maxHeight: 200 })
  const [inputValue, setInputValue] = useState("")

  const resetHandler = () => {
    setInputValue("")
    adjustHeight(true)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    adjustHeight(false)
  }

  return (
    <div className='w-full py-4 space-y-4'>
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="relative border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-gray-900">
          <Textarea 
            placeholder='Describe what you want to build...'
            className={cn(
              "bg-transparent border-0 rounded-none pl-6 pr-16",
              "placeholder:text-gray-500 dark:placeholder:text-gray-400",
              "text-gray-900 dark:text-white",
              "overflow-y-auto resize-none",
              "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
              "transition-all duration-200 ease-in-out",
              "leading-[1.4] py-4 min-h-[56px] max-h-[200px]"
            )} 
            ref={textareaRef}
            value={inputValue} 
            onChange={(e) => {
              setInputValue(e.target.value)
              adjustHeight(false)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                resetHandler()
              }
            }}
          />
          
          <button 
            onClick={resetHandler}
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all duration-200",
              inputValue 
                ? "bg-blue-500 hover:bg-blue-600 text-white" 
                : "bg-gray-100 dark:bg-gray-800 text-gray-400"
            )}
          >
            <Send className='w-4 h-4' />
          </button>
        </div>
      </div>

      {!inputValue && (
        <div className="max-w-2xl w-full mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((suggestion, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors px-3 py-2 text-sm"
                onClick={() => handleSuggestionClick(suggestion.text)}
              >
                <suggestion.icon className="w-3 h-3 mr-2" />
                {suggestion.text}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default AiInput03
