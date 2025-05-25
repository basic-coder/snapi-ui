"use client"

import { Badge } from "@/components/ui/badge"

const Badge04 = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="rounded-full bg-blue-500 text-white px-3 py-1">React</Badge>
      <Badge className="rounded-full bg-green-500 text-white px-3 py-1">Node.js</Badge>
      <Badge className="rounded-full bg-purple-500 text-white px-3 py-1">TypeScript</Badge>
      <Badge className="rounded-full bg-orange-500 text-white px-3 py-1">JavaScript</Badge>
      <Badge className="rounded-full bg-pink-500 text-white px-3 py-1">CSS</Badge>
    </div>
  )
}

export default Badge04
