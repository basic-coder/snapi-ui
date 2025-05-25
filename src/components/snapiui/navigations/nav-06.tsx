"use client"

import { Button } from "@/components/ui/button"
import { Home, Users, Calendar, FileText, Settings, Menu } from "lucide-react"
import { useState } from "react"

const Nav06 = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 z-50">
      <div className={`${isOpen ? "w-64" : "w-16"} transition-all duration-300`}>
        <div className="p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:bg-gray-800 w-full justify-start"
          >
            <Menu className="w-5 h-5" />
            {isOpen && <span className="ml-3">Menu</span>}
          </Button>
        </div>
        <div className="space-y-2 px-2">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800 bg-gray-800">
            <Home className="w-5 h-5" />
            {isOpen && <span className="ml-3">Dashboard</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <Users className="w-5 h-5" />
            {isOpen && <span className="ml-3">Users</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <Calendar className="w-5 h-5" />
            {isOpen && <span className="ml-3">Calendar</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <FileText className="w-5 h-5" />
            {isOpen && <span className="ml-3">Documents</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <Settings className="w-5 h-5" />
            {isOpen && <span className="ml-3">Settings</span>}
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Nav06
