"use client"

import { Button } from "@/components/ui/button"
import { Search, Bell, User, Menu } from "lucide-react"

const Nav01 = () => {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Brand
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Products
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <Search className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Nav01
