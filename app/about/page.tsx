import GameFrame from "@/components/game-frame"
import PixelAvatar from "@/components/pixel-avatar"

export default function About() {
  return (
    <GameFrame title="ABOUT ME" level={1} score={2003} health={95} mana={88}>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="w-32 h-32 border-2 border-[#83f183] flex items-center justify-center relative overflow-hidden">
            {/* Character frame */}
            <div className="absolute inset-0 bg-grid-small opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-[#83f183] opacity-20"></div>

            {/* Pixelated avatar */}
            <div className="w-24 h-24 relative">
              <PixelAvatar size={16} />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2 pixelated">Youssif Alashry</h2>
            <p className="text-sm mb-4">LEVEL 21 SOFTWARE DEVELOPER</p>

            <div className="grid grid-cols-2 gap-2 text-xs mb-4">
              <StatBar label="STRENGTH" value={75} />
              <StatBar label="AGILITY" value={80} />
              <StatBar label="INTELLECT" value={95} />
              <StatBar label="CREATIVITY" value={90} />
            </div>

            <div className="border border-[#83f183] p-2">
              <div className="flex justify-between text-xs mb-1">
                <span>EXPERIENCE:</span>
                <span>12,450 / 15,000</span>
              </div>
              <div className="w-full h-2 bg-[#0f380f] rounded-sm overflow-hidden">
                <div className="h-full bg-[#83f183]" style={{ width: "83%" }}></div>
              </div>
              <div className="text-xs mt-1 text-right">NEXT LEVEL: 17%</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold pixelated flex items-center">
            <span className="inline-block w-2 h-2 bg-[#83f183] mr-2 animate-pulse"></span>
            MY STORY
          </h3>
          <div className="border border-[#83f183] p-3 relative">
            <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>
            <p className="text-sm leading-relaxed mb-2">
              I am a junior software developer, and currently pursuing a Bachelor's degree in Computer Science.
            </p>
            <p className="text-sm leading-relaxed">
              I have experience in frontend development and mobile app development using Flutter, along with a background in various other CS topics.
            </p>
          </div>

          {/* 
          <div className="border border-[#83f183] p-3 relative">
            <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>
            <p className="text-sm leading-relaxed">
              When I'm not coding, you can find me collecting vintage handheld games, participating in game jams, or
              experimenting with pixel art.
            </p>
          </div> */}

        </div>

        <div>
          <h3 className="text-lg font-bold mb-2 pixelated flex items-center">
            <span className="inline-block w-2 h-2 bg-[#83f183] mr-2 animate-pulse"></span>
            EQUIPMENT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <EquipmentItem name="HP Pavilion" rarity="LEGENDARY" stat="+15 CODING" />
            <EquipmentItem name="Mechanical Keyboard" rarity="RARE" stat="+10 SPEED" />
            <EquipmentItem name="Rubik's Cube" rarity="EPIC" stat="+20 CREATIVITY" />
            <EquipmentItem name="Coffee Mug" rarity="COMMON" stat="+5 ENERGY" />
          </div>
        </div>

        <div className="mt-4 border-t border-[#83f183] pt-4">
          <div className="text-center">
            <div className="text-xs mb-1">ACHIEVEMENTS UNLOCKED: 9/20</div>
            <div className="flex justify-center gap-2 flex-wrap">
              {["Python", "C++", "HTML", "CSS", "JS", "REACT", "NEXT.JS", "TAILWIND", "FLUTTER"].map((badge, i) => (
                <div key={i} className="text-xs border border-[#83f183] px-2 py-0.5 bg-[#0f380f]">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GameFrame>
  )
}

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}:</span>
        <span>{value}/100</span>
      </div>
      <div className="w-full h-2 bg-[#0f382f] rounded-sm overflow-hidden">
        <div className="h-full bg-[#7ad0c0]" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  )
}

function EquipmentItem({ name, rarity, stat }: { name: string; rarity: string; stat: string }) {
  const getRarityColor = () => {
    switch (rarity) {
      case "LEGENDARY":
        return "text-[#ffde3b] border-[#ffde3b]"
      case "EPIC":
        return "text-[#d183ff] border-[#d183ff]"
      case "RARE":
        return "text-[#83a8ff] border-[#83a8ff]"
      default:
        return "text-[#7ad0c0] border-[#7ad0c0]"
    }
  }

  return (
    <div className={`border ${getRarityColor()} p-2 relative`}>
      <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>
      <div className="flex justify-between items-center">
        <span>{name}</span>
        <span className="text-xs">{rarity}</span>
      </div>
      <div className="text-xs mt-1">{stat}</div>
    </div>
  )
}

