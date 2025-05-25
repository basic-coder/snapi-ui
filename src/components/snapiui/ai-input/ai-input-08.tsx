"use client"

import { Textarea } from "@/components/ui/textarea"
import useAutoResizeTextarea from "@/hooks/use-auto-resize-textarea"
import { cn } from "@/lib/utils"
import { Mic, Square, Send, Volume2 } from "lucide-react"
import { useState, useEffect } from "react"

const AiInput08 = () => {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 50, maxHeight: 200 })
  const [inputValue, setInputValue] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioLevel, setAudioLevel] = useState(0)

  const resetHandler = () => {
    setInputValue("")
    adjustHeight(true)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      setRecordingTime(0)
    }
  }

  // Simulate recording timer and audio levels
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
        setAudioLevel(Math.random() * 100)
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isRecording])

  const formatTime = (time: number) => {
    const seconds = Math.floor(time / 10)
    const minutes = Math.floor(seconds / 60)
    return `${minutes}:${(seconds % 60).toString().padStart(2, "0")}`
  }

  return (
    <div className="w-full py-4">
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden">
          {isRecording && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-red-700 dark:text-red-300">
                    Recording: {formatTime(recordingTime)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-red-500" />
                  <div className="w-20 h-2 bg-red-200 dark:bg-red-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 transition-all duration-100 ease-out"
                      style={{ width: `${audioLevel}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="p-4">
            <Textarea
              placeholder={
                isRecording ? "Recording audio... or type your message" : "Type your message or use voice input..."
              }
              className={cn(
                "bg-transparent border-0 rounded-none px-0 py-0",
                "placeholder:text-gray-500 dark:placeholder:text-gray-400",
                "text-gray-900 dark:text-white",
                "overflow-y-auto resize-none",
                "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
                "transition-all duration-200 ease-in-out",
                "leading-[1.4] min-h-[60px] max-h-[200px]",
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
              disabled={isRecording}
            />
          </div>

          <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={toggleRecording}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200",
                isRecording ? "bg-red-500 hover:bg-red-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white",
              )}
            >
              {isRecording ? (
                <>
                  <Square className="w-4 h-4" />
                  Stop Recording
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4" />
                  Voice Input
                </>
              )}
            </button>

            <button
              onClick={resetHandler}
              className={cn(
                "p-3 rounded-xl transition-all duration-200",
                inputValue || isRecording
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-400",
              )}
              disabled={!inputValue && !isRecording}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiInput08
