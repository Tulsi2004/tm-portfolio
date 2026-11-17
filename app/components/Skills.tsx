import {
  Briefcase,
  Database,
  Languages,
  LockKeyhole,
  MonitorSmartphone,
  Rocket,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript",
      "HTML5", "CSS3", "Tailwind CSS", "Shadcn UI", "Responsive Web Design",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database & ORM",
    skills: ["MySQL", "PostgreSQL", "Supabase", "MongoDB Atlas", "Prisma ORM", "Redis"],
  },
  {
    category: "Authentication",
    skills: ["Clerk", "Supabase Auth", "JWT"],
  },
  {
    category: "DevOps & Deployment",
    skills: [
      "Linux", "VPS Hosting", "Docker", "Coolify", "PM2",
      "Nginx", "Domain & DNS", "HTTPS / SSL", "Vercel", "Render",
      "Web Hosting", "Google Cloud",
    ],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    category: "Professional",
    skills: [
      "Problem Solving", "Software Troubleshooting", "Technical Issues Analysis",
      "Quick Learner", "Project Ownership", "Time Management",
      "Team Leadership", "Team Coordination", "Teamwork",
    ],
  },
  {
    category: "Languages",
    skills: ["English", "Hindi", "Marathi", "Tamil", "Korean (Intermediate)"],
  },
];

// Card colours cycle through the groups; each group's sticker shows what it is.
// Yellow leads so the last card (Languages) lands on coral, not the butter of Projects below.
const cardColors = ["#f5cf5c", "#7ec8f2", "#f6b3c6", "#e8553e"];
const stickers: Record<string, LucideIcon> = {
  Frontend: MonitorSmartphone,
  Backend: Server,
  "Database & ORM": Database,
  Authentication: LockKeyhole,
  "DevOps & Deployment": Rocket,
  Tools: Wrench,
  Professional: Briefcase,
  Languages: Languages,
};

export default function Skills() {
  return (
    <section id="skills" className="theme-ink py-16 md:py-28 px-6 bg-background text-foreground">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="02" title="Skills" />

        {/* Each group pins a little lower than the last, so they stack as you scroll */}
        <div className="space-y-6">
          {skillGroups.map(({ category, skills }, i) => {
            const Sticker = stickers[category] ?? Wrench;
            return (
            <div
              key={category}
              style={{ top: `calc(5.5rem + ${i * 14}px)`, background: cardColors[i % cardColors.length] }}
              className="group sticky min-h-56 rounded-3xl border-2 border-[#1f1a17] p-7 md:p-10 text-[#1f1a17] shadow-[0_-8px_30px_rgba(0,0,0,0.35)] grid sm:grid-cols-[1fr_auto] gap-6"
            >
              <div>
                <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-5">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-body text-sm rounded-full border border-[#1f1a17]/30 bg-white/25 px-3.5 py-1 transition-colors hover:bg-[#1f1a17] hover:text-[#fcf8ed]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Sticker */}
              <span
                aria-hidden
                className="hidden sm:grid size-24 place-items-center self-start rounded-full border-2 border-[#1f1a17] bg-[#fcf8ed] text-[#1f1a17] shadow-[4px_4px_0_0_#1f1a17] -rotate-12 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              >
                <Sticker className="size-11" strokeWidth={1.75} />
              </span>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
