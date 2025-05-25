"use client"

const Background02 = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Mesh Gradient</h3>
          <p className="text-green-100">Complex gradient with overlay effects</p>
        </div>
      </div>
    </div>
  )
}

export default Background02
