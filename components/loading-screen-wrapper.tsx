"use client"

import type React from "react"

import { useState, useEffect } from "react"
import LoadingScreen from "./loading-screen"

export default function LoadingScreenWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Check if this is the first visit in this session
    const hasSeenLoadingScreen = sessionStorage.getItem("hasSeenLoadingScreen")

    if (!hasSeenLoadingScreen) {
      // First visit, show loading screen and set flag
      sessionStorage.setItem("hasSeenLoadingScreen", "true")
    } else {
      // Not first visit, skip loading screen
      setIsLoading(false)
    }
  }, [])

  // Don't render loading screen during SSR to avoid hydration mismatch
  if (!isClient) return <>{children}</>

  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
  }

  return <>{children}</>
}

