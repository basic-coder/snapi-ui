"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

const Modal07 = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Complete Action</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Success!</h2>
            <p className="text-gray-600 dark:text-gray-400">Your account has been created successfully.</p>
          </div>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p>✓ Email verification sent</p>
            <p>✓ Profile setup complete</p>
            <p>✓ Welcome email sent</p>
          </div>
          <div className="space-y-2">
            <Button className="w-full">Continue to Dashboard</Button>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal07
