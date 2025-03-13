import { Github, ExternalLink } from "lucide-react"
import GameFrame from "@/components/game-frame"

export default function Projects() {
  return (
    <GameFrame title="PROJECTS" level={2} score={2450} health={92} mana={78}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold pixelated">MY PROJECTS</h2>
          <div className="text-xs border border-[#83f183] px-2 py-1">COMPLETED: 1/10</div>
        </div>

        <div className="grid gap-6">
          {/* <ProjectCard
            title="RETRO WEATHER APP"
            description="A weather application with LCD game aesthetics. Built with React and OpenWeather API."
            tags={["React", "API", "CSS"]}
            completion={95}
            stars={24}
          /> */}

          <ProjectCard
            title="PIXEL PORTFOLIO"
            description="This very portfolio website you're looking at right now. Inspired by classic LCD games."
            tags={["Next.js", "Tailwind", "TypeScript"]}
            completion={100}
            stars={1}
            featured={true}
          />

          <ProjectCard
            title="AI MAZE SOLVER"
            description="A simple AI based on genetics algorithm that solves mazes."
            tags={["Python", "Pygame"]}
            completion={70}
            stars={1}
          />

          {/* <ProjectCard
            title="RETRO CHAT APP"
            description="Real-time chat application with a nostalgic LCD game interface."
            tags={["Socket.io", "React", "Node.js"]}
            completion={85}
            stars={31}
          /> */}
        </div>
      </div>
    </GameFrame>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  completion = 0,
  stars = 0,
  featured = false,
}: {
  title: string
  description: string
  tags: string[]
  completion: number
  stars: number
  featured?: boolean
}) {
  return (
    <div className={`border ${featured ? "border-[#ffde3b]" : "border-[#7ad0c0]"} p-4 relative`}>
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>

      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 bg-[#ffde3b] text-black text-xs px-2 py-0.5 font-bold pixelated">
          FEATURED
        </div>
      )}

      <div className="flex justify-between items-start mb-3">
        <h3 className={`font-bold pixelated ${featured ? "text-[#ffde3b]" : ""}`}>{title}</h3>
        <div className="flex gap-2">
          <button className="hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </button>
          <button className="hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-sm mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`text-xs ${featured ? "border-[#ffde3b] text-[#ffde3b]" : "border-[#7ad0c0]"} border px-2 py-0.5`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-xs mb-1">
          <span>COMPLETION:</span>
          <span>{completion}%</span>
        </div>
        <div className="w-full h-2 bg-[#0f382f] rounded-sm overflow-hidden">
          <div
            className={`h-full ${featured ? "bg-[#ffde3b]" : "bg-[#7ad0c0]"} transition-all duration-1000 ease-out`}
            style={{ width: `${completion}%` }}
          ></div>
        </div>

        <div className="flex justify-between items-center mt-2 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-[#ffde3b]">★</span>
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>EXP +{Math.floor(completion * 0.8)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

