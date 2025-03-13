import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import LoadingScreenWrapper from "@/components/loading-screen-wrapper"

export const metadata: Metadata = {
  title: "Youssif Alashry's Portfolio",
  description: "A portfolio website inspired by retro games",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-mono">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LoadingScreenWrapper>{children}</LoadingScreenWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

