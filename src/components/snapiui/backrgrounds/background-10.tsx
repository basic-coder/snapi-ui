"use client"

const Background10 = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              background: `radial-gradient(circle, ${
                ["rgba(139, 92, 246, 0.3)", "rgba(236, 72, 153, 0.3)", "rgba(59, 130, 246, 0.3)"][
                  Math.floor(Math.random() * 3)
                ]
              } 0%, transparent 70%)`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Floating Bubbles</h3>
          <p className="text-violet-200">Organic floating light bubbles</p>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.1); }
          50% { transform: translateY(-10px) translateX(-10px) scale(0.9); }
          75% { transform: translateY(-30px) translateX(5px) scale(1.05); }
        }
      `}</style>
    </div>
  )
}

export default Background10
