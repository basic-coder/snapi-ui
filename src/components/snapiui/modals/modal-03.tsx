"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock } from 'lucide-react'

const Modal03 = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <div className="space-y-6">
          <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold">Modern Web Development Workshop</h2>
                <p className="text-gray-600 dark:text-gray-400">Learn the latest technologies and best practices</p>
              </div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Available</Badge>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>4.9 (127 reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Online</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>3 hours</span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Join us for an intensive workshop covering React, TypeScript, and modern development tools. Perfect for
              developers looking to upgrade their skills.
            </p>
            <div className="flex gap-2 pt-4">
              <Button className="flex-1">Enroll Now - $99</Button>
              <Button variant="outline">Add to Wishlist</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal03
