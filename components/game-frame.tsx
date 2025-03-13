"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Volume2, VolumeX, Zap, Heart } from "lucide-react"
import GameButton from "./game-button"
import { cn } from "@/lib/utils"

interface GameFrameProps {
  children: React.ReactNode
  title: string
  level?: number
  score?: number
  health?: number
  mana?: number
  backLink?: string
  className?: string
  hideHeader?: boolean
}

export default function GameFrame({
  children,
  title,
  level = 1,
  score = 0,
  health = 100,
  mana = 100,
  backLink = "/",
  className,
  hideHeader = false,
}: GameFrameProps) {
  const [sound, setSound] = useState(false)
  const [isFlickering, setIsFlickering] = useState(false)

  // Random screen flicker effect
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsFlickering(true)
        setTimeout(() => setIsFlickering(false), 150)
      }
    }, 5000)

    return () => clearInterval(flickerInterval)
  }, [])

  // Sound effect for button clicks
  const playClickSound = () => {
    if (sound && typeof window !== "undefined") {
      const audio = new Audio("/click.mp3")
      audio.volume = 0.2
      audio.play()
    }
  }

  return (
    <div className="min-h-screen bg-[#071a17] text-[#7ad0c0] font-mono relative overflow-hidden flex items-center justify-center p-2 sm:p-4">
      {/* Device frame */}
      <div className="absolute inset-0 bg-[#071a17] pointer-events-none"></div>
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none mix-blend-soft-light"></div>

      {/* Game console frame */}
      <div className="relative w-full max-w-4xl mx-auto bg-[#0a2320] rounded-lg sm:rounded-2xl p-3 sm:p-6 md:p-10 shadow-[0_0_50px_rgba(0,20,15,0.7)] border-t border-[#1a3a35] border-l">
        {/* Device texture */}
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none mix-blend-overlay rounded-2xl"></div>

        {/* Sound toggle */}
        {/* <button
          onClick={() => setSound(!sound)}
          className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-4 md:right-4 text-[#7ad0c0]/50 hover:text-[#7ad0c0] z-10 p-1"
          aria-label={sound ? "Mute sound" : "Enable sound"}
        >
          {sound ? <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" /> : <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" />}
        </button> */}

        {/* Main screen area */}
        <div
          className={cn(
            "relative border-4 sm:border-8 border-[#0f2f2a] rounded-lg bg-[#031a17] shadow-inner overflow-hidden",
            "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(5,30,25,0),rgba(0,10,8,0.4))] before:pointer-events-none before:z-30",
            isFlickering && "screen-flicker",
            className,
          )}
        >
          {/* LCD screen grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(90deg,rgba(0,10,8,.08)_1px,transparent_1px),linear-gradient(rgba(0,10,8,.08)_1px,transparent_1px)]"
            style={{ backgroundSize: "4px 4px" }}
          />

          {/* Scan lines effect */}
          <div
            className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(to_bottom,transparent_0px,transparent_3px,rgba(0,0,0,0.07)_4px)]"
            style={{ backgroundSize: "100% 4px" }}
          />

          {/* Screen glare */}
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0%,transparent_40%)] pointer-events-none z-30"></div>

          <div className="relative z-0 p-2 sm:p-4">
            {/* Header with game-like UI */}
            {!hideHeader && (
              <header className="border-2 border-[#7ad0c0] p-2 sm:p-4 mb-4 sm:mb-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#7ad0c0] opacity-20"></div>
                <div className="flex justify-between items-center">
                  <h1 className="text-base sm:text-xl md:text-3xl font-bold tracking-tight pixelated">{title}</h1>
                  <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs">
                    <span className="inline-block w-2 sm:w-3 h-2 sm:h-3 bg-[#7ad0c0] animate-pulse"></span>
                    <span>LEVEL {level}</span>
                  </div>
                </div>
                <div className="mt-2 flex justify-between text-[10px] sm:text-xs">
                  <Link href={backLink} className="flex items-center hover:underline" onClick={playClickSound}>
                    <ArrowLeft className="w-2 h-2 sm:w-3 sm:h-3 mr-1" /> BACK
                  </Link>
                  <div>SCORE: {score}</div>
                </div>

                {/* Status bars */}
                <div className="mt-2 sm:mt-3 grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Heart className="w-2 h-2 sm:w-3 sm:h-3 text-[#ff6b6b]" />
                    <div className="w-full h-2 bg-[#0f382f] rounded-sm overflow-hidden">
                      <div className="h-full bg-[#ff6b6b]" style={{ width: `${health}%` }}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Zap className="w-2 h-2 sm:w-3 sm:h-3 text-[#7ad0c0]" />
                    <div className="w-full h-2 bg-[#0f382f] rounded-sm overflow-hidden">
                      <div className="h-full bg-[#7ad0c0]" style={{ width: `${mana}%` }}></div>
                    </div>
                  </div>
                </div>
              </header>
            )}

            {/* Main game screen */}
            <main
              className={cn(
                "border-2 border-[#7ad0c0] p-2 sm:p-4 mb-4 sm:mb-6 min-h-[50vh] relative",
                hideHeader && "mt-0",
              )}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#7ad0c0] opacity-20"></div>
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

              {/* Game screen content */}
              {children}
            </main>
          </div>
        </div>

        {/* Game controls */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex gap-3 sm:gap-4">
            <GameButton direction="left" onClick={playClickSound} />
            <GameButton direction="right" onClick={playClickSound} />
          </div>

          <div className="hidden sm:block">
            <div className="circuit-pattern w-12 sm:w-16 h-12 sm:h-16 rounded-full"></div>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <GameButton label="A" onClick={playClickSound} />
            <GameButton label="B" onClick={playClickSound} />
          </div>
        </div>
      </div>
    </div>
  )
}

