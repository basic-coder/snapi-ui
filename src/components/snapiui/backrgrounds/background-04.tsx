"use client"

const Background04 = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-indigo-900">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )
        `,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Grid Pattern</h3>
          <p className="text-indigo-200">Subtle crosshatch pattern overlay</p>
        </div>
      </div>
    </div>
  )
}

export default Background04
