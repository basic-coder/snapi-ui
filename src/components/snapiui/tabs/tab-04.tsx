"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Tab04 = () => {
  return (
    <Tabs defaultValue="tab1" className="w-full max-w-md" orientation="vertical">
      <div className="flex gap-4">
        <TabsList className="flex flex-col h-fit w-32">
          <TabsTrigger value="tab1" className="w-full">
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="tab2" className="w-full">
            Projects
          </TabsTrigger>
          <TabsTrigger value="tab3" className="w-full">
            Team
          </TabsTrigger>
          <TabsTrigger value="tab4" className="w-full">
            Settings
          </TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="tab1" className="mt-0">
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h3 className="font-semibold mb-2">Dashboard</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Overview of your workspace and recent activity.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="mt-0">
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <h3 className="font-semibold mb-2">Projects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Manage your projects and track progress.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab3" className="mt-0">
            <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <h3 className="font-semibold mb-2">Team</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Collaborate with your team members.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab4" className="mt-0">
            <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <h3 className="font-semibold mb-2">Settings</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Configure your workspace preferences.</p>
            </div>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  )
}

export default Tab04
