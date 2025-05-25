"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Share2, BookmarkPlus } from 'lucide-react'

const Card01 = () => {
  return (
    <Card className="w-full max-w-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600"></div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">Technology</Badge>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <CardTitle>Modern Web Development</CardTitle>
        <CardDescription>
          Exploring the latest trends and technologies in web development for 2024.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">Read More</Button>
      </CardContent>
    </Card>
  )
}

export default Card01
