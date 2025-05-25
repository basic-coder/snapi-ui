"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { useState } from "react"

const Input03 = () => {
  const [tags, setTags] = useState(["React", "TypeScript"])
  const [inputValue, setInputValue] = useState("")

  const addTag = (tag: string) => {
    if (tag.trim() && !tags.includes(tag.trim())) {
      setTags([...tags, tag.trim()])
      setInputValue("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="tags">Tags</Label>
      <div className="border border-gray-300 rounded-lg p-2 min-h-[42px] flex flex-wrap gap-1 items-center">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="flex items-center gap-1">
            {tag}
            <button onClick={() => removeTag(tag)}>
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
        <Input
          id="tags"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              addTag(inputValue)
            }
          }}
          placeholder="Add tags..."
          className="border-0 shadow-none focus-visible:ring-0 flex-1 min-w-[100px]"
        />
      </div>
    </div>
  )
}

export default Input03
