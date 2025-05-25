"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, User } from "lucide-react"

const Nav02 = () => {
  return (
    <nav className="w-full bg-black text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold">STORE</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-gray-300 transition-colors">
            New Arrivals
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Men
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Women
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Sale
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800 relative">
            <ShoppingCart className="w-4 h-4" />
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">3</Badge>
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Nav02
