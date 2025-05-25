"use client"

import { Progress } from "@/components/ui/progress"
import { Upload } from "lucide-react"

const Progress07 = () => {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex items-center gap-3">
        <Upload className="w-5 h-5 text-blue-500" />
        <div className="flex-1">
          <div className="flex justify-between text-sm mb-1">
            <span>document.pdf</span>
            <span>2.4 MB</span>
          </div>
          <Progress value={65} className="h-2" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Uploading...</span>
            <span>65%</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Upload className="w-5 h-5 text-green-500" />
        <div className="flex-1">
          <div className="flex justify-between text-sm mb-1">
            <span>image.jpg</span>
            <span>1.2 MB</span>
          </div>
          <Progress value={100} className="h-2" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Complete</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress07
