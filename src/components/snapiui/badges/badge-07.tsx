"use client"

import { Badge } from "@/components/ui/badge"

const Badge07 = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg">New</Badge>
      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">Updated</Badge>
      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">Featured</Badge>
      <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg">Popular</Badge>
      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">Hot</Badge>
    </div>
  )
}

export default Badge07
