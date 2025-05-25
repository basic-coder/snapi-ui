"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, X } from 'lucide-react'

const Modal04 = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Upload File</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Upload Document</h2>
            <p className="text-gray-600 dark:text-gray-400">Share your file with the team</p>
          </div>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 mb-2">Drag and drop your file here</p>
            <p className="text-sm text-gray-500">or click to browse</p>
            <Button variant="outline" className="mt-4">
              Choose File
            </Button>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="filename">File Name</Label>
              <Input id="filename" placeholder="Enter file name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Add a description..." rows={3} />
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1">Upload</Button>
            <Button variant="outline" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal04
