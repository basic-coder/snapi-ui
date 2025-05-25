"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const Nav07 = () => {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold">MultiLevel</div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
        <div className="flex items-center gap-8 border-t pt-4">
          <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
            Home
          </a>
          <div className="relative group">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Categories
            </a>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4 space-y-2">
                <a href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  Technology
                  <Badge variant="secondary" className="ml-2">
                    New
                  </Badge>
                </a>
                <a href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  Design
                </a>
                <a href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  Business
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
            Blog
          </a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav07
