export default function PixelAvatar({ size = 8 }: { size?: number }) {
  // Create a simple pixelated face pattern
  const grid = Array.from({ length: size * size })

  // Define which pixels should be filled to create a face
  const getPixelColor = (index: number) => {
    const row = Math.floor(index / size)
    const col = index % size

    // Eyes
    if (row === Math.floor(size * 0.3) && (col === Math.floor(size * 0.25) || col === Math.floor(size * 0.75))) {
      return "bg-black"
    }

    // Mouth
    if (row === Math.floor(size * 0.7) && col >= Math.floor(size * 0.25) && col <= Math.floor(size * 0.75)) {
      return "bg-black"
    }

    // // Hair
    // if (row === 0 && col >= Math.floor(size * 0.1) && col <= Math.floor(size * 0.9)) {
    //   return "bg-[#2a5550]"
    // }

    // Random noise for texture
    if (Math.random() > 0.95) {
      return "bg-[#6ad0c0]/30"
    }

    return ""
  }

  return (
    <div className="w-full h-full bg-[#7ad0c0]">
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          gridTemplateRows: `repeat(${size}, 1fr)`,
        }}
      >
        {grid.map((_, i) => (
          <div key={i} className={getPixelColor(i)} />
        ))}
      </div>
    </div>
  )
}

