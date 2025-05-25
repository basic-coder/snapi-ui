"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X } from "lucide-react"
import { useState } from "react"

const Input07 = () => {
  const [files, setFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="file">Upload Files</Label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors duration-200">
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <Input id="file" type="file" multiple onChange={handleFileChange} className="hidden" />
        <label htmlFor="file" className="cursor-pointer text-sm text-gray-600 hover:text-blue-600">
          Click to upload or drag and drop
        </label>
      </div>
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2 rounded">
              <span className="text-sm truncate">{file.name}</span>
              <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Input07
