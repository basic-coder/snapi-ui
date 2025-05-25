"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Tab05 = () => {
  return (
    <Tabs defaultValue="all" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
          All
        </TabsTrigger>
        <TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
          Active
        </TabsTrigger>
        <TabsTrigger value="pending" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
          Pending
        </TabsTrigger>
        <TabsTrigger value="completed" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
          Done
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-4">
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-semibold mb-2">All Tasks</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">View all your tasks across all statuses.</p>
        </div>
      </TabsContent>
      <TabsContent value="active" className="mt-4">
        <div className="p-4 border border-green-200 dark:border-green-700 rounded-lg bg-green-50 dark:bg-green-950">
          <h3 className="font-semibold mb-2">Active Tasks</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Tasks currently in progress.</p>
        </div>
      </TabsContent>
      <TabsContent value="pending" className="mt-4">
        <div className="p-4 border border-yellow-200 dark:border-yellow-700 rounded-lg bg-yellow-50 dark:bg-yellow-950">
          <h3 className="font-semibold mb-2">Pending Tasks</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Tasks waiting to be started.</p>
        </div>
      </TabsContent>
      <TabsContent value="completed" className="mt-4">
        <div className="p-4 border border-blue-200 dark:border-blue-700 rounded-lg bg-blue-50 dark:bg-blue-950">
          <h3 className="font-semibold mb-2">Completed Tasks</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Tasks that have been finished.</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default Tab05
