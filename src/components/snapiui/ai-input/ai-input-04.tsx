'use client'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import useAutoResizeTextarea from '@/hooks/use-auto-resize-textarea'
import { cn } from '@/lib/utils'
import { Send, ChevronDown, Bot, Code, Palette, FileText, Zap } from 'lucide-react'
import React, { useState } from 'react'

const agents = [
  { icon: Bot, name: "General AI", color: "text-blue-500", description: "General purpose assistant" },
  { icon: Code, name: "Code Expert", color: "text-green-500", description: "Programming specialist" },
  { icon: Palette, name: "Design Pro", color: "text-purple-500", description: "UI/UX designer" },
  { icon: FileText, name: "Writer", color: "text-orange-500", description: "Content creator" },
]

const AiInput04 = () => {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 50, maxHeight: 200 })
  const [inputValue, setInputValue] = useState("")
  const [selectedAgent, setSelectedAgent] = useState(agents[0])

  const resetHandler = () => {
    setInputValue("")
    adjustHeight(true)
  }

  return (
    <div className='w-full py-4'>
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="flex items-start gap-2 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-3 py-2 h-auto rounded-xl">
                <selectedAgent.icon className={cn("w-4 h-4", selectedAgent.color)} />
                <span className="text-sm font-medium">{selectedAgent.name}</span>
                <ChevronDown className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {agents.map((agent, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedAgent(agent)}
                  className="flex items-center gap-3 p-3"
                >
                  <agent.icon className={cn("w-4 h-4", agent.color)} />
                  <div>
                    <div className="font-medium">{agent.name}</div>
                    <div className="text-xs text-gray-500">{agent.description}</div>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex-1 relative">
            <Textarea 
              placeholder={`Ask ${selectedAgent.name} anything...`}
              className={cn(
                "bg-transparent border-0 rounded-xl px-3 py-2",
                "placeholder:text-gray-500 dark:placeholder:text-gray-400",
                "text-gray-900 dark:text-white",
                "overflow-y-auto resize-none",
                "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
                "transition-all duration-200 ease-in-out",
                "leading-[1.4] min-h-[40px] max-h-[200px]"
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
          </div>

          <Button 
            onClick={resetHandler}
            size="sm"
            className={cn(
              "rounded-xl transition-all duration-200",
              inputValue 
                ? "bg-blue-500 hover:bg-blue-600" 
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            )}
          >
            <Send className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AiInput04
