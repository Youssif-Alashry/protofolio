import { Send } from "lucide-react"
import GameFrame from "@/components/game-frame"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <GameFrame title="CONTACT" level={4} score={1200} health={75} mana={65}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold pixelated">SEND MESSAGE</h2>
          <div className="text-xs border border-[#7ad0c0] px-2 py-1 flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-[#7ad0c0] animate-pulse"></span>
            ONLINE
          </div>
        </div>

        <div className="border border-[#7ad0c0] p-4 relative">
          <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>

          {/* Form wrapper */}
          <form
            action="https://formspree.io/f/mbldadgg"
            method="POST"
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-sm font-bold">YOUR NAME:</label>
              <Input
                type="text"
                name="name"
                placeholder="ENTER NAME"
                className="bg-[#031a17] border-[#7ad0c0] text-[#7ad0c0] placeholder:text-[#7ad0c0]/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold">YOUR EMAIL:</label>
              <Input
                type="email"
                name="email"
                placeholder="ENTER EMAIL"
                className="bg-[#031a17] border-[#7ad0c0] text-[#7ad0c0] placeholder:text-[#7ad0c0]/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold">MESSAGE:</label>
              <Textarea
                name="message"
                placeholder="TYPE YOUR MESSAGE HERE..."
                className="bg-[#031a17] border-[#7ad0c0] text-[#7ad0c0] placeholder:text-[#7ad0c0]/50 min-h-[120px]"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="text-xs"></div>
              <Button
                type="submit"
                className="bg-[#7ad0c0] text-[#031a17] hover:bg-[#7ad0c0]/80 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                SEND
              </Button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactOption title="INSTAGRAM" value="@youssif.alashry" description="+10 XP for each follow" />
          <ContactOption title="X" value="@Youssif_Alashry" description="+5 XP for each follow" />
          <ContactOption title="GITHUB" value="@Youssif-Alashry" description="+20 XP for each star" />
          <ContactOption title="LINKEDIN" value="@youssif-alashry" description="+15 XP for connections" />
        </div>

        <div className="border border-[#7ad0c0] p-3 relative">
          <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>
          <h3 className="text-lg font-bold mb-2 pixelated">QUEST LOG</h3>

          <div className="space-y-2">
            <QuestItem title="COLLABORATION REQUEST" status="ACTIVE" reward="+500 XP, +200 GOLD" />
            <QuestItem title="FREELANCE OPPORTUNITY" status="PENDING" reward="+300 XP, +150 GOLD" />
            <QuestItem title="CREATING A PROTOFOLIO" status="COMPLETED" reward="+250 XP, +100 GOLD" />
          </div>
        </div>
      </div>
    </GameFrame>
  )
}

function ContactOption({
  title,
  value,
  description,
}: {
  title: string
  value: string
  description: string
}) {
  let href = ""
  if (title === "INSTAGRAM") {
    href = 'https://www.instagram.com/youssif.alashry/'
  } else if (title === "X") {
    href = 'https://x.com/Youssif_Alashry'
  } else if (title === "GITHUB") {
    href = 'https://github.com/Youssif-Alashry'
  } else if (title === "LINKEDIN") {
    href = 'https://www.linkedin.com/in/youssif-alashry/'
  }
  return (
    <div className="border border-[#7ad0c0] p-3 relative">
      <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>
      <h3 className="text-sm font-bold mb-1">{title}</h3>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#7ad0c0] mb-1 block"
      >
        {value}
      </a>
      <p className="text-xs text-[#7ad0c0]/70">{description}</p>
    </div>
  )
}

function QuestItem({
  title,
  status,
  reward,
}: {
  title: string
  status: "ACTIVE" | "PENDING" | "COMPLETED"
  reward: string
}) {
  const getStatusColor = () => {
    switch (status) {
      case "ACTIVE":
        return "text-[#7ad0c0] border-[#7ad0c0]"
      case "PENDING":
        return "text-[#ffde3b] border-[#ffde3b]"
      case "COMPLETED":
        return "text-[#83a8ff] border-[#83a8ff]"
    }
  }

  return (
    <div className="flex items-center justify-between border border-[#7ad0c0] p-2">
      <div>
        <h4 className="text-sm font-bold">{title}</h4>
        <p className="text-xs">{reward}</p>
      </div>
      <div className={`text-xs px-2 py-0.5 border ${getStatusColor()}`}>{status}</div>
    </div>
  )
}
