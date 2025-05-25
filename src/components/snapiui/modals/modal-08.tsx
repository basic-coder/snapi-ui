"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Download, FileText, ImageIcon, Video } from 'lucide-react'
import { useState, useEffect } from "react"

const Modal08 = () => {
  const [progress, setProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)

  const startDownload = () => {
    setIsDownloading(true)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsDownloading(false)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Download Files</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Download Package</h2>
            <p className="text-gray-600 dark:text-gray-400">Select files to download</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <FileText className="w-5 h-5 text-blue-500" />
              <div className="flex-1">
                <p className="font-medium">Documentation.pdf</p>
                <p className="text-sm text-gray-500">2.4 MB</p>
              </div>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <ImageIcon className="w-5 h-5 text-green-500" />
              <div className="flex-1">
                <p className="font-medium">Assets.zip</p>
                <p className="text-sm text-gray-500">15.7 MB</p>
              </div>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <Video className="w-5 h-5 text-purple-500" />
              <div className="flex-1">
                <p className="font-medium">Tutorial.mp4</p>
                <p className="text-sm text-gray-500">45.2 MB</p>
              </div>
              <input type="checkbox" />
            </div>
          </div>
          {isDownloading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Downloading...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
          )}
          <div className="flex gap-2">
            <Button onClick={startDownload} disabled={isDownloading} className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              {isDownloading ? "Downloading..." : "Download Selected"}
            </Button>
            <Button variant="outline" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal08
