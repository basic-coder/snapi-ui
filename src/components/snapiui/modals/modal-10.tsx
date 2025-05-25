"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, MapPin } from 'lucide-react'

const Modal10 = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Event</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <div className="space-y-6">
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg"></div>
            <Badge className="absolute top-4 left-4 bg-red-500 text-white">Live Event</Badge>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Tech Conference 2024</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Join industry leaders for a day of innovation, networking, and learning about the future of technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>March 25, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-500" />
                <span>500+ Attendees</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Featured Speakers</h3>
              <div className="flex gap-2">
                <Badge variant="outline">Sarah Chen - Google</Badge>
                <Badge variant="outline">Mike Johnson - Meta</Badge>
                <Badge variant="outline">Lisa Wang - Apple</Badge>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What's Included</h3>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Full day access to all sessions</li>
                <li>• Networking lunch and coffee breaks</li>
                <li>• Conference materials and swag bag</li>
                <li>• Access to recorded sessions</li>
              </ul>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">Register Now - $299</Button>
              <Button variant="outline">Add to Calendar</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal10
