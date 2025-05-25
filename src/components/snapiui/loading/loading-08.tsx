"use client"

const Loading08 = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
        <div
          className="absolute top-1 left-1 w-10 h-10 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"
          style={{ animationDuration: "0.8s" }}
        ></div>
        <div
          className="absolute top-2 left-2 w-8 h-8 border-4 border-transparent border-t-pink-600 rounded-full animate-spin"
          style={{ animationDuration: "0.6s" }}
        ></div>
      </div>
    </div>
  )
}

export default Loading08
