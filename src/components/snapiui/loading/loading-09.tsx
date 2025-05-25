"use client"

const Loading09 = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-blue-600 rounded-sm animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Loading09
