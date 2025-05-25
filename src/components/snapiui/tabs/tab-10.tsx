"use client"

import { useState } from "react"
import { X } from "lucide-react"

const Tab10 = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Dashboard", active: true },
    { id: 2, title: "Analytics", active: false },
    { id: 3, title: "Settings", active: false },
  ])

  const setActiveTab = (id: number) => {
    setTabs(tabs.map((tab) => ({ ...tab, active: tab.id === id })))
  }

  const closeTab = (id: number) => {
    const newTabs = tabs.filter((tab) => tab.id !== id)
    if (newTabs.length > 0 && tabs.find((tab) => tab.id === id)?.active) {
      newTabs[0].active = true
    }
    setTabs(newTabs)
  }

  const addTab = () => {
    const newId = Math.max(...tabs.map((t) => t.id)) + 1
    setTabs([...tabs.map((tab) => ({ ...tab, active: false })), { id: newId, title: `Tab ${newId}`, active: true }])
  }

  const activeTab = tabs.find((tab) => tab.active)

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-t-lg">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center gap-2 px-3 py-2 cursor-pointer border-r border-gray-200 dark:border-gray-700 ${
              tab.active
                ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="text-sm">{tab.title}</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeTab(tab.id)
              }}
              className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded p-0.5"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
        <button
          onClick={addTab}
          className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          +
        </button>
      </div>
      <div className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg">
        {activeTab && (
          <div>
            <h3 className="font-semibold mb-2">{activeTab.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Content for {activeTab.title}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tab10
