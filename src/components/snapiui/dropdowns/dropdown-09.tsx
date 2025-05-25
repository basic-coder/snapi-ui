"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown } from "lucide-react"
import { useState } from "react"

const Dropdown09 = () => {
  const [search, setSearch] = useState("")
  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"]

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(search.toLowerCase()))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Select Fruit
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <div className="p-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search fruits..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        {filteredOptions.map((option) => (
          <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
        ))}
        {filteredOptions.length === 0 && <div className="p-2 text-sm text-gray-500 text-center">No results found</div>}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown09
