"use client"

const Loading06 = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-800"></div>
        <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-purple-200 dark:border-purple-800"></div>
        <div
          className="absolute inset-2 rounded-full border-4 border-purple-600 border-b-transparent animate-spin"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>
    </div>
  )
}

export default Loading06
