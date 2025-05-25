"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MessageSquare } from "lucide-react"

const Card09 = () => {
  return (
    <Card className="w-full max-w-sm shadow-2xl border-0 bg-white dark:bg-gray-900">
      <CardHeader className="text-center pb-4">
        <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-blue-100 dark:ring-blue-900">
          <AvatarImage src="/placeholder.svg?height=80&width=80" />
          <AvatarFallback>EM</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold">Emily Chen</h3>
        <p className="text-gray-600 dark:text-gray-400">UX Designer</p>
        <Badge variant="secondary" className="mx-auto">
          Available for hire
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          "Emily delivered exceptional work on our mobile app redesign. Highly recommended!"
        </p>
        <div className="flex gap-2">
          <Button className="flex-1">
            <MessageSquare className="w-4 h-4 mr-2" />
            Message
          </Button>
          <Button variant="outline" className="flex-1">
            View Portfolio
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Card09
