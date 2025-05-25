"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Tab08 = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ["Step 1", "Step 2", "Step 3", "Step 4", "Complete"]

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
          disabled={activeTab === 0}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex-1 mx-4">
          <div className="flex items-center">
            {tabs.map((tab, index) => (
              <div key={tab} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index <= activeTab
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {index + 1}
                </div>
                {index < tabs.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${index < activeTab ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setActiveTab(Math.min(tabs.length - 1, activeTab + 1))}
          disabled={activeTab === tabs.length - 1}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="font-semibold mb-2">{tabs[activeTab]}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Content for {tabs[activeTab].toLowerCase()}</p>
      </div>
    </div>
  )
}

export default Tab08
