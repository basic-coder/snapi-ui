"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Modal06 = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="space-y-4">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold">Welcome Back</h2>
              <p className="text-gray-600 dark:text-gray-400">Sign in to your account</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input id="login-email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input id="login-password" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full">Sign In</Button>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot your password?
                </a>
              </p>
            </div>
          </TabsContent>
          <TabsContent value="register" className="space-y-4">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold">Create Account</h2>
              <p className="text-gray-600 dark:text-gray-400">Join us today</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-name">Full Name</Label>
                <Input id="register-name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input id="register-email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input id="register-password" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full">Create Account</Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

export default Modal06
