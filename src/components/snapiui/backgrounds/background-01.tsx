"use client"

const Background01 = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Gradient Background</h3>
          <p className="text-blue-100">Beautiful linear gradient from blue to pink</p>
        </div>
      </div>
    </div>
  )
}

export default Background01
