"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from 'lucide-react'

const Card05 = () => {
  return (
    <Card className="w-full max-w-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
          <span className="text-white font-bold text-xl">Pro</span>
        </div>
        <CardTitle className="text-2xl">$29/month</CardTitle>
        <p className="text-gray-600 dark:text-gray-400">Perfect for professionals</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {[
            "Unlimited projects",
            "Advanced analytics",
            "Priority support",
            "Custom integrations",
            "Team collaboration",
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
}

export default Card05
