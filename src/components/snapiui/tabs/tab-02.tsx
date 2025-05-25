"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Home, User, Settings, Bell } from "lucide-react"

const Tab02 = () => {
  return (
    <Tabs defaultValue="home" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-4 bg-gray-100 dark:bg-gray-800">
        <TabsTrigger value="home" className="flex items-center gap-2">
          <Home className="w-4 h-4" />
          Home
        </TabsTrigger>
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <User className="w-4 h-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-2 relative">
          <Bell className="w-4 h-4" />
          Alerts
          <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home" className="mt-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
          <h3 className="font-semibold mb-2">Welcome Home</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Your home dashboard content.</p>
        </div>
      </TabsContent>
      <TabsContent value="profile" className="mt-4">
        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
          <h3 className="font-semibold mb-2">Profile Settings</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Manage your profile information.</p>
        </div>
      </TabsContent>
      <TabsContent value="notifications" className="mt-4">
        <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
          <h3 className="font-semibold mb-2">Notifications</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">You have 3 new notifications.</p>
        </div>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
          <h3 className="font-semibold mb-2">Settings</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Configure your preferences.</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default Tab02
