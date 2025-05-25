"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { useState } from "react"

const Dropdown03 = () => {
  const [filters, setFilters] = useState({
    active: true,
    pending: false,
    completed: false,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem
          checked={filters.active}
          onCheckedChange={(checked) => setFilters((prev) => ({ ...prev, active: checked }))}
        >
          Active Items
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={filters.pending}
          onCheckedChange={(checked) => setFilters((prev) => ({ ...prev, pending: checked }))}
        >
          Pending Items
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={filters.completed}
          onCheckedChange={(checked) => setFilters((prev) => ({ ...prev, completed: checked }))}
        >
          Completed Items
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setFilters({ active: false, pending: false, completed: false })}>
          Clear All
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown03
