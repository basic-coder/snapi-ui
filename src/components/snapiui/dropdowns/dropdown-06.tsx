"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

const Dropdown06 = () => {
  const notifications = [
    { id: 1, title: "New message", time: "2 min ago", unread: true },
    { id: 2, title: "Task completed", time: "1 hour ago", unread: true },
    { id: 3, title: "Meeting reminder", time: "3 hours ago", unread: false },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="w-4 h-4" />
          <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            2
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <div className="p-3 border-b">
          <h3 className="font-semibold">Notifications</h3>
        </div>
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.id} className="p-3 flex flex-col items-start">
            <div className="flex items-center justify-between w-full">
              <span className="font-medium">{notification.title}</span>
              {notification.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
            </div>
            <span className="text-xs text-gray-500">{notification.time}</span>
          </DropdownMenuItem>
        ))}
        <div className="p-3 border-t">
          <Button variant="ghost" className="w-full text-sm">
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown06
