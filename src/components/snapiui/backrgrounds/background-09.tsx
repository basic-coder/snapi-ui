"use client"

const Background09 = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          repeating-conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            rgba(255,255,255,0.1) 15deg,
            transparent 30deg,
            rgba(255,255,255,0.05) 45deg,
            transparent 60deg
          )
        `,
          animation: "rotate 20s linear infinite",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Rotating Rays</h3>
          <p className="text-emerald-100">Animated conic gradient rays</p>
        </div>
      </div>
      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Background09
