"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, FileText, ImageIcon, Video, Music } from "lucide-react"

const Dropdown05 = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Create New
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <FileText className="w-4 h-4 mr-2" />
            Document
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Text Document</DropdownMenuItem>
            <DropdownMenuItem>Spreadsheet</DropdownMenuItem>
            <DropdownMenuItem>Presentation</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <ImageIcon className="w-4 h-4 mr-2" />
            Media
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <ImageIcon className="w-4 h-4 mr-2" />
              Image
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Video className="w-4 h-4 mr-2" />
              Video
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Music className="w-4 h-4 mr-2" />
              Audio
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown05
