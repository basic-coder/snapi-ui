"use client"

import { Button } from "@/components/ui/button"
import { Home, Briefcase, MessageSquare, Settings } from "lucide-react"

const Nav03 = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-2">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 text-blue-600">
          <Home className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 text-gray-500">
          <Briefcase className="w-5 h-5" />
          <span className="text-xs">Work</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 text-gray-500">
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs">Chat</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2 text-gray-500">
          <Settings className="w-5 h-5" />
          <span className="text-xs">Settings</span>
        </Button>
      </div>
    </nav>
  )
}

export default Nav03
