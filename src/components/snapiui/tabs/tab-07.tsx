"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const Tab07 = () => {
  return (
    <Tabs defaultValue="inbox" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="inbox" className="relative">
          Inbox
          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            5
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="sent">Sent</TabsTrigger>
        <TabsTrigger value="drafts" className="relative">
          Drafts
          <Badge className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            2
          </Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="inbox" className="mt-4">
        <div className="space-y-2">
          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-medium">New Message</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">You have 5 unread messages</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="sent" className="mt-4">
        <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-500">
          <h4 className="font-medium">Sent Messages</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">View your sent messages</p>
        </div>
      </TabsContent>
      <TabsContent value="drafts" className="mt-4">
        <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg border-l-4 border-orange-500">
          <h4 className="font-medium">Draft Messages</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">You have 2 draft messages</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default Tab07
