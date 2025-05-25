"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Tab01 = () => {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Your account overview and recent activity.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Welcome to your dashboard overview.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View your analytics and performance metrics.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Analytics data will be displayed here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>Generate and view your reports.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Your reports will appear here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default Tab01
