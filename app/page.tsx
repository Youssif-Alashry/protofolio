import type React from "react"
import Link from "next/link"
import { ArrowRight, Mail, User, Code, Gamepad2, Trophy, Zap } from "lucide-react"
import GameFrame from "@/components/game-frame"
import { Button } from "@/components/ui/button"

// Update the page component to use the softer green colors
export default function Home() {
  return (
    <GameFrame title="HOME SCREEN" level={1} score={1337} health={85} mana={92}>
      <div className="flex flex-col h-full">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold pixelated animate-pulse-slow">Youssif Alashry</h2>
          <div className="hidden md:flex items-center">
            <div className="battery-indicator flex gap-[1px]">
              <div className="h-full w-2 bg-[#7ad0c0] animate-pulse-slow"></div>
              <div className="h-full w-2 bg-[#7ad0c0] animate-pulse-slow"></div>
              <div className="h-full w-2 bg-[#7ad0c0] animate-pulse-slow"></div>
              <div className="h-full w-2 bg-[#7ad0c0] animate-pulse-slow"></div>
              <div className="h-full w-2 bg-[#0f382f] border border-[#7ad0c0]/30"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <GameScreenSection
            icon={<User className="w-5 h-5" />}
            title="ABOUT ME"
            description="Dedicated software developer and computer science student."
            link="/about"
            xp={95}
          />

          <GameScreenSection
            icon={<Code className="w-5 h-5" />}
            title="PROJECTS"
            description="Check out my latest works and projects."
            link="/projects"
            xp={87}
          />

          <GameScreenSection
            icon={<Gamepad2 className="w-5 h-5" />}
            title="SKILLS"
            description="Python, React, TypeScript, CSS, and other"
            link="/skills"
            xp={92}
          />

          <GameScreenSection
            icon={<Mail className="w-5 h-5" />}
            title="CONTACT"
            description="Get in touch for collaborations or just to say hello."
            link="/contact"
            xp={78}
          />
        </div>

        <div className="mt-auto">
          <div className="flex justify-center mb-4">
            <div className="achievements flex gap-2">
              {[Trophy, Zap, Code, Gamepad2].map((Icon, i) => (
                <div key={i} className="achievement">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs mb-2 blink">PRESS START TO CONTINUE</p>
            <Button variant="outline" className="border-[#7ad0c0] text-[#7ad0c0] hover:bg-[#7ad0c0]/10 px-6">
              START
            </Button>
          </div>
        </div>
      </div>
    </GameFrame>
  )
}

function GameScreenSection({
  icon,
  title,
  description,
  link,
  xp = 0,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  xp: number
}) {
  return (
    <Link
      href={link}
      className="border border-[#7ad0c0] p-3 hover:bg-[#7ad0c0]/10 transition-colors group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>

      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 flex items-center justify-center border border-[#7ad0c0]">{icon}</div>
        <h3 className="font-bold pixelated">{title}</h3>
      </div>
      <p className="text-sm mb-3">{description}</p>

      <div className="flex flex-col gap-2">
        <div className="w-full h-2 bg-[#0f382f] rounded-sm overflow-hidden">
          <div className="h-full bg-[#7ad0c0] transition-all duration-1000 ease-out" style={{ width: `${xp}%` }}></div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span>XP: {xp}/100</span>
          <span className="group-hover:underline flex items-center">
            SELECT <ArrowRight className="w-3 h-3 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}

