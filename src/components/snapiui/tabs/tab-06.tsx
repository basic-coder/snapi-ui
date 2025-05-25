"use client"

import { useState } from "react"

const Tab06 = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ["Features", "Pricing", "Support", "About"]

  return (
    <div className="w-full max-w-md">
      <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === index
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
        {activeTab === 0 && (
          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Discover our powerful features and capabilities.</p>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h3 className="font-semibold mb-2">Pricing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Choose the plan that works best for you.</p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get help when you need it most.</p>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about our company and mission.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tab06
