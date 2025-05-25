"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, X } from 'lucide-react'

const Modal02 = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Confirm Deletion</h3>
            <p className="text-gray-600 dark:text-gray-400">This action cannot be undone.</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Are you sure you want to delete this item? All associated data will be permanently removed from our servers.
        </p>
        <div className="flex gap-2">
          <Button variant="destructive" className="flex-1">
            Delete
          </Button>
          <Button variant="outline" className="flex-1">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal02
