"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import GameFrame from "./game-frame"

interface LoadingScreenProps {
  onLoadComplete?: () => void
  minLoadTime?: number
}

export default function LoadingScreen({ onLoadComplete, minLoadTime = 4000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("BOOTING SYSTEM")
  const [dots, setDots] = useState("")

  // Handle keyboard events to skip loading
  useEffect(() => {
    const handleKeyDown = () => {
      setProgress(100)
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("touchstart", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("touchstart", handleKeyDown)
    }
  }, [])

  // Handle loading animation
  useEffect(() => {
    const loadingTexts = [
      "BOOTING SYSTEM",
      "INITIALIZING MEMORY",
      "LOADING ASSETS",
      "RENDERING PIXELS",
      "CALIBRATING DISPLAY",
      "STARTING GAME ENGINE",
      "READY",
    ]

    // Animate loading dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 300)

    // Start time
    const startTime = Date.now()

    // Progress bar animation
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime

      // Calculate progress based on elapsed time
      let calculatedProgress
      if (elapsed < minLoadTime * 0.3) {
        // Start slow (0-30%)
        calculatedProgress = Math.min(30, Math.floor((elapsed / (minLoadTime * 0.3)) * 30))
      } else if (elapsed < minLoadTime * 0.7) {
        // Middle speed (30-70%)
        calculatedProgress = Math.min(70, 30 + Math.floor(((elapsed - minLoadTime * 0.3) / (minLoadTime * 0.4)) * 40))
      } else {
        // End faster (70-100%)
        calculatedProgress = Math.min(100, 70 + Math.floor(((elapsed - minLoadTime * 0.7) / (minLoadTime * 0.3)) * 30))
      }

      setProgress(calculatedProgress)

      // Update loading text based on progress
      const textIndex = Math.min(Math.floor((calculatedProgress / 100) * loadingTexts.length), loadingTexts.length - 1)
      setLoadingText(loadingTexts[textIndex])

      if (calculatedProgress >= 100) {
        clearInterval(interval)
        clearInterval(dotsInterval)
        setTimeout(() => {
          if (onLoadComplete) onLoadComplete()
        }, 500)
      }
    }, 50)

    return () => {
      clearInterval(interval)
      clearInterval(dotsInterval)
    }
  }, [minLoadTime, onLoadComplete])

  return (
    <GameFrame title="SYSTEM BOOT" level={0} score={0} health={100} mana={100} backLink="/" hideHeader={true}>
      <div className="w-full h-[62vh] flex flex-col items-center justify-center px-4 sm:px-6">
        
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold pixelated text-[#7ad0c0] mb-2">YOUSSIF ALASHRY</h1>
          <div className="text-xs text-[#7ad0c0]/70 mb-1">VERSION 1.0.4</div>
          {/* <div className="text-xs text-[#7ad0c0]/70">© 2025 RETRO GAMES INC.</div> */}
        </div>

        <div className="space-y-6 w-full max-w-md">
          {/* CRT screen effect */}
          <div className="border-4 border-[#0f2f2a] rounded-md overflow-hidden relative">
            <div
              className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(90deg,rgba(0,10,8,.08)_1px,transparent_1px),linear-gradient(rgba(0,10,8,.08)_1px,transparent_1px)]"
              style={{ backgroundSize: "4px 4px" }}
            />

            <div className="p-4 bg-[#031a17]">
              {/* Loading bar - pixelated style */}
              <div className="border-2 border-[#7ad0c0] p-1 mb-4">
                <div className="h-5 bg-[#031a17] relative">
                  <div
                    className="absolute inset-0 grid grid-cols-20"
                    style={{ gridTemplateColumns: "repeat(20, 1fr)" }}
                  >
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "border-r border-[#031a17]",
                          i < Math.floor(progress / 5) ? "bg-[#7ad0c0]" : "bg-transparent",
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Loading text */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-[#7ad0c0] pixelated font-bold">
                  {loadingText}
                  {dots}
                </div>
                <div className="text-sm text-[#7ad0c0] font-bold">{progress}%</div>
              </div>

              {/* Loading animation - more retro style */}
              <div className="flex justify-center mb-3">
                <div className="grid grid-cols-8 gap-1 w-full max-w-[240px]">
                  {Array.from({ length: 8 }).map((_, i) => {
                    const isActive =
                      Math.floor(progress / 12.5) >= i ||
                      (progress > 0 && progress < 100 && i === Math.floor(Date.now() / 500) % 8)
                    return (
                      <div
                        key={i}
                        className={cn(
                          "aspect-square border border-[#7ad0c0]/30",
                          isActive ? "bg-[#7ad0c0]" : "bg-transparent",
                        )}
                      />
                    )
                  })}
                </div>
              </div>

              {/* Memory check */}
              <div className="text-xs text-[#7ad0c0]/80 font-mono">
                <div className="mb-1">MEMORY CHECK: {progress > 30 ? "OK" : "CHECKING..."}</div>
                <div className="mb-1">DISPLAY DRIVER: {progress > 50 ? "LOADED" : "LOADING..."}</div>
                <div className="mb-1">ASSETS: {progress > 70 ? `${Math.min(progress, 100)}%` : "WAITING..."}</div>
                <div>SYSTEM STATUS: {progress === 100 ? "READY" : "INITIALIZING..."}</div>
              </div>
            </div>
          </div>

          <div className="text-xs text-center text-[#7ad0c0]/70 mt-4 pixelated">PRESS ANY KEY TO SKIP</div>
        </div>
      </div>
    </GameFrame>
  )
}

