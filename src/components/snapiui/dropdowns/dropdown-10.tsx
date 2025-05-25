"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Check } from "lucide-react"
import { useState } from "react"

const Dropdown10 = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>(["React"])

  const technologies = ["React", "Vue", "Angular", "Svelte", "Next.js", "Nuxt.js"]

  const toggleItem = (item: string) => {
    setSelectedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="min-w-[200px] justify-between">
          <div className="flex flex-wrap gap-1">
            {selectedItems.length > 0 ? (
              selectedItems.slice(0, 2).map((item) => (
                <Badge key={item} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))
            ) : (
              <span>Select technologies</span>
            )}
            {selectedItems.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{selectedItems.length - 2}
              </Badge>
            )}
          </div>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {technologies.map((tech) => (
          <DropdownMenuItem key={tech} onClick={() => toggleItem(tech)} className="flex items-center justify-between">
            {tech}
            {selectedItems.includes(tech) && <Check className="w-4 h-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown10
