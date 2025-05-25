"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Mail, Phone } from 'lucide-react'

const Modal05 = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg -mx-6 -mt-6"></div>
            <Avatar className="w-20 h-20 mx-auto -mt-10 ring-4 ring-white dark:ring-gray-900">
              <AvatarImage src="/placeholder.svg?height=80&width=80" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600 dark:text-gray-400">Senior Frontend Developer</p>
            <div className="flex justify-center gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Next.js</Badge>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>Joined March 2020</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-500" />
              <span>john@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gray-500" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1">Message</Button>
            <Button variant="outline" className="flex-1">
              Follow
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal05
