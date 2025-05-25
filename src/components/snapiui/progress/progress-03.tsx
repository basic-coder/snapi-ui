"use client"

const Progress03 = () => {
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="relative">
        <div className="w-24 h-24 mx-auto">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
            />
            <path
              d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="75, 100"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-semibold">75%</span>
          </div>
        </div>
        <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">Project Progress</p>
      </div>
    </div>
  )
}

export default Progress03
