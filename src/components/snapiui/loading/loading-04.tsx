"use client"

const Loading04 = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex space-x-1">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="w-1 h-8 bg-blue-600 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
        ))}
      </div>
    </div>
  )
}

export default Loading04
