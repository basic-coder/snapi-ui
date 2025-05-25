"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const Dropdown08 = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
          Actions
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800">
        <DropdownMenuItem className="hover:bg-purple-100 dark:hover:bg-purple-900">Create Project</DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-purple-100 dark:hover:bg-purple-900">Import Data</DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-purple-100 dark:hover:bg-purple-900">Export Report</DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-purple-100 dark:hover:bg-purple-900">Share Link</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown08
