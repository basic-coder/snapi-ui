'use client'

import { Textarea } from '@/components/ui/textarea'
import useAutoResizeTextarea from '@/hooks/use-auto-resize-textarea'
import { cn } from '@/lib/utils'
import { ArrowUp, Paperclip, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const AiInput02 = () => {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 50, maxHeight: 200 })
  const [inputValue, setInputValue] = useState("")

  const resetHandler = () => {
    setInputValue("")
    adjustHeight(true)
  }

  return (
    <div className='w-full py-4'>
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="relative backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/50 rounded-3xl shadow-2xl">
          <Textarea 
            placeholder='What would you like to create?'
            className={cn(
              "bg-transparent border-0 rounded-3xl pl-6 pr-24",
              "placeholder:text-gray-600 dark:placeholder:text-gray-300",
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
          
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Paperclip className='w-4 h-4 text-gray-500' />
            </button>
            
            <button 
              onClick={resetHandler}
              className={cn(
                "p-2 rounded-xl transition-all duration-200",
                inputValue 
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 scale-100" 
                  : "bg-gray-200 dark:bg-gray-700 scale-90"
              )}
            >
              <ArrowUp className={cn('w-4 h-4', inputValue ? 'text-white' : 'text-gray-500')} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiInput02
