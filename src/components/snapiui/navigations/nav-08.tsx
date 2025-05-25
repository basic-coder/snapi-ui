"use client"

import { Button } from "@/components/ui/button"
import { Search, ShoppingBag, User } from "lucide-react"

const Nav08 = () => {
  return (
    <nav className="w-full">
      <div className="bg-gray-100 dark:bg-gray-800 px-6 py-2">
        <div className="flex items-center justify-between max-w-7xl mx-auto text-sm">
          <div className="text-gray-600 dark:text-gray-400">Free shipping on orders over $50</div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Help
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Track Order
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-3xl font-bold">FASHION</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium">
              NEW IN
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              WOMEN
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              MEN
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              KIDS
            </a>
            <a href="#" className="text-red-600 font-medium">
              SALE
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingBag className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav08
