"use client"

const Background07 = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(255,255,255,0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 40%, rgba(255,255,255,0.05) 0%, transparent 50%),
          radial-gradient(circle at 60% 60%, rgba(0,0,0,0.1) 0%, transparent 50%)
        `,
        }}
      ></div>
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background: `linear-gradient(45deg, 
                    transparent 30%, 
                    rgba(255,255,255,0.1) 50%, 
                    transparent 70%)`,
          animation: "shimmer 3s infinite",
        }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Animated Orbs</h3>
          <p className="text-orange-100">Floating light orbs with shimmer</p>
        </div>
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  )
}

export default Background07
