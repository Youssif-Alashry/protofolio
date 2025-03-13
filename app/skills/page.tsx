import GameFrame from "@/components/game-frame"

export default function Skills() {
  return (
    <GameFrame title="SKILLS" level={3} score={3750} health={88} mana={95}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold pixelated">MY SKILLS</h2>
          <div className="text-xs border border-[#83f183] px-2 py-1">SKILL POINTS: 12</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillTree
            title="FRONTEND"
            skills={[
              { name: "HTML", level: 5, maxLevel: 5 },
              { name: "CSS", level: 5, maxLevel: 5 },
              { name: "JavaScript", level: 5, maxLevel: 5 },
              { name: "React", level: 1, maxLevel: 5 },
              // { name: "Next.js", level: 0, maxLevel: 5 },
              { name: "TypeScript", level: 0, maxLevel: 5 },
              { name: "Tailwind", level: 0, maxLevel: 5 },
            ]}
          />

          <SkillTree
            title="OTHER"
            skills={[
              { name: "Python", level: 4, maxLevel: 5 },
              { name: "C++", level: 3, maxLevel: 5 },
              { name: "Flutter", level: 4, maxLevel: 5 },
              { name: "Git", level: 4, maxLevel: 5 },
              { name: "Figma", level: 4, maxLevel: 5 },
              { name: "Game Development", level: 1, maxLevel: 5 },
            ]}
          />

          {/* <SkillTree
            title="BACKEND"
            skills={[
              { name: "Node.js", level: 3, maxLevel: 5 },
              { name: "Express", level: 3, maxLevel: 5 },
              { name: "MongoDB", level: 2, maxLevel: 5 },
              { name: "SQL", level: 2, maxLevel: 5 },
              { name: "GraphQL", level: 2, maxLevel: 5 },
            ]}
          />

          <SkillTree
            title="TOOLS"
            skills={[
              { name: "Git", level: 4, maxLevel: 5 },
              { name: "VS Code", level: 5, maxLevel: 5 },
              { name: "Figma", level: 3, maxLevel: 5 },
              { name: "Terminal", level: 4, maxLevel: 5 },
              { name: "DevTools", level: 4, maxLevel: 5 },
              
            ]}
          /> */}
        </div>

        <div className="border border-[#83f183] p-3 relative">
          <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>
          <h3 className="text-lg font-bold mb-3 pixelated">SPECIAL ABILITIES</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SpecialAbility
              name="PROBLEM SOLVING"
              description="Efficiently solve problems with logic and creativity"
              cooldown="0s"
              active={true}
            />
            <SpecialAbility
              name="ENGLISH C1-C2"
              description="My English is pretty good i guess."
              cooldown="30s"
              active={true}
            />
            <SpecialAbility
              name="DEBUG VISION"
              description="Quickly identify and fix bugs in code"
              cooldown="60s"
              active={true}
            />
            <SpecialAbility
              name="COFFEE BOOST"
              description="Temporary coding speed increase"
              cooldown="4h"
              active={false}
            />
          </div>
        </div>
      </div>
    </GameFrame>
  )
}

function SkillTree({
  title,
  skills,
}: {
  title: string
  skills: { name: string; level: number; maxLevel: number }[]
}) {
  return (
    <div className="border border-[#7ad0c0] p-3 relative">
      <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>
      <h3 className="text-lg font-bold mb-3 pixelated">{title}</h3>

      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span>{skill.name}</span>
              <span>
                LVL {skill.level}/{skill.maxLevel}
              </span>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: skill.maxLevel }).map((_, i) => (
                <div
                  key={i}
                  className={`h-3 flex-1 ${i < skill.level ? "bg-[#7ad0c0]" : "bg-[#0f382f] border border-[#7ad0c0]/30"}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SpecialAbility({
  name,
  description,
  cooldown,
  active,
}: {
  name: string
  description: string
  cooldown: string
  active: boolean
}) {
  return (
    <div className={`border ${active ? "border-[#7ad0c0]" : "border-[#7ad0c0]/50"} p-2 relative`}>
      <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>

      <div className="flex items-start justify-between">
        <div>
          <h4 className={`font-bold ${active ? "" : "text-[#7ad0c0]/50"}`}>{name}</h4>
          <p className={`text-xs mt-1 ${active ? "" : "text-[#7ad0c0]/50"}`}>{description}</p>
        </div>
        <div
          className={`text-xs px-2 py-0.5 border ${active ? "border-[#7ad0c0] text-[#7ad0c0]" : "border-[#7ad0c0]/50 text-[#7ad0c0]/50"}`}
        >
          {active ? "READY" : `CD: ${cooldown}`}
        </div>
      </div>
    </div>
  )
}

