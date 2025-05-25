"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Star, Rocket } from "lucide-react"

const Nav09 = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">PowerApp</div>
              <div className="text-sm opacity-80">Next-gen platform</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>Features</span>
              <Badge className="bg-yellow-400 text-black text-xs">Hot</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              <span>Pricing</span>
            </div>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Login
            </Button>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav09
