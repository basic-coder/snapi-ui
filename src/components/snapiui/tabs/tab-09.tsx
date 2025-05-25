"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Tab09 = () => {
  return (
    <Tabs defaultValue="code" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3 bg-black text-white">
        <TabsTrigger
          value="code"
          className="data-[state=active]:bg-gray-800 data-[state=active]:text-green-400 font-mono"
        >
          Code
        </TabsTrigger>
        <TabsTrigger
          value="preview"
          className="data-[state=active]:bg-gray-800 data-[state=active]:text-blue-400 font-mono"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          value="docs"
          className="data-[state=active]:bg-gray-800 data-[state=active]:text-yellow-400 font-mono"
        >
          Docs
        </TabsTrigger>
      </TabsList>
      <TabsContent value="code" className="mt-4">
        <div className="p-4 bg-black text-green-400 rounded-lg font-mono text-sm">
          <div className="mb-2 text-gray-500">// Component code</div>
          <div>{'<Button variant="primary">'}</div>
          <div className="ml-4">Click me</div>
          <div>{"</Button>"}</div>
        </div>
      </TabsContent>
      <TabsContent value="preview" className="mt-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Click me</button>
        </div>
      </TabsContent>
      <TabsContent value="docs" className="mt-4">
        <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
          <h3 className="font-semibold mb-2">Documentation</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This button component accepts various props for customization.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default Tab09
