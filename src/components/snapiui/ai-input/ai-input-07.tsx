"use client"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import useAutoResizeTextarea from "@/hooks/use-auto-resize-textarea"
import { cn } from "@/lib/utils"
import { Send, Upload, X, FileText, ImageIcon } from "lucide-react"
import type React from "react"
import { useState, useRef } from "react"

interface UploadedFile {
  id: string
  name: string
  type: string
  size: number
}

const AiInput07 = () => {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 50, maxHeight: 200 })
  const [inputValue, setInputValue] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const resetHandler = () => {
    setInputValue("")
    setUploadedFiles([])
    adjustHeight(true)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const newFiles = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type,
      size: file.size,
    }))
    setUploadedFiles((prev) => [...prev, ...newFiles])
  }

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="w-full py-4">
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg">
          {uploadedFiles.length > 0 && (
            <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <div className="flex flex-wrap gap-2">
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2"
                  >
                    {file.type.startsWith("image/") ? (
                      <ImageIcon className="w-4 h-4 text-blue-500" />
                    ) : (
                      <FileText className="w-4 h-4 text-green-500" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{file.name}</div>
                      <div className="text-xs text-gray-500">{formatFileSize(file.size)}</div>
                    </div>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <X className="w-3 h-3 text-gray-500" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-4">
            <Textarea
              placeholder="Describe your project or ask a question about your files..."
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
            />
          </div>

          <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                accept="image/*,.pdf,.doc,.docx,.txt,.md"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Files
              </Button>
            </div>

            <Button
              onClick={resetHandler}
              size="sm"
              className={cn(
                "transition-all duration-200",
                inputValue || uploadedFiles.length > 0
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-600 cursor-not-allowed",
              )}
              disabled={!inputValue && uploadedFiles.length === 0}
            >
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiInput07
