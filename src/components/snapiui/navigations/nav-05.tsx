"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const Nav05 = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold">GradientNav</div>
        <div className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <Button variant="ghost" className="text-white hover:bg-white/20 flex items-center gap-1">
              Products
              <ChevronDown className="w-4 h-4" />
            </Button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Web Apps
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Mobile Apps
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Desktop Apps
              </a>
            </div>
          </div>
          <a href="#" className="hover:text-gray-200 transition-colors">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-200 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-gray-200 transition-colors">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            Sign In
          </Button>
          <Button className="bg-white text-purple-600 hover:bg-gray-100">Sign Up</Button>
        </div>
      </div>
    </nav>
  )
}

export default Nav05
