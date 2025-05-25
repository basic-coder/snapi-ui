"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Settings } from 'lucide-react'
import { useState } from "react"

const Modal09 = () => {
  const [volume, setVolume] = useState([75])
  const [notifications, setNotifications] = useState(true)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p className="text-gray-600 dark:text-gray-400">Customize your experience</p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="johndoe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </div>
            <div className="space-y-3">
              <Label>Volume: {volume[0]}%</Label>
              <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="notifications">Push Notifications</Label>
                <p className="text-sm text-gray-500">Receive notifications about updates</p>
              </div>
              <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <p className="text-sm text-gray-500">Toggle dark theme</p>
              </div>
              <Switch id="dark-mode" />
            </div>
          </div>
          <div className="flex gap-2 pt-4">
            <Button className="flex-1">Save Changes</Button>
            <Button variant="outline" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal09
