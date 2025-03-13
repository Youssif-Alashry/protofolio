"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface GameButtonProps {
  label?: string
  direction?: "left" | "right" | "up" | "down"
  onClick?: () => void
  className?: string
}

export default function GameButton({ label, direction, onClick, className }: GameButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const handleMouseDown = () => {
    setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
    if (onClick) onClick()
  }

  const getDirectionSymbol = () => {
    switch (direction) {
      case "left":
        return "←"
      case "right":
        return "→"
      case "up":
        return "↑"
      case "down":
        return "↓"
      default:
        return ""
    }
  }

  return (
    <button
      className={cn(
        "w-14 h-14 border-2 border-[#7ad0c0] rounded-full flex items-center justify-center",
        "relative overflow-hidden transition-transform",
        "active:scale-95 hover:bg-[#7ad0c0]/10",
        isPressed && "scale-95 bg-[#7ad0c0]/20",
        className,
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {/* Button texture */}
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>

      {/* Button shadow */}
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent,rgba(0,0,0,0.2))]",
          "pointer-events-none transition-opacity",
          isPressed ? "opacity-0" : "opacity-100",
        )}
      ></div>

      {/* Button content */}
      <span className="text-lg font-bold relative z-10">{direction ? getDirectionSymbol() : label}</span>
    </button>
  )
}

