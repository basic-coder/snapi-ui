"use client"

const Background08 = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-slate-900">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
      <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Tech Grid</h3>
          <p className="text-slate-300">Futuristic grid with animated nodes</p>
        </div>
      </div>
    </div>
  )
}

export default Background08
