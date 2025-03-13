"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface BatteryIconProps {
  level?: number
  className?: string
}

export default function BatteryIcon({ level = 75, className }: BatteryIconProps) {
  const [isLowBatteryBlinking, setIsLowBatteryBlinking] = useState(false)

  // Blink when battery is low
  useEffect(() => {
    if (level <= 20) {
      const interval = setInterval(() => {
        setIsLowBatteryBlinking((prev) => !prev)
      }, 1000)

      return () => clearInterval(interval)
    } else {
      setIsLowBatteryBlinking(false)
    }
  }, [level])

  // Calculate how many segments to fill (out of 5)
  const getSegmentsFilled = () => {
    if (level >= 90) return 5
    if (level >= 70) return 4
    if (level >= 50) return 3
    if (level >= 30) return 2
    if (level >= 10) return 1
    return 0
  }

  const segments = getSegmentsFilled()
  const isLowBattery = level <= 20

  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative w-6 h-3 border border-[#7ad0c0] flex">
        {/* Battery segments */}
        <div className="flex w-full h-full divide-x divide-[#031a17]">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "flex-1 h-full",
                i < segments && !isLowBatteryBlinking ? "bg-[#7ad0c0]" : "bg-transparent",
                isLowBattery && i === 0 && isLowBatteryBlinking ? "bg-[#ff6b6b]" : "",
              )}
            />
          ))}
        </div>

        {/* Battery tip */}
        <div className="absolute -right-0.5 top-1/2 transform -translate-y-1/2 w-0.5 h-1.5 bg-[#7ad0c0]" />
      </div>
    </div>
  )
}

