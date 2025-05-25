"use client"

const Background03 = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gray-900">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
        `,
        }}
      ></div>
      <div className="absolute inset-0 backdrop-blur-3xl"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Glassmorphism</h3>
          <p className="text-gray-300">Frosted glass effect with blur</p>
        </div>
      </div>
    </div>
  )
}

export default Background03
