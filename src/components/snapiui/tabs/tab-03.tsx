"use client"
import { useState } from "react"

const Tab03 = () => {
  const [activeTab, setActiveTab] = useState("design")

  return (
    <div className="w-full max-w-md">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {["design", "development", "marketing"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium capitalize transition-colors relative ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === "design" && (
          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg">
            <h3 className="font-semibold mb-2">Design</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Create beautiful user interfaces and experiences.
            </p>
          </div>
        )}
        {activeTab === "development" && (
          <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-lg">
            <h3 className="font-semibold mb-2">Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Build robust and scalable applications.</p>
          </div>
        )}
        {activeTab === "marketing" && (
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg">
            <h3 className="font-semibold mb-2">Marketing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Grow your audience and increase engagement.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tab03
